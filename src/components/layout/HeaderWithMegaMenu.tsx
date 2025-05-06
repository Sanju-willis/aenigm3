'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '../../lib/utils';

const navigation = [
  {
    name: 'Traffic & Qualified Leads',
    href: '#',
    submenu: [
      { name: 'Ai SEO', href: '/services/seo' },
      { name: 'Paid Media', href: '/services/paid-media' },
      { name: 'Revenue Driven Paid Campaign', href: '/services/local-seo' },
    ],
  },
  {
    name: 'Our Products',
    href: '#',
    submenu: [
      { name: 'Ai Powered META CRO Tool', href: '/solutions/analytics' },
      { name: 'Ai Powered CRO Landing Pages', href: '/solutions/ai' },
      { name: 'Conversion Tools', href: '/solutions/conversion-tools' },
    ],
  },
  {
    name: 'Growth Lab',
    href: '#',
    submenu: [
      { name: 'Case Studies', href: '/growth-lab/case-studies' },
      { name: 'Workshops', href: '/growth-lab/workshops' },
      { name: 'Webinars', href: '/growth-lab/webinars' },
      { name: 'Our Team', href: '/about' },
    ],
  },
];

export default function HeaderWithMegaMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  const handleMouseEnter = (menuName: string) => {
    setOpenMenu(menuName);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const handleSubtopicClick = (subtopicName: string) => {
    setSelectedSubtopic(subtopicName);
    console.log(`Selected Subtopic: ${subtopicName}`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm ring-1 ring-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Aenigm3 Labs</span>
            <img className="h-10 w-auto" src="/nav-logo-left.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav with mega menu */}
        <div className="hidden lg:flex lg:gap-x-10 relative">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
              {item.submenu && openMenu === item.name && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg p-4 opacity-100 translate-y-0 transition-all duration-300">
                  <ul className="space-y-2">
                    {item.submenu.map((sub) => (
                      <li key={sub.name}>
                        <button
                          onClick={() => handleSubtopicClick(sub.name)}
                          className="block text-sm text-gray-700 hover:text-blue-600 w-full text-left"
                        >
                          {sub.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/get-proposal"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition"
          >
            Get Proposal
          </Link>
        </div>
      </nav>

      {/* Mobile panel */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg transition-transform">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Aenigm3 Labs</span>
              <img className="h-10 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((sub) => (
                      <li key={sub.name}>
                        <button
                          onClick={() => handleSubtopicClick(sub.name)}
                          className="block text-sm text-gray-600 hover:text-blue-600 w-full text-left"
                        >
                          {sub.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/get-proposal"
              className="block w-full rounded-full bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white hover:bg-blue-500 transition"
            >
              Get Proposal
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
