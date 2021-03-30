import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import Head from 'next/head'

export default function Contact() {
    const [isSend, setIsSend] = useState(true)
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
                <h1>CONTACT</h1>
                <div className={styles.temporaryDiv}>
                    <p>
                        Ecrivez moi à{' '}
                        <a
                            className={styles.link}
                            href="mailto:marco.sch4064@gmail.com"
                        >
                            marco.sch4064@gmail.com
                        </a>{' '}
                        je me ferais un plaisir de vous répondre.
                    </p>
                    <p>
                        Soyez le plus précis possible dans votre description
                        pour faciliter nos futurs échanges.
                    </p>
                </div>
                {/* <form className={styles.formulaire}>
                    <div className={styles.input}>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email">eMail</label>
                        <input type="text" name="email" required />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="message">Votre message</label>
                        <textarea type="text" name="message" required />

                        <p>
                            Soyez le plus précis possible dans votre message
                            pour faciliter nos échanges à venir.
                        </p>
                    </div>
                    <button className={styles.buttonSend}>Envoyer</button>
                    <p
                        style={{ display: isSend ? '' : 'none' }}
                        className={styles.successMessage}
                    >
                        Message envoyé! Je reviendrais vers vous rapidement :)
                    </p>

                    <img
                        src="/msw-full-crop.png"
                        alt="msw web developper"
                        style={{ margin: 10 }}
                    />
                </form> */}
            </main>
        </div>
    )
}
