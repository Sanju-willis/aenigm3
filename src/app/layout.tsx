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
