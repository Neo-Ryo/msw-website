import { useState } from 'react'
import styles from './style/SideMenu.module.css'
import Link from 'next/link'
export default function SideMenu() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('home')
    const toggle = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleActivePage = (link) => {
        setActiveLink(link)
    }
    return (
        <div
            className={toggleMenu ? styles.sideMenuOpen : styles.sideMenuClose}
        >
            <ul>
                <Link href="/">
                    <li onClick={() => setActiveLink('home')}>
                        {toggleMenu ? (
                            'Home'
                        ) : (
                            <img
                                src="/icon/homeWhite.png"
                                alt="home icon"
                                width="50px"
                            />
                        )}
                    </li>
                </Link>
                <Link href="/about">
                    <li onClick={() => setActiveLink('about')}>
                        {toggleMenu ? (
                            'About'
                        ) : (
                            <img
                                src="/icon/infoWhite.png"
                                alt="info icon"
                                width="50px"
                            />
                        )}
                    </li>
                </Link>
                <Link href="/contact">
                    <li onClick={() => setActiveLink('contact')}>
                        {toggleMenu ? (
                            'Contact'
                        ) : (
                            <img
                                src="/icon/emailWhite.png"
                                alt="email icon"
                                width="50px"
                            />
                        )}
                    </li>
                </Link>
            </ul>
            <img
                className={toggleMenu ? styles.mswLogo : styles.hidden}
                src="/MSW_anim.gif"
                alt="msw représentation"
            />
            <img
                onClick={toggle}
                className={!toggleMenu ? styles.arrow : styles.hidden}
                src="/icon/arrowWhite.png"
                alt="white arrow"
            />
            <img
                onClick={toggle}
                className={toggleMenu ? styles.cross : styles.hidden}
                src="/icon/crossWhite.png"
                alt="white cross"
            />
            <div className={toggleMenu ? styles.social : styles.socialClose}>
                <a
                    href="https://www.instagram.com/marco_web_services/?hl=fr"
                    target="_blank"
                >
                    <img
                        className={styles.socialLink}
                        src="/social/instaWhite.png"
                        alt="white instagram"
                    />
                </a>
                <a href="https://github.com/Neo-Ryo" target="_blank">
                    <img
                        className={styles.socialLink}
                        src="/social/githubWhite.png"
                        alt="white github"
                    />
                </a>
            </div>
        </div>
    )
}
