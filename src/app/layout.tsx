// src\app\layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { royalCastle, aleo } from '../utils/fonts';
import Header from '../components/com-layout/HeaderWithMegaMenu';
import Footer from '../components/com-layout/Footer';
import GTM from '@/components/analytics/GTM';
import { siteMetadata } from '@/lib/metadata';
import { extractRequestInfo } from '@/lib/requestInfo';
import { sendServerEvent } from '@/lib/sendServerEvent';

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestInfo = await extractRequestInfo();

  if (requestInfo) {
    console.log('[📥 Request Info]', requestInfo);

    await sendServerEvent({
      eventName: 'PageView',
      userData: {
        ip: requestInfo.ip,
        userAgent: requestInfo.userAgent,
        email: requestInfo.email,
        city: requestInfo.city,
        country: requestInfo.country,
        fbc: requestInfo.fbc,
        fbp: requestInfo.fbp,
      },
      eventSourceUrl: process.env.NEXT_PUBLIC_SITE_URL,
    });
  }

  return (
    <html lang="en" className={`h-full ${royalCastle.variable} ${aleo.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${aleo.className} h-full`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRD82LQD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GTM />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
