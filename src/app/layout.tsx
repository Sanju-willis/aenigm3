// src\app\layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { royalCastle, aleo } from '../utils/fonts';
import Header from '../components/com-layout/HeaderWithMegaMenu';
import Footer from '../components/com-layout/Footer';
import GTM from '@/components/analytics/GTM';
import { siteMetadata } from '@/lib/metadata';
import { extractRequestInfo } from '@/lib/requestInfo';
import { sendServerSidePageView } from '@/lib/sendServerEvent';


export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const requestInfo = await extractRequestInfo();
console.log('[📥 Request Info]', requestInfo);
// Send to API
await sendServerSidePageView(requestInfo);

  return (
    <html lang="en" className={`h-full ${royalCastle.variable} ${aleo.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="facebook-domain-verification"
          content="88c1x5wnb7s9bgzsn7lr1rh4h09wa6"
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
