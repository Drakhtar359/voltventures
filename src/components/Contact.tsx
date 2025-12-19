'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create WhatsApp message
        const message = `Hi, my name is ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/96171491169?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <p className={styles.sectionSubtitle}>
                    Ready to power up your project? Contact us today for a free consultation
                </p>

                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📞</div>
                            <h3 className={styles.infoTitle}>Phone</h3>
                            <a href="tel:+96171491169" className={styles.infoLink}>71491169</a>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📧</div>
                            <h3 className={styles.infoTitle}>Email</h3>
                            <a href="mailto:[email protected]" className={styles.infoLink}>
                                [email protected]
                            </a>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📷</div>
                            <h3 className={styles.infoTitle}>Instagram</h3>
                            <a
                                href="https://instagram.com/voltventures961"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.infoLink}
                            >
                                @voltventures961
                            </a>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>👤</div>
                            <h3 className={styles.infoTitle}>Owner</h3>
                            <p className={styles.infoText}>Gaby Zoghby</p>
                            <p className={styles.tagline}>
                                Powering Lebanon's electrical future with expert solutions and innovative technology.
                            </p>
                        </div>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.formInput}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.formInput}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={styles.formInput}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={styles.formTextarea}
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Send via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
