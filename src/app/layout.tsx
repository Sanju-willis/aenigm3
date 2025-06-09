// src\app\layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { royalCastle, aleo, poppins, interTight } from '../utils/fonts'; // ✅ Added poppins + interTight
import Header from '../components/com-layout/HeaderWithMegaMenu';
import Footer from '../components/com-layout/Footer';
import GTM from '@/components/analytics/GTM';
import { siteMetadata } from '@/lib/metadata';
import TrackPageView from '@/components/analytics/TrackPageView';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${royalCastle.variable} ${aleo.variable} ${poppins.variable} ${interTight.variable}`}
    >
      <head>
  {/* ✅ Preconnect to critical 3rd-party origins */}
  <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://www.facebook.com" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

  {/* ✅ If using DNS-prefetch fallback (not needed if preconnect present) */}
  <link rel="dns-prefetch" href="https://connect.facebook.net" />
  <link rel="dns-prefetch" href="https://www.facebook.com" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

  {/* Your GTM init script */}
  <GTM />
</head>
      <body className="h-full font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRD82LQD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <TrackPageView />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
