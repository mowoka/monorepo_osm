'use client'

import dynamic from 'next/dynamic'
import '../styles/global.css'
import styles from '../styles/index.module.css'
import { useSearchParams } from 'next/navigation'
import { Position } from '../components/common/map'

const DEFAULT_POSITION: Position = {
    lat: -6.8862571,
    lng: 107.520522,
}

export default function Web() {
    const params = useSearchParams()
    const lat = params.get('lat')
    const lng = params.get('lng')

    const Map = dynamic(() => import('../components/common/map'), {
        ssr: false,
    })

    return (
        <div className={styles.container}>
            <Map
                mapPosition={{
                    lat: lat ? parseFloat(lat as string) : DEFAULT_POSITION.lat,
                    lng: lng ? parseFloat(lng as string) : DEFAULT_POSITION.lng,
                }}
            />
        </div>
    )
}
