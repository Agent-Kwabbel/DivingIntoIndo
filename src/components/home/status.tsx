import { ClockIcon } from "~/components/icons";
import TimeDisplay from './time';
import { type StatusType } from "~/types/tripStatus";
import { statusOptions } from "~/types/tripStatus";
import { db } from "~/server/db";
import { asc, eq } from "drizzle-orm";
import { activities, flags } from "~/server/db/schema";

export async function StatusSection() {
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
        const startTime = Math.min(...dbActivities.map(({ startTime }) => new Date(startTime).getTime()));
        const endTime = Math.max(...dbActivities.map(({ endTime }) => new Date(endTime).getTime()));
        if (startTime > now.getTime()) status = "Upcoming";
        if (endTime > now.getTime() && startTime <= now.getTime()) status = "In Progress";
        if (endTime < now.getTime()) status = "Completed";
    }

    return (
      <section className="w-full pt-10">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="text-lg font-medium">Trip Status:</h3>
            {status && (
              <div className="flex items-center gap-4">
                  <Circle status={status} />
                  <h1 className="text-4xl font-semibold">{status}</h1>
              </div>
            )}
            {status && statusOptions[status]?.description && (
              <p className="text-sm text-primary pt-1 italic text-center px-4">{statusOptions[status].description}</p>
            )}
            <TimeZone />
        </div>
      </section>
    );
}

function Circle({ status }: { status: StatusType }) {
    return (
      <span className="relative flex h-4 w-4">
          {statusOptions[status].ping && (
            <span className={`absolute animate-ping inline-flex h-full w-full rounded-full bg-${statusOptions[status].color}`}></span>
          )}
          <span className={`relative inline-flex rounded-full h-4 w-4 bg-${statusOptions[status].color}`} title="Is the status circle pusling? Than the trip is ongoing!"></span>
      </span>
    );
}

function TimeZone() {
    return (
      <div className="flex items-center flex-col sm:flex-row gap-2 pt-6">
          <ClockIcon className="h-4 w-4 hidden sm:block" />
        <div className="flex gap-1 sm:hidden items-center justify-center">
          <ClockIcon className="h-4 w-4" />
          <h3 className="font-semibold">Local Time:</h3>
        </div>
          <TimeDisplay city="Jakarta (Java)" timezone="Asia/Jakarta" />
        <p className="hidden sm:block">|</p>
          <TimeDisplay city="Denpasar (Bali)" timezone="Asia/Makassar" />
      </div>
    )
}