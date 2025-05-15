import { ReactNode } from 'react';
import Header from './HeaderWithMegaMenu';
import Footer from './Footer';
import ChatbotWidget from '.././ChatbotWidget';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
        <ChatbotWidget />
      </main>
      <Footer />
    </div>
  );
} 