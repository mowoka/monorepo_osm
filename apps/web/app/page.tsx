'use client'

import dynamic from 'next/dynamic'
import '../styles/global.css'
import styles from '../styles/index.module.css'

export default function Web() {
    const Map = dynamic(() => import('../components/common/map'), {
        ssr: false,
    })

    return (
        <div className={styles.container}>
            <Map />
        </div>
    )
}
