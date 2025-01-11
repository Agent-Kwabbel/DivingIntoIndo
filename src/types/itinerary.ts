import { StatusType } from "./itineraryStatus";

export type Location = {
    name: string
    lat: number
    lng: number
}

export type ItineraryItemType = {
    id: number
    title: string
    description: string
    status: StatusType
    startTime: string
    endTime: string
    location: Location
}

export type ItineraryListProps = {
    items: ItineraryItemType[]
    selectedItemId: number | null
    onItemClick: (location: Location, itemId: number) => void
}

export type ItineraryItemPropsItems = {
    item: {
        id: number
        title: string
        description: string
        status: StatusType
        startTime: string
        endTime: string
        location: { name: string; lat: number; lng: number }
    }
    isSelected: boolean
    shouldBlink: boolean
    onClick: () => void
}