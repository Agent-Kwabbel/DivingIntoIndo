"use client";

import React, { useState, useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MapComponent from "~/components/trip/Map";
import ItineraryList from "~/components/trip/ItineraryList";
import StatusSection from "~/components/home/status";
import { type Location } from "~/types/itinerary";
import { type StatusType } from "~/types/itineraryStatus";
import { type StatusType as TripStatusType } from "~/types/tripStatus";

interface ItineraryItem {
    id: number;
    title: string;
    description: string;
    status: StatusType;
    startTime: string;
    endTime: string;
    location: Location;
}

interface ItineraryPageClientProps {
    itineraryItems: ItineraryItem[];
    status: TripStatusType;
}

const mapContainerStyle = {
    width: "100%",
    height: "100%",
};

const defaultCenter = {
    lat: -7.5181,
    lng: 110.7599,
};

const ItineraryPageClient: React.FC<ItineraryPageClientProps> = ({ itineraryItems, status }) => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    });

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return (
        <>
            <StatusSection status={status} />
            <div className="flex flex-col h-full items-center justify-center pt-10">
                <div className="flex h-[80vh] w-4/5 mx-12 p-4 border-2 border-border rounded-lg bg-secondary">
                    <MapComponent
                        isLoaded={isLoaded}
                        center={selectedLocation ?? defaultCenter} // Default center if no location is selected
                        mapContainerStyle={mapContainerStyle}
                        selectedLocation={selectedLocation}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    />
                    <ItineraryList
                        items={itineraryItems}
                        selectedItemId={selectedItemId}
                        onItemClick={(location: Location, itemId: number) => {
                            setSelectedLocation(location);
                            setSelectedItemId(itemId);
                            if (map) {
                                map.panTo({ lat: location.lat, lng: location.lng });
                                map.setZoom(11);
                            }
                        }}
                    />
                </div>
                <p className="text-sm text-gray-400 my-4">
                    Disclaimer: The itinerary provided is subject to change and may not always
                    reflect the most up-to-date details.
                </p>
            </div>
        </>
    );
};

export default ItineraryPageClient;
