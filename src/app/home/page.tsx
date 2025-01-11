import { Hero } from "~/components/home/hero";
import { BlogSection } from "~/components/home/blogs";
import StatusSection from "~/components/home/status";
import { type StatusType } from "~/types/tripStatus";
import Link from "next/link";
import { db } from "~/server/db";
import { asc, eq } from "drizzle-orm";
import { activities, flags } from "~/server/db/schema";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: 'Diving into Indonesia',
    description: 'Join us on an unforgettable journey as two students discover the breathtaking landscapes, rich culture, and vibrant cities of Indonesia.',
    openGraph: {
        type: 'website',
        url: 'https://divingintoindo.xyz',
        title: 'Diving into Indonesia',
        description: 'Join us on an unforgettable journey as two students discover the breathtaking landscapes, rich culture, and vibrant cities of Indonesia.',
        images: [
            {
                url: 'https://divingintoindo.xyz/img/logo.png',
                width: 512,
                height: 512,
                alt: '404 - Page Not Found',
            },
        ],
    },
}

export default async function Home() {
    const overrideStatusFlag = await db.select().from(flags).where(eq(flags.name, "override_status")).execute();
    const overrideStatus = overrideStatusFlag.length > 0 && typeof(overrideStatusFlag[0]) != "undefined" ? overrideStatusFlag[0].status as StatusType : null;

    const dbActivities = await db
        .select()
        .from(activities)
        .orderBy(asc(activities.startTime));

    const now = new Date();
    let status: StatusType = "Upcoming";

    if (overrideStatus) {
        status = overrideStatus;
    } else if (dbActivities.length > 0) {
        const past2Days = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

        // Check for delayed or cancelled activities in the past 2 days
        const hasDelays = dbActivities.some(({ status: activityStatus, endTime }) => {
            return (
                new Date(endTime).getTime() >= past2Days.getTime() &&
                activityStatus && ["Delayed", "Postponed", "Cancelled"].includes(activityStatus)
            );
        });

        if (hasDelays) {
            status = "Delays";
        } else {
            const startTime = Math.min(...dbActivities.map(({ startTime }) => new Date(startTime).getTime()));
            const endTime = Math.max(...dbActivities.map(({ endTime }) => new Date(endTime).getTime()));

            if (startTime > now.getTime()) {
                status = "Upcoming";
            } else if (endTime > now.getTime() && startTime <= now.getTime()) {
                status = "In Progress";
            } else if (endTime < now.getTime()) {
                status = "Completed";
            }
        }
    }

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Hero />
            <BlogSection />
            <StatusSection status={status} />
            <div className="flex justify-center pt-6 pb-10">
                <Link
                    href="/home/trip"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    See the Itinerary
                </Link>
            </div>
        </div>
    );
}
