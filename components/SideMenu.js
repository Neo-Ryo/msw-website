import { useState } from 'react'
import styles from './style/SideMenu.module.css'
import Link from 'next/link'
export default function SideMenu() {
    const [toggleMenu, setToggleMenu] = useState(true)
    const toggle = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div
            className={toggleMenu ? styles.sideMenuOpen : styles.sideMenuClose}
        >
            <ul>
                <Link href="/">
                    <li>
                        {toggleMenu ? (
                            'Home'
                        ) : (
                            <img
                                src="/homeWhite.png"
                                alt="home icon"
                                width="50px"
                            />
                        )}
                    </li>
                </Link>
                <Link href="/about">
                    <li>
                        {toggleMenu ? (
                            'About'
                        ) : (
                            <img
                                src="/infoWhite.png"
                                alt="info icon"
                                width="50px"
                            />
                        )}
                    </li>
                </Link>
                <Link href="/contact">
                    <li>
                        {toggleMenu ? (
                            'Contact'
                        ) : (
                            <img
                                src="/emailWhite.png"
                                alt="email icon"
                                width="50px"
                            />
                        )}
                    </li>
                </Link>
            </ul>
            <img
                onClick={toggle}
                className={!toggleMenu ? styles.arrow : styles.hidden}
                src="/arrowWhite.png"
                alt="white arrow"
            />
            <img
                onClick={toggle}
                className={toggleMenu ? styles.cross : styles.hidden}
                src="/crossWhite.png"
                alt="white cross"
            />
            <img
                className={toggleMenu ? styles.mswLogo : styles.hidden}
                src="/mswFullWhite.png"
                alt="msw représentation"
            />
            <div className={toggleMenu ? styles.social : styles.socialClose}>
                <a
                    href="https://www.instagram.com/marco_web_services/?hl=fr"
                    target="_blank"
                >
                    <img
                        className={styles.socialLink}
                        src="/instaWhite.png"
                        alt="white instagram"
                    />
                </a>
                <a href="https://github.com/Neo-Ryo" target="_blank">
                    <img
                        className={styles.socialLink}
                        src="/githubWhite.png"
                        alt="white github"
                    />
                </a>
            </div>
        </div>
    )
}
