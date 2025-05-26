// src\lib\metadata.ts
import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Aenigm3 Labs – AI Conversion Rate Optimization',
  description: 'We help businesses maximize ROI with AI-powered CRO strategies.',
  icons: {
    icon: '/fav-icon.png',
    shortcut: '/fav-icon.png',
    apple: '/fav-icon.png',
  },
  openGraph: {
    title: 'Aenigm3 Labs – AI Conversion Rate Optimization',
    description: 'We help businesses maximize ROI with AI-powered CRO strategies.',
    url: 'https://aenigm3labs.com',
    siteName: 'Aenigm3 Labs',
    images: [
      {
        url: 'https://aenigm3labs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aenigm3 Labs – AI CRO Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aenigm3 Labs – AI CRO',
    description: 'Data-driven marketing solutions to grow your sales with AI.',
    images: ['https://aenigm3labs.com/og-image.png'],
  },
};
