"use client";
import styles from './main.module.scss'; 

export default function LandingSection() {
    return (
        <section id="landing" className={styles.body}>
            <div className={styles.header}>
                <section>
                    <img src="/icons/ZAZW-logo.svg" alt="My logo" />
                </section>
                <section>
                    <ul>
                        <li>
                            <button><img src="/icons/Instagram.svg" alt="Instagram_icon" /></button>
                        </li>
                        <li>
                            <button><img src="/icons/Facebook.svg" alt="Facebook_icon" /></button>
                        </li>
                        <li>
                            <button><img src="/icons/LinkedIn.svg" alt="LinkedIn_icon" /></button>
                        </li>
                        <li>
                            <button><img src="/icons/Github.svg" alt="Github_icon" /></button>
                        </li>

                    </ul>
                </section>
            </div>
            <div className={styles.content}>

            </div>
        </section>
    );
}