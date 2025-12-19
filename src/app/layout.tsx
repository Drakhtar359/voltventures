import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VoltVentures - Professional Electrical Engineering Services | Lebanon',
  description: 'Expert electrical engineering solutions including UPS, generators, solar systems, smart home automation, CCTV, and more in Lebanon.',
  keywords: ['electrical engineering', 'UPS systems', 'generators', 'solar systems', 'smart home', 'CCTV', 'Lebanon', 'electrical services'],
  authors: [{ name: 'Gaby Zoghby' }],
  openGraph: {
    title: 'VoltVentures - Professional Electrical Engineering Services',
    description: 'Expert electrical engineering solutions including UPS, generators, solar systems, smart home automation, CCTV, and more in Lebanon.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
