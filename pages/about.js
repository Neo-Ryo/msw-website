import styles from '../styles/About.module.css'
import Head from 'next/head'
import TechnoBubble from '../components/TechoBubble'

export async function getStaticProps() {
    const resTech = await fetch('http://localhost:3000/api/techno')
    const dataTech = await resTech.json()
    if (!dataTech) {
        return {
            notFound: true,
        }
    }

    return {
        props: { dataTech }, // will be passed to the page component as props
    }
}

export default function About({ dataTech }) {
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
                    <h1>MAIN ABOUT</h1>
                    <div className={styles.technos}>
                        <div className={styles.blur}>
                            <h3>TECHNOLOGIES UTILISEES</h3>
                            <div className={styles.techBubbles}>
                                {dataTech.map((tech, i) => (
                                    <TechnoBubble
                                        key={i}
                                        icon={tech.icon}
                                        desc={tech.desc}
                                        text={tech.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
