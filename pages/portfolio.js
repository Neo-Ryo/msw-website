import styles from '../styles/Portfolio.module.css'
import Head from 'next/head'
import Activity from '../components/Activity'
import TechnoBubble from '../components/TechoBubble'

export async function getStaticProps() {
    const resTech = await fetch('http://localhost:3000/api/techno')
    const dataTech = await resTech.json()

    const resActivity = await fetch('http://localhost:3000/api/activity')
    const dataAct = await resActivity.json()

    if (!dataTech || !dataAct) {
        return {
            notFound: true,
        }
    }

    return {
        props: { dataTech, dataAct }, // will be passed to the page component as props
    }
}

export default function Portfolio({ dataTech, dataAct }) {
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
                <h1 style={{ marginBottom: 5 }}>PORTFOLIO</h1>
                <p style={{ color: 'grey', fontSize: '24px', marginTop: 0 }}>
                    Réalisations et compétences
                </p>
                <div className={styles.mainActivity}>
                    {dataAct.map((act, i) => (
                        <Activity
                            key={i}
                            icon={act.icon}
                            desc={act.desc}
                            text={act.text}
                            color={act.color}
                        />
                    ))}
                </div>
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
            </main>
        </div>
    )
}
