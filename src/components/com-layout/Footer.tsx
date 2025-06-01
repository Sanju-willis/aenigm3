// src/components/com-layout/Footer.tsx
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { interTight } from '@/utils/fonts';

const navigation = {
  Services: [
    { name: 'Conversion Rate Optimization (CRO)', href: '#' },
    { name: 'AI-Powered Ad Campaigns', href: '#' },
    { name: 'Landing Page Optimization', href: '#' },
    { name: 'Paid Media (Meta, Google)', href: '#' },
    { name: 'Web & App Development', href: '#' },
    { name: 'Email & Funnel Automation', href: '#' },
    { name: 'Predictive Retargeting & Analytics', href: '#' },
    { name: 'GEO & AI Search Optimization', href: '#' },
  ],
  Explore: [
    { name: 'Where It All Started', href: '#' },
    { name: 'Conversion Library ', href: '#' },
    { name: 'Growth Strategy', href: '#' },
  ],
  LegalandOthers: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookie Preferences', href: '#' },
  ],
  location: [
    { name: 'Sri Lanka (Main Office)', href: '#' },
    { name: 'Australia', href: '#' },
    { name: 'New Zealand', href: '#' },
    { name: 'UAE', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Aenigm3lab',
      icon: () => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: () => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/aenigm3labs/posts/',
      icon: () => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/aenigm3_labs/',
      icon: () => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className={`bg-[#0066FF] py-12 font-sans ${interTight.variable}`}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img src="/Logo white-02.svg" alt="Aenigm3 Labs" className="h-12 mb-4" />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Aenigm3 Labs is a CRO-first marketing and development agency using AI to turn insights into sales. We combine conversion-driven strategy, creative execution, and intelligent automation to help brands grow faster and smarter.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Conversion Rate Optimization (CRO)</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">AI-Powered Ad Campaigns</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Landing Page Optimization</Link></li>              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Web & App Development</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Email & Funnel Automation</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Predictive Retargeting & Analytics</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">GEO & AI Search Optimization</Link></li>
            </ul>
          </div>

          
          {/* Legal & Others*/}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal & Others</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Terms & Conditions </Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Cookie Preferences</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Sri Lanka (Main Office)</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Australia </Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">New Zealand</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">UAE</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">2025 Aenigme Pvt(Ltd). All Right Reserved</p>
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
