import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PrestaCard from '../components/PrestaCard'

export async function getStaticProps() {
    const resPresta = await fetch(`http://localhost:3000/api/presta`)
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

    return (
        <div className={styles.container}>
            <Head>
                <title>MSW Web developer</title>
                <meta name="Content-Type" content="UTF-8" />
                <meta name="Content-Language" content="fr" />
                <meta
                    name="Description"
                    content="MSW est une société de création de contenu web et application mobile. Réaliser des sites à partir de maquettes pré établies suite à un ou plusieurs rendez-vous et respecter les envies du client."
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
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&family=Spartan:wght@300;400;700&display=swap"
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
            </main>
        </div>
    )
}
