import { db } from "~/server/db";
import { asc, eq } from "drizzle-orm";
import {activities, flags, locations} from "~/server/db/schema";
import ItineraryPageClient from "./ItineraryPageClient";
import { type StatusType } from "~/types/tripStatus";
import { type StatusType as ActivityStatusType } from "~/types/itineraryStatus";

function calculateStatus(startTime: Date, endTime: Date): StatusType {
    const now = new Date();
    if (startTime > now) return "Upcoming";
    if (startTime <= now && endTime >= now) return "In Progress";
    return "Completed";
}

export default async function ItineraryPage() {
    const overrideStatusFlag = await db.select().from(flags).where(eq(flags.name, "override_status")).execute();
    const overrideStatus = overrideStatusFlag.length > 0 && typeof(overrideStatusFlag[0]) != "undefined" ? overrideStatusFlag[0].status as StatusType : null;

    const dbActivities = await db
        .select()
        .from(activities)
        .leftJoin(locations, eq(locations.id, activities.locationId)) // Fixed join
        .orderBy(asc(activities.startTime));

    const itineraryItems = dbActivities.map(({ activity, location }) => ({
        id: Number(activity.id), // Convert id to number
        title: activity.title,
        description: activity.description,
        status: activity.status as ActivityStatusType ?? undefined,
        startTime: activity.startTime.toISOString(),
        endTime: activity.endTime.toISOString(),
        location: {
            name: location?.name ?? "",
            lat: Number(location?.latitude ?? 0),
            lng: Number(location?.longitude ?? 0),
        },
    }));

    const now = new Date();
    let status: StatusType = "Upcoming";
    if (overrideStatus) {
        status = overrideStatus;
    }
     else if (dbActivities.length > 0) {
        const past2Days = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

        // Check for delayed or cancelled activities in the past 2 days
        const hasDelays = dbActivities.some(({ activity }) =>
            new Date(activity.endTime).getTime() >= past2Days.getTime() &&
            activity.status && ["Delayed", "Postponed", "Cancelled"].includes(activity.status)
        );

        if (hasDelays) {
            status = "Delays";
        } else {
            const startTime = Math.min(...dbActivities.map(({ activity }) => new Date(activity.startTime).getTime()));
            const endTime = Math.max(...dbActivities.map(({ activity }) => new Date(activity.endTime).getTime()));

            if (startTime > now.getTime()) {
                status = "Upcoming";
            } else if (endTime > now.getTime() && startTime <= now.getTime()) {
                status = "In Progress";
            } else if (endTime < now.getTime()) {
                status = "Completed";
            }
        }
    }

    const processedItineraryItems = itineraryItems.map((item) => ({
        ...item,
        status:
            item.status ??
            calculateStatus(new Date(item.startTime), new Date(item.endTime)),
    }));

    return <ItineraryPageClient itineraryItems={processedItineraryItems} status={status} />;
}

