import { ClockIcon } from "@/src/components/icons";
import TimeDisplay from './time';

enum Status {
  InProgress = "In Progress",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

let status = Status.Cancelled;

let color = "bg-gray-500";
if (status === Status.InProgress) {
  color = "bg-sky-500";
} else if (status === Status.Completed) {
  color = "bg-green-500";
} else if (status === Status.Cancelled) {
  color = "bg-red-500";
}

export function StatusSection() {
    return (
      <section className="w-full py-10">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="text-lg font-medium">Trip Status:</h3>
            <div className="flex items-center gap-4">
                <Circle status={status} />
                <h1 className="text-4xl font-semibold">{status}</h1>
            </div>
            <TimeZone />
        </div>
      </section>
    );
}

function Circle(status: { status: string }) {
    return (
      <span className="relative flex h-4 w-4">
          {(status.status === Status.InProgress || status.status === Status.Cancelled) && (
            <span className={`absolute animate-ping inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
          )}
          <span className={`relative inline-flex rounded-full h-4 w-4 ${color}`}></span>
      </span>
    );
}

function TimeZone() {
    return (
      <div className="flex items-center gap-2 py-6">
          <ClockIcon className="h-4 w-4" />
          <TimeDisplay city="Jakarta" timezone="Asia/Jakarta" />
        <p>|</p>
          <TimeDisplay city="Denpasar" timezone="Asia/Makassar" />
      </div>
    )
}