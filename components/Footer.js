import styles from './style/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.foot}>
            <div className={styles.logo}></div>
            <div className={styles.middleContainer}>
                <div className={styles.infosContact}>
                    <ul>
                        <li>
                            tel: <a href="tel:0686102299">06.86.10.22.99</a>
                        </li>
                        <li>|</li>
                        <li>
                            email:
                            <a href="mailto:marco.sch4064@gmail.com">
                                marco.sch4064@gmail.com
                            </a>
                        </li>
                        <li>|</li>
                        <li>Landes et Pays Basque</li>
                    </ul>
                </div>
                <p className={styles.createdBy}>
                    Website created by Marco with Next.js
                </p>
            </div>
            <div className={styles.socials}>
                <a
                    href="https://www.linkedin.com/in/marc-schiavone/"
                    target="_blank"
                >
                    <img src="/social/linkedinWhite.png" alt="instagram" />
                </a>
                <a href="https://github.com/Neo-Ryo" target="_blank">
                    <img src="/social/instaWhite.png" alt="instagram" />
                </a>
                <a
                    href="https://www.instagram.com/marco_web_services/?hl=fr"
                    target="_blank"
                >
                    <img src="/social/githubWhite.png" alt="github" />
                </a>
            </div>
        </footer>
    )
}
