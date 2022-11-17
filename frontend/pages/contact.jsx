import React from 'react'
import Image from "next/image"
import styles from "../styles/Contact.module.scss"

const contact = () => {
    return (
        <section className={styles.contactContainer}>
            <h2>Take a coffee & chat with me</h2>
            <div className={styles.contactCards}>
                <div className={styles.card}>
                    <Image src="/images/mail.png" alt='me' width={80} height={80} priority className={styles.img} />
                    <a href="mailto:mustafausakli_@hotmail.com" className={styles.mail}>mustafausakli_@hotmail</a>
                </div>
                <div className={styles.card}>
                    <Image src="/images/mobile.png" alt='me' width={80} height={80} priority className={styles.img} />
                    <a href="tel:+90 (553) 276-80-90" className={styles.mail}>+90 (553) 276-80-90</a>
                </div>
            </div>
            <form className={styles.contactForm}>
                <div className={styles.formWrapper}>
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className={styles.formWrapper}>
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className={styles.formWrapper}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>send message</button>
            </form>
        </section>
    )
}

export default contact
