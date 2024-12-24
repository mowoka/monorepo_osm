'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility'
import { useEffect, useMemo, useRef, useState } from 'react'
import styles from '../../styles/index.module.css'
import { SearchLocation } from './search-location'

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
    const [position, setPosition] = useState<Position>(DEFAULT_POSITION)
    const markerRef = useRef<L.Marker>(null)
    const [openModal, setOpenModal] = useState<boolean>(false)

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        []
    )

    useEffect(() => {
        setClient(true)
    }, [])

    if (!client) {
        return <div>Loading Map...</div>
    }

    return (
        <MapContainer
            center={[position.lat, position.lng]}
            style={{ width: '100%', height: '100vh', position: 'relative' }}
            zoom={14}
            scrollWheelZoom={false}
            touchZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[position.lat, position.lng]}
                eventHandlers={eventHandlers}
                ref={markerRef}
                draggable={true}
            >
                <Popup>
                    You are here {position.lat}, {position.lng}
                </Popup>
            </Marker>
            <div onClick={() => setOpenModal(true)} className={styles.button}>
                <p className={styles.textButton}>S</p>
            </div>
            {openModal && <SearchLocation />}
        </MapContainer>
    )
}
