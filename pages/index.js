import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [sideMenuToggle, setSideMenuToggle] = useState(true)
    const [page, setPage] = useState('home')

    return (
        <div className={styles.container}>
            <Head>
                <title>MSW</title>
                <link rel="icon" href="/5_XdG_icon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&family=Spartan:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className={styles.main}>
                <div>
                    <h1>MAIN HOME</h1>
                </div>
            </main>
        </div>
    )
}
