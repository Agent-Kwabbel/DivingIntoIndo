export type StatusType = "Upcoming" | "In Progress" | "Completed" | "Delayed" | "Postponed" | "Terminated" | "Extended";

export const statusOptions: Record<StatusType, { color: string; description: string }> = {
    "Upcoming": {
        color: "gray-500",
        description: "This activity is still upcoming."
    },
    "In Progress": {
        color: "sky-500",
        description: "This activity is currently in progress."
    },
    "Completed": {
        color: "green-500",
        description: "This activity has been completed."
    },
    "Delayed": {
        color: "orange-500",
        description: "This activities may be delayed, rescheduled or cancelled.",
    },
    "Postponed": {
        color: "yellow-500",
        description: "This activity has been postponed to a later date.",
    },
    "Terminated": {
        color: "red-700",
        description: "This activity has been terminated prematurely.",
    },
    "Extended": {
        color: "purple-500",
        description: "This activity has been extended beyond the original itinerary.",
    },
}