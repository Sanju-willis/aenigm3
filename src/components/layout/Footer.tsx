import Link from 'next/link';
import { cn } from '@/lib/utils';

const navigation = {
  socialMedia: [
    { name: 'Digital Marketing Services', href: '#' },
    { name: 'Content Marketing Services', href: '#' },
    { name: 'Email Marketing Services', href: '#' },
    { name: 'SEO Services', href: '#' },
    { name: 'Social Media Servics', href: '#' },
    { name: 'Web Design', href: '#' },
    { name: 'Digital Adverticing Services', href: '#' },
  ],
  company: [
    { name: 'Why Us', href: '#' },
    { name: 'Revenue Driven Process', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  location: [
    { name: 'Colombo (headquartes)', href: '#' },
    { name: 'Melbourne', href: '#' },
    { name: 'New Zealand', href: '#' },
    { name: 'Dubai', href: '#' },
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
      name: 'WhatsApp',
      href: '#',
      icon: () => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 .16 5.334.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654c1.737.948 3.693 1.447 5.683 1.448h.005c6.554 0 11.89-5.335 11.894-11.893 0-3.181-1.237-6.167-3.48-8.413zM12.05 21.785h-.004c-1.774 0-3.513-.477-5.031-1.378l-.361-.214-3.741.981 1-3.648-.235-.374c-.99-1.574-1.512-3.393-1.511-5.26 0-5.45 4.437-9.884 9.891-9.884 2.64 0 5.122 1.03 6.988 2.898 1.866 1.869 2.893 4.352 2.892 6.993-.003 5.45-4.44 9.886-9.888 9.886zm5.418-7.417c-.298-.149-1.765-.87-2.04-.969-.273-.099-.473-.148-.672.15-.2.298-.772.969-.947 1.168-.174.198-.349.223-.647.074-.298-.149-1.262-.465-2.403-1.483-.888-.79-1.487-1.768-1.662-2.066-.174-.298-.019-.458.13-.607.135-.133.3-.347.448-.52.15-.174.199-.298.298-.497.1-.198.05-.372-.025-.52-.073-.149-.67-1.612-.92-2.207-.241-.579-.486-.5-.67-.51-.172-.008-.372-.01-.571-.01-.2 0-.522.074-.796.372-.273.298-1.045 1.02-1.045 2.484 0 1.463 1.07 2.876 1.218 3.075.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.273-.198-.571-.347z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0066FF] py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img src="/logo-2.png" alt="Aenigm3 Labs" className="h-6 mb-4" />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Aenigm3 Labs is a CRO-first marketing and development agency using AI to turn insights into sales. We combine conversion-driven strategy, creative execution, and intelligent automation to help brands grow faster and smarter.
            </p>
          </div>

          {/* Social Media Marketing */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social Media Marketing</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Digital Marketing Services</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Content Marketing Services</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Email Marketing Services</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">SEO Services</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Social Media Services</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Web Design</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Digital Advertising Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Why Us</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Revenue Driven Process</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Team</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Colombo (headquartes)</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Melbourne</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">New Zealand</Link></li>
              <li><Link href="#" className="text-white/90 hover:text-white text-sm">Dubai</Link></li>
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
