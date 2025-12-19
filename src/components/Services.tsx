'use client';

import styles from './Services.module.css';

const services = [
    {
        category: 'Power Systems',
        icon: '⚡',
        items: [
            {
                title: 'UPS Systems',
                description: 'Uninterruptible Power Supply installation, maintenance, and repair for continuous power protection'
            },
            {
                title: 'Generator Maintenance',
                description: 'Professional generator installation, regular maintenance, and emergency repair services'
            },
            {
                title: 'Solar Systems',
                description: 'Complete solar panel installation, battery systems, and renewable energy solutions'
            },
            {
                title: 'Distribution Boards',
                description: 'Design, installation, and maintenance of electrical distribution boards and panels'
            },
            {
                title: 'ATS Systems',
                description: 'Automatic Transfer Switch installation and maintenance for seamless power backup'
            }
        ]
    },
    {
        category: 'Smart Solutions',
        icon: '🏠',
        items: [
            {
                title: 'Smart Home Automation',
                description: 'Complete smart home systems including lighting, climate control, security, and voice integration'
            },
            {
                title: 'CCTV & Monitoring',
                description: 'Professional CCTV installation, monitoring systems, and security camera solutions'
            },
            {
                title: 'IoT Solutions',
                description: 'Internet of Things integration and personalized automation solutions for homes and businesses'
            }
        ]
    },
    {
        category: 'Core Services',
        icon: '🔧',
        items: [
            {
                title: 'Electrical Repairs',
                description: 'Expert fixing and troubleshooting of all electrical systems and components'
            },
            {
                title: 'Lighting Solutions',
                description: 'Modern lighting design, installation, and management for residential and commercial spaces'
            },
            {
                title: 'Power Management',
                description: 'Comprehensive electricity management systems to optimize power consumption and efficiency'
            },
            {
                title: 'High Voltage Systems',
                description: 'Professional installation and maintenance of high voltage electrical systems'
            },
            {
                title: 'Electrical Installation',
                description: 'Complete electrical installation services for new constructions and renovations'
            },
            {
                title: 'Electrical Drawings',
                description: 'Professional electrical schematics, wiring diagrams, and technical documentation'
            },
            {
                title: 'Maintenance & Support',
                description: 'Regular maintenance and 24/7 support to keep your electrical systems running smoothly'
            }
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <p className={styles.sectionSubtitle}>
                    Comprehensive electrical engineering solutions tailored to your needs
                </p>

                <div className={styles.servicesGrid}>
                    {services.map((category, idx) => (
                        <div key={idx} className={styles.categoryCard}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <h3 className={styles.categoryTitle}>{category.category}</h3>
                            </div>

                            <div className={styles.servicesList}>
                                {category.items.map((service, serviceIdx) => (
                                    <div key={serviceIdx} className={styles.serviceItem}>
                                        <div className={styles.serviceBullet}></div>
                                        <div>
                                            <h4 className={styles.serviceTitle}>{service.title}</h4>
                                            <p className={styles.serviceDescription}>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
