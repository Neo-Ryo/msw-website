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
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <img
                className={toggleMenu ? styles.mswLogo : styles.hidden}
                src="/mswFullWhite.png"
                alt="msw représentation"
            />
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
        </div>
    )
}
