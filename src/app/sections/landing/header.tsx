"use client"; 
import styles from './main.module.scss'; 
import Image from 'next/image';

export default function headingSection(){
    return (
        <div className={styles.header}>
            <section>
                <Image 
                    src="/icons/ZAZW-logo.svg" 
                    alt="ZAZW Logo" 
                    width={120}
                    height={56}
                    priority
                />
            </section>
            <section>
                <ul>
                    <li>
                        <button aria-label="Instagram">
                            <Image
                            width={0} height={0}
                            src="/icons/Instagram.svg" alt="instagram_icon"/>
                        </button>
                    </li>
                    <li>
                        <button aria-label="Facebook">
                            <Image
                            width={0} height={0}
                            src="/icons/Facebook.svg" alt="Facebook_icon"/>
                        </button>
                    </li>
                    <li>
                        <button aria-label="LinkedIn">
                            <Image
                            width={0} height={0}
                            src="/icons/LinkedIn.svg" alt="LinkedIn_icon"/>
                        </button>
                    </li>
                    <li>
                        <button aria-label="GitHub">
                            <Image
                            width={0} height={0}
                            src="/icons/Github.svg" alt="Github_icon"/>
                        </button>
                    </li>
                </ul>
            </section>
        </div>
    )
}