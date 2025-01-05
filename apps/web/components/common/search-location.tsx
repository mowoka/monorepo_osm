import { useState } from 'react'
import { useSearchLocationHook } from '../../hooks/search-location'
import { Position } from './map'
import { View } from '@repo/ui/design/view'

export function SearchLocation({
    handleSelectLocation,
}: {
    handleSelectLocation: (location: Position) => void
}) {
    const [keyword, setKeyword] = useState<string>('')
    const { isLoading, locations, handleSearchLocation } =
        useSearchLocationHook()
    return (
        <View className="absolute top-0 left-0 right-0 bottom-0 z-[100000] bg-black/50 flex justify-center items-center">
            <div className="w-full max-w-[400px] bg-white rounded-lg p-5 flex flex-col">
                <div className="w-full flex flex-row justify-between">
                    <input
                        placeholder="Enter location"
                        className="flex-1 h-[47px] border border-gray-200 rounded-md px-5 py-2 outline-none"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <div
                        onClick={() => handleSearchLocation(keyword)}
                        className="bg-blue-500 h-[47px] w-[80px] ml-[10px] rounded-md flex justify-center items-center cursor-pointer"
                    >
                        <p className="font-semibold text-sm text-white">
                            {isLoading ? 'Loading...' : 'Search'}
                        </p>
                    </div>
                </div>
                <div className="mt-5 max-h-[400px] overflow-auto">
                    {locations.map((location, index) => {
                        return (
                            <div
                                onClick={() =>
                                    handleSelectLocation({
                                        lat: parseFloat(location.lat),
                                        lng: parseFloat(location.lon),
                                    })
                                }
                                key={index}
                                className="my-2 py-2 cursor-pointer"
                            >
                                <p className="font-normal pl-1 text-xs text-gray-400">
                                    {location.name}
                                </p>
                                <p className="font-normal pl-1 text-[10px] mt-1 text-gray-400">
                                    {location.display_name}
                                </p>
                                <div className="border-b border-black/20 mt-3"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </View>
    )
}
