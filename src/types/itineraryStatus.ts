export type StatusType = "Upcoming" | "In Progress" | "Completed" | "Delayed" | "Postponed" | "Cancelled" | "Extended";

export const statusOptions: Record<StatusType, { color: string; description: string }> = {
    "Upcoming": {
        color: "gray-500",
        description: "This activity is still upcoming and hasn't started yet."
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
    "Cancelled": {
        color: "red-700",
        description: "This planned activity has been cancelled.",
    },
    "Extended": {
        color: "purple-500",
        description: "This activity has been changed and extended beyond the original itinerary.",
    },
}