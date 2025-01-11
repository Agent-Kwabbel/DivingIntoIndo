'use client'

import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { type MapComponentProps } from '~/types/map'

const MapComponent: React.FC<MapComponentProps> = ({
       isLoaded,
       center,
       mapContainerStyle,
       selectedLocation,
       onLoad,
       onUnmount
   }) => {
    return (
        <div className="w-full md:w-1/2 h-full rounded-md">
            {isLoaded ? (
                <GoogleMap mapContainerClassName="rounded-md"
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    zoom={6}
                >
                    {selectedLocation && <Marker position={selectedLocation} />}
                </GoogleMap>
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <p className="text-xl font-semibold text-gray-600">Loading Map...</p>
                </div>
            )}
        </div>
    )
}

export default MapComponent
