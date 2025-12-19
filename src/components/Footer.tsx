'use client';

import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerSection}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>⚡</span>
                            <span className={styles.logoText}>VoltVentures</span>
                        </div>
                        <p className={styles.tagline}>
                            Powering Lebanon's electrical future with expert solutions and innovative technology.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Quick Links</h3>
                        <ul className={styles.footerLinks}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Contact Info</h3>
                        <ul className={styles.contactList}>
                            <li>📍 Lebanon</li>
                            <li>
                                <a href="tel:+96171491169">📞 71491169</a>
                            </li>
                            <li>
                                <a href="mailto:[email protected]">📧 [email protected]</a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/voltventures961"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    📷 @voltventures961
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {currentYear} VoltVentures. All rights reserved. | Owner: Gaby Zoghby
                    </p>
                </div>
            </div>
        </footer>
    );
}
