'use client';

import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About VoltVentures</h2>

                <div className={styles.content}>
                    <div className={styles.mainInfo}>
                        <p className={styles.description}>
                            Based in Lebanon, VoltVentures is a leading electrical engineering company dedicated
                            to providing top-quality solutions for all your electrical needs. Led by{' '}
                            <span className={styles.owner}>Gaby Zoghby</span>, we specialize in comprehensive
                            electrical services including UPS systems, generator maintenance, solar installations,
                            smart home automation, CCTV monitoring, and more.
                        </p>

                        <p className={styles.description}>
                            Our team of certified electricians brings years of experience in handling everything
                            from residential lighting to complex high-voltage industrial systems. We combine
                            traditional expertise with modern technology to deliver reliable electrical solutions.
                        </p>
                    </div>

                    <div className={styles.highlights}>
                        <div className={styles.highlightCard}>
                            <div className={styles.highlightIcon}>⚡</div>
                            <h3 className={styles.highlightTitle}>Expert Team</h3>
                            <p className={styles.highlightText}>Certified electricians with years of experience</p>
                        </div>

                        <div className={styles.highlightCard}>
                            <div className={styles.highlightIcon}>🔧</div>
                            <h3 className={styles.highlightTitle}>24/7 Support</h3>
                            <p className={styles.highlightText}>Emergency services available around the clock</p>
                        </div>

                        <div className={styles.highlightCard}>
                            <div className={styles.highlightIcon}>🌟</div>
                            <h3 className={styles.highlightTitle}>Quality Work</h3>
                            <p className={styles.highlightText}>Premium solutions with guaranteed satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
