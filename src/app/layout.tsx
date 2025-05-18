// src\app\layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { royalCastle, aleo } from '../utils/fonts';
import Header from '../components/com-layout/HeaderWithMegaMenu';
import Footer from '../components/com-layout/Footer';
import ChatbotWidget from '../components/ChatbotWidget';
import GTM from '@/components/analytics/GTM';


export const metadata: Metadata = {
  title: 'Aenigm3 - Digital Marketing Agency',
  description: 'Digital Marketing Solutions for your Business',
  icons: {
    icon: '/fav-icon.png',
    shortcut: '/fav-icon.png',
    apple: '/fav-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${royalCastle.variable} ${aleo.variable}`}>
      <body className={`${aleo.className} h-full`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            {children}
            <ChatbotWidget />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
