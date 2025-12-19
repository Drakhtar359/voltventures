'use client';

import styles from './Hero.module.css';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }

        let animationFrame: number;

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = '#00d9ff';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00d9ff';
                ctx.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 217, 255, ${1 - distance / 150})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="home" className={styles.hero}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.gridBackground}></div>

            <div className={styles.content}>
                <div className={styles.sparkles}>
                    <span className={styles.spark}></span>
                    <span className={styles.spark}></span>
                    <span className={styles.spark}></span>
                </div>

                <h1 className={styles.title}>
                    Powering <span className={styles.highlight}>Lebanon's</span> Future
                </h1>

                <p className={styles.subtitle}>
                    Expert electrical engineering solutions including UPS systems, generators,
                    solar installations, smart home automation, CCTV, and comprehensive electrical services
                </p>

                <div className={styles.cta}>
                    <a href="#contact" className={styles.btnPrimary}>Get Started</a>
                    <a href="#services" className={styles.btnSecondary}>Our Services</a>
                </div>
            </div>

            <div className={styles.floatingElements}>
                <div className={styles.circuit}></div>
                <div className={styles.circuit}></div>
                <div className={styles.circuit}></div>
            </div>
        </section>
    );
}
