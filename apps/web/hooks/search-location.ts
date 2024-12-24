import { useState } from 'react'
import { ISearchLocation } from '../types/search-location'

export function useSearchLocationHook() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [locations, setLocations] = useState<ISearchLocation[]>([])

    const handleSearchLocation = async (search: string) => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams()
            params.append('q', search)
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search.php?${params.toString()}&polygon_geojson=1&format=jsonv2`
            )
            const data: ISearchLocation[] = await response.json()
            setIsLoading(false)
            setLocations(data)
        } catch (err) {
            setIsLoading(false)
            setLocations([])
        }
    }

    return {
        isLoading,
        locations,
        handleSearchLocation,
    }
}
