import React from "react";
import ItineraryItem from "./ItineraryItem";
import { type ItineraryListProps } from "~/types/itinerary";

const ItineraryList: React.FC<ItineraryListProps> = ({ items, selectedItemId, onItemClick }) => {
    const now = new Date();

    // Find items "In Progress"
    const inProgressItems = items.filter(
        (item) => new Date(item.startTime) <= now && new Date(item.endTime) >= now
    );

    // If no items are "In Progress", find the closest past end times
    let blinkingItems = new Set<number>();
    if (inProgressItems.length > 0) {
        blinkingItems = new Set(inProgressItems.map((item) => item.id));
    } else {
        const pastItems = items.filter((item) => new Date(item.endTime) < now);
        if (pastItems.length > 0) {
            const closestTime = Math.max(
                ...pastItems.map((item) => new Date(item.endTime).getTime())
            );
            blinkingItems = new Set(
                pastItems
                    .filter((item) => new Date(item.endTime).getTime() === closestTime)
                    .map((item) => item.id)
            );
        }
    }

    return (
        <div className="h-full w-full md:w-1/2 overflow-y-auto px-0 sm:px-4 mt-8 sm:mt-0">
            <div className="hidden sm:flex h-24">
                <div className="relative w-16">
                    <div
                        className="absolute bottom-0 left-1/2 h-1/2 w-[6px] -translate-x-1/2 transform bg-primary"
                    ></div>

                    <div className="flex h-full items-center justify-center">
                        <span className="relative flex h-7 w-7">
                            <span
                                className="relative inline-flex rounded-full h-7 w-7 bg-primary"
                            ></span>
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <h2 className="text-2xl font-semibold">Start of the Itinerary</h2>
                </div>
            </div>

            {items.map((item, index) => (
                <ItineraryItem
                    key={item.id}
                    item={item}
                    isSelected={item.id === selectedItemId}
                    shouldBlink={blinkingItems.has(item.id)}
                    onClick={() => onItemClick(item.location, item.id)}
                    isLastItem={index === items.length - 1} // Pass if the item is the last
                />
            ))}

            <div className="hidden sm:flex h-24">
                <div className="relative w-16">
                    <div
                        className="absolute top-0 left-1/2 h-1/2 w-[6px] -translate-x-1/2 transform bg-primary"
                    ></div>

                    <div className="flex h-full items-center justify-center">
                        <span className="relative flex h-7 w-7">
                            <span
                                className="relative inline-flex rounded-full h-7 w-7 bg-primary"
                            ></span>
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <h2 className="text-2xl font-semibold">End of the trip!</h2>
                </div>
            </div>
        </div>
    );
};

export default ItineraryList;
