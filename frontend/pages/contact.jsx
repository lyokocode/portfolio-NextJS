import React, { useState } from 'react';
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
            <form className={styles.contactForm} onSubmit={e => e.preventDefault()}>
                <div className={styles.formWrapper}>
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className={styles.formWrapper}>
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className={styles.formWrapper}>
                    <textarea
                        className="p-text"
                        placeholder="Your Message"
                        name="message"
                    />
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section >
    )
}

export default contact
