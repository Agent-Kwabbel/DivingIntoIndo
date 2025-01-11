import { db } from "~/server/db";
import { asc, eq } from "drizzle-orm";
import { activities, locations } from "~/server/db/schema";
import ItineraryPageClient from "./ItineraryPageClient";
import { type StatusType } from "~/types/itineraryStatus";

function calculateStatus(startTime: Date, endTime: Date): StatusType {
    const now = new Date();
    if (startTime > now) return "Upcoming";
    if (startTime <= now && endTime >= now) return "In Progress";
    return "Completed";
}

export default async function ItineraryPage() {
    const dbActivities = await db
        .select()
        .from(activities)
        .leftJoin(locations, eq(locations.id, activities.locationId)) // Fixed join
        .orderBy(asc(activities.startTime));

    const itineraryItems = dbActivities.map(({ activity, location }) => ({
        id: Number(activity.id), // Convert id to number
        title: activity.title,
        description: activity.description,
        status: activity.status as StatusType ?? undefined,
        startTime: activity.startTime.toISOString(),
        endTime: activity.endTime.toISOString(),
        location: {
            name: location?.name ?? "",
            lat: Number(location?.latitude ?? 0),
            lng: Number(location?.longitude ?? 0),
        },
    }));

    const processedItineraryItems = itineraryItems.map((item) => ({
        ...item,
        status:
            item.status ??
            calculateStatus(new Date(item.startTime), new Date(item.endTime)),
    }));

    return <ItineraryPageClient itineraryItems={processedItineraryItems} />;
}

