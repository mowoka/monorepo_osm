export interface IGeoJson {
    coordinates: number[]
    type: string
}

export interface ISearchLocation {
    addresstype: string
    category: string
    display_name: string
    geojson: IGeoJson
    lat: string
    lon: string
    type: string
    place_id: number
    name: string
}
