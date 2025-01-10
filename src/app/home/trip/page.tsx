'use client'

import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

// Mock data for itinerary items (unchanged)
const itineraryItems = [
    {
        id: 1,
        title: 'Arrive at Bali Airport',
        description: 'Land at Ngurah Rai International Airport',
        status: 'Completed',
        startTime: '2023-07-01T08:00:00',
        endTime: '2023-07-01T09:00:00',
        location: { name: 'Ngurah Rai International Airport', lat: -8.7467, lng: 115.1667 }
    },
    {
        id: 2,
        title: 'Check-in at Hotel',
        description: 'Check-in and rest at the hotel',
        status: 'Upcoming',
        startTime: '2023-07-01T10:00:00',
        endTime: '2023-07-01T11:00:00',
        location: { name: 'Bali Luxury Resort', lat: -8.8367, lng: 115.0867 }
    },
    {
        id: 3,
        title: 'Visit Tanah Lot Temple',
        description: 'Explore the famous sea temple',
        status: 'Upcoming',
        startTime: '2023-07-01T14:00:00',
        endTime: '2023-07-01T16:00:00',
        location: { name: 'Tanah Lot Temple', lat: -8.6215, lng: 115.0865 }
    },
]

const mapContainerStyle = {
    width: '100%',
    height: '100%'
}

const center = {
    lat: -8.4095,
    lng: 115.1889
}

const ItineraryPage = () => {
    const [selectedLocation, setSelectedLocation] = useState<null | { name: string; lat: number; lng: number }>(null)
    const [map, setMap] = useState<google.maps.Map | null>(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    })

    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        console.error('Google Maps API key is missing!')
    }

    const onLoad = useCallback((map: google.maps.Map) => {
        const bounds = new google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
        setMap(map)
    }, [])


    const onUnmount = useCallback((map: google.maps.Map | null) => {
        setMap(null)
    }, [])

    return (
        <div className="flex h-screen">
            {/* Google Maps */}
            <div className="w-1/2 h-full">
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {selectedLocation && (
                            <Marker position={selectedLocation} />
                        )}
                    </GoogleMap>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <p className="text-xl font-semibold text-gray-600">Loading Map...</p>
                    </div>
                )}
            </div>

            {/* Itinerary List */}
            <div className="w-1/2 h-full overflow-y-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Your Itinerary</h1>
                {itineraryItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => setSelectedLocation(item.location)}
                    >
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-sm text-gray-500">
                            {new Date(item.startTime).toLocaleString()} - {new Date(item.endTime).toLocaleString()}
                        </p>
                        <p className="text-sm font-medium text-blue-600">{item.status}</p>
                        <p className="text-sm text-gray-700">{item.location.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItineraryPage

