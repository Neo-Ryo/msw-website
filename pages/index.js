import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PrestaCard from '../components/PrestaCard'
import { local, distant } from '../url'

export async function getStaticProps() {
    const url = process.env.NODE_ENV === 'development' ? local : distant
    const resPresta = await fetch(`${url}/api/presta`)
    const dataPresta = await resPresta.json()
    if (!dataPresta) {
        return {
            notFound: true,
        }
    }

    return {
        props: { dataPresta }, // will be passed to the page component as props
    }
}

export default function Home({ dataPresta }) {
    const [sideMenuToggle, setSideMenuToggle] = useState(true)
    const [page, setPage] = useState('home')
    const [switchImage, setSwitchImage] = useState('/luxurycar-screened.png')

    let images = [
        '/luxurycar-screened.png',
        '/screened-damien.png',
        '/exya-screened.png',
    ]

    let index = 0
    function change() {
        index > 1 ? (index = 0) : index++
        setSwitchImage(images[index])
    }

    useEffect(() => {
        setInterval(change, 5000)
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>MSW Web developer</title>
                <meta name="Content-Type" content="UTF-8" />
                <meta name="Content-Language" content="fr" />
                <meta
                    name="Description"
                    content="MSW est une micro-entreprise de création de contenu web et application mobile. Réaliser des sites à partir de maquettes pré établies suite à un ou plusieurs rendez-vous et respecter les envies du client."
                />
                <meta
                    name="Keywords"
                    content="site vitre, site web, developpeur web, création de site web, création d'application"
                />
                <meta name="Copyright" content="Marc Schiavone" />
                <meta name="Author" content="Marc Schiavone" />
                <meta name="Publisher" content="Marc Schiavone" />
                <meta name="Revisit-After" content="31 days" />
                <meta name="Robots" content="all" />
                <meta name="Rating" content="general" />
                <meta name="Distribution" content="global" />
                <meta name="Geography" content="Labenne, France, 40530" />
                <meta name="Category" content="internet" />

                <link rel="icon" href="/5_XdG_icon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,900;1,900&family=Spartan:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className={styles.main}>
                <div className={styles.pictle}>
                    <h1>CREEZ VOTRE IDENTITE VISUELLE MAINTENANT!</h1>
                </div>
                <div className={styles.prestaWrapper}>
                    <div className={styles.prestaTitles}>
                        <h2>MES SERVICES</h2>
                        <p>Des prestation adaptées à vos besoin</p>
                    </div>
                    <div className={styles.presta}>
                        {dataPresta.map((presta, i) => (
                            <PrestaCard
                                key={i}
                                icon={presta.icon}
                                descriptionIcon={presta.descriptionIcon}
                                text={presta.text}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.stepsWrapper}>
                    <div className={styles.stepOne}>
                        <p>
                            Nous déterminons vos besoin ensemble pour aboutir à
                            la meilleure solution.
                        </p>
                    </div>
                    <div className={styles.emptyness}>
                        <p>
                            On développe, on développe! On échange, et puis on
                            développe encore!
                        </p>
                    </div>
                    <div className={styles.stepThree}>
                        <p>Présentation du produit fini.</p>
                    </div>
                </div>
                <div className={styles.actionCall}>
                    <div className={styles.screen}>
                        <img src={switchImage} alt="screen with web site" />
                    </div>
                    <div className={styles.textButton}>
                        <h3>
                            Votre site web n'attend que vous et va booster votre
                            visibilité sur internet grâce au référencement
                            naturel (SEO)!
                        </h3>
                        <Link href="/contact">
                            <span className={styles.buttonInner}>contact</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
