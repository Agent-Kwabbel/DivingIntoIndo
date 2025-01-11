export type MapComponentProps = {
    isLoaded: boolean
    center: { lat: number; lng: number }
    mapContainerStyle: React.CSSProperties
    selectedLocation: { lat: number; lng: number } | null
    onLoad: (map: google.maps.Map) => void
    onUnmount: () => void
}