"use client";
import styles from './main.module.scss'; 
import Image from 'next/image';
import HeadingSection from './header'; 

export default function LandingSection() {
    return (
        <section id="landing" className={styles.body}>
            <HeadingSection />
            <div className={styles.content}>
                <div className={styles.introduction}>
                    <h1 className={styles.iAm}>I'M</h1>
                    <h2 className={styles.firstName}>ZHARIF</h2>
                    <h3 className={styles.fullName}>AZIZ ZULKARNAIN WIDODO</h3>
                </div>
                <div className={styles.imageProfile}>
                    <p>he</p>
                </div>
            </div>
        </section>
    );
}