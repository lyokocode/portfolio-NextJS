import styles from '../styles/Navbar.module.scss'
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from 'react'
import Layout from './Layout'
import { MdModeNight } from "react-icons/md"

const Navbar = () => {

    const [show, setShow] = useState(false)

    const handleResponsive = () => {
        setShow(!show)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navbarContainer}>
                <Link href="/">
                    <h1 className={styles.logo}>Aelita</h1>
                </Link>
                <div className={styles.navbarList}>
                    <ul>
                        <Link href="/about">
                            <li>About</li>
                        </Link>
                        <Link href="/skils">
                            <li>Skils</li>
                        </Link>
                        <Link href="/projects">
                            <li>Projects</li>
                        </Link>
                        <Link href="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>

                </div>
                <div className={styles.responsive} onClick={handleResponsive}>
                    {
                        show ? <AiOutlineClose size={25} />
                            : <AiOutlineMenu size={25} />
                    }

                </div>

                {show && (
                    <div className={styles.navbarHamburger}>

                        <ul>
                            <Link href="about">
                                <li>About</li>
                            </Link>
                            <Link href="/skils">
                                <li>Skils</li>
                            </Link>
                            <Link href="/projects">
                                <li>Projects</li>
                            </Link>
                            <Link href="/contact">
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                )
                }
            </nav>
        </header >
    )
}

export default Navbar