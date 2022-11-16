import React from 'react'
import Image from "next/image"
import styles from "../styles/Main.module.scss"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Main = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.image} >

                    <Image src="/images/me.png" alt='me' width={500} height={500} priority className={styles.img}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>Let's build somethink together</p>
                    <h2 className={styles.name}>Hi, I'm <span>Aelita</span></h2>
                    <h1>A Front-End Developer</h1>
                    <p className={styles.aboutMe}> I’m focused on building responsive front-end web applications
                        integrating back-end technologies.
                    </p>
                    <div className={styles.iconContainer}>
                        <a href="https://www.linkedin.com/in/mustafa-uşaklı-12887521b/" target="blank">
                            <div className={styles.iconWrapper}>
                                <FaLinkedin />
                            </div>
                        </a>
                        <a href="/dnfjdksbfks" target="blank">
                            <div className={styles.iconWrapper}>
                                <FaGithub />
                            </div>
                        </a>
                        <a href="https://twitter.com/Mustafausakli" target="blank">
                            <div className={styles.iconWrapper}>
                                <FaTwitter />
                            </div>
                        </a>
                        <a target="blank" href="mailto:mustafausakli_@hotmail.com">
                            <div className={styles.iconWrapper}>
                                <MdEmail />
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main