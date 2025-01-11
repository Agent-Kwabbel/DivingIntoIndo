import React from "react";
import { type StatusType, statusOptions } from "~/types/itineraryStatus";
import { type ItineraryItemPropsItems } from "~/types/itinerary";

const ItineraryItem: React.FC<ItineraryItemPropsItems & { isLastItem: boolean }> = ({item, isSelected, shouldBlink, onClick, isLastItem,}) => {

    return (
        <div
            className={`${
                isLastItem ? "" : "mb-4"
            } flex cursor-pointer rounded-lg bg-background shadow-md hover:bg-gray-100`}
            onClick={onClick}
        >
            <div className="relative w-16 hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-[6px] -translate-x-1/2 transform bg-primary"></div>
                <div className="flex h-full items-center justify-center">
                    <Circle status={item.status} shouldBlink={shouldBlink} />
                </div>
            </div>

            <div
                className={`${
                    isSelected ? "py-10" : "py-4"
                } transition-all duration-300 px-4`}
            >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-primary-foreground">{item.description}</p>
                {item.startTime === item.endTime ? (
                    <p className="text-sm text-secondary-foreground">
                        {new Date(item.startTime).toLocaleString()}
                    </p>
                ) : (
                    <p className="text-sm text-secondary-foreground">
                        {new Date(item.startTime).toLocaleString()} -{" "}
                        {new Date(item.endTime).toLocaleString()}
                    </p>
                )}
                <p className="text-sm font-medium text-primary-foreground">{item.status}</p>
                <p className="text-sm text-primary-foreground">{item.location.name}</p>
            </div>
        </div>
    );
};


function Circle({ status, shouldBlink }: { status: StatusType; shouldBlink: boolean }) {
    const statusOption = statusOptions[status] || { color: "gray-400" }; // Fallback color

    return (
        <span className="relative flex sm:h-7 sm:w-7 h-4 w-4">
            {shouldBlink && (
                <span
                    className={`absolute animate-ping inline-flex h-full w-full rounded-full bg-${statusOption.color}`}
                ></span>
            )}
            <span
                className={`relative inline-flex rounded-full sm:h-7 sm:w-7 h-4 w-4 bg-${statusOption.color}`}
                title={statusOption.description}
            ></span>
        </span>
    );
}

export default ItineraryItem;
