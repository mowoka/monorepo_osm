'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'
import { useEffect, useState } from 'react'

export interface Position {
    lat: number
    lng: number
}

const DEFAULT_POSITION: Position = {
    lat: -6.8862571,
    lng: 107.520522,
}

export default function Map() {
    const [client, setClient] = useState<boolean>(false)

    useEffect(() => {
        setClient(true)
    }, [])

    if (!client) {
        return <div>Loading Map...</div>
    }

    return (
        <MapContainer
            center={[DEFAULT_POSITION.lat, DEFAULT_POSITION.lng]}
            style={{ width: '100%', height: '100vh', position: 'relative' }}
            zoom={14}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[DEFAULT_POSITION.lat, DEFAULT_POSITION.lng]}>
                <Popup>Cimahi is Here</Popup>
            </Marker>
        </MapContainer>
    )
}
