export type StatusType = "Upcoming" | "In Progress" | "Completed" | "Delays" | "Terminated" | "Extended";

export const statusOptions: Record<StatusType, { color: string; ping: boolean; description?: string }> = {
    "Upcoming": {
        color: "gray-500",
        ping: false,
    },
    "In Progress": {
        color: "sky-500",
        ping: true,
    },
    "Completed": {
        color: "green-500",
        ping: false,
    },
    "Delays": {
        color: "orange-500",
        ping: true,
        description: "Some activities may be delayed, rescheduled or cancelled.",
    },
    "Terminated": {
        color: "red-700",
        ping: false,
        description: "Trip has been terminated prematurely.",
    },
    "Extended": {
        color: "purple-500",
        ping: true,
        description: "Trip has been extended beyond the original itinerary.",
    },
}