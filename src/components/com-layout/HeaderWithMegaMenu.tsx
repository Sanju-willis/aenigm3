'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import GetProposalForm from '../forms/GetProposalForm';

const navigation = [
  {
    name: 'AI Growth Strategy',
    href: '#',
    submenu: [
      {
        name: 'AI-Powered Ad Campaigns',
        content: [
          'Google Ads (AI Max Strategy)',
          'Meta Ads (Facebook, Instagram, WhatsApp)',
          'Generative Engine Optimization (GEO)',
          'Cross-Channel AI Remarketing',
          'Ad Spend Optimization',
        ],
      },
      {
        name: 'Conversion Rate Optimization (CRO)',
        content: [
          'A/B Testing with AI Recommendations',
          'Behavior Analytics & Heatmaps',
          'Funnel & Journey Optimization',
          'Dynamic Personalization Engine',

        ],
      },
      {
        name: 'Landing Page Optimization',
        content: [
          'Conversion-Focused Layouts',
          'Dynamic Content Blocks',
          'Speed & Mobile Optimization',
          'Integrated Split Testing',
        ],
      },
      {
        name: ' Email & Retention Automation',
        content: ['Predictive Email Campaigns', 'Segmented Drip Journeys', 'Personalized Retargeting Flows'],
      },
      {
        name: 'Web & App Development',
        content: ['CRO-First Website Builds', 'AI-Powered Web & SaaS Platforms', 'Conversion-Focused UI with Analytics', 'CRM, Chatbot & Backend Integrations'],
      },

    ],
    rightBox: {
      title: 'Convert Smarter, Grow Faster',
      description: 'Drive meaningful traffic, convert with precision, and scale faster through AI-powered marketing, conversion optimization, and brand strategy.',
      image: '/images/ab-testing.png',

    }
  },
  {
    name: 'Our Products',
    href: '#',
    submenu: [
      {
        name: 'AI-Powered CRO Tools',
        content: [
          'Smart A/B Testing Engine',
          'Personalization Suite',
          'Conversion Predictor AI',
          'Heatmap Analytics',
          'User Behavior Tracking',
          'Dynamic Content Optimization'
        ]
      },
      {
        name: 'Landing Page Solutions',
        content: [
          'AI Page Builder',
          'Smart Layout Optimizer',
          'Dynamic Content Blocks',
          'Conversion-Focused Templates',
          'Mobile Optimization',
          'Speed Enhancement Tools'
        ]
      },
      {
        name: 'Meta Advertising Suite',
        content: [
          'Campaign Performance AI',
          'Audience Insights Engine',
          'Creative Testing Tools',
          'Budget Optimization',
          'Cross-Platform Analytics',
          'ROI Tracking Dashboard'
        ]
      }
    ],
    rightBox: {
      title: 'AI-Powered Solutions',
      description: 'Transform your digital presence with our suite of AI-powered tools. Optimize conversions, automate campaigns, and maximize ROI.',
      image: '/images/personalized-recommendations.png',

    }
  },
  {
    name: 'Growth Lab',
    href: '#',
    submenu: [
      {
        name: 'Inside Aenigm3',
        content: [
          { label: 'About Us: Where It All Started', href: '/about' },
          { label: 'Our Team: The Brains & Builders', href: '/about#leadership-team' }

        ]
      },
      {
        name: 'Success Stories',
        content: [
          'E-commerce Case Studies',
          'SaaS Success Stories',
          'Lead Generation Results',
          'Revenue Growth Examples',
          'ROI Breakthrough Cases',
          'Client Testimonials'
        ]
      },
      {
        name: 'Expert Resources',
        content: [
          'Live Workshops & Training',
          'Monthly Webinars',
          'Industry Research Reports',
          'Expert Consultations',
          'Growth Strategy Sessions',
          'Community Forums'
        ]
      },
    ],
    rightBox: {
      title: 'Accelerate Your Growth',
      description: 'Access expert knowledge, proven strategies, and real-world case studies to transform your business performance.',
      image: '/images/strategy.png',

    }
  }
];

export default function HeaderWithMegaMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showProposalForm, setShowProposalForm] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-black/5 backdrop-blur-lg shadow-sm ring-1 ring-gray-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Aenigm3 Labs</span>
              <img className="h-10 w-auto" src="/Logo Ver 02-02.svg" alt="Logo" />
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

          <div className="hidden lg:flex lg:gap-x-10 relative" ref={menuRef}>
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                <button
                  onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                  className={`text-xl font-bold transition-colors tracking-wide ${openMenu === item.name ? 'text-brandblue' : 'text-gray-900 hover:text-brandblue'
                    }`}

                >
                  {item.name}
                </button>
                {item.submenu && openMenu === item.name && (
                  <div className="fixed left-1/2 transform -translate-x-1/2 top-full w-[1200px] bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] ring-1 ring-black/5 p-0 flex opacity-100 translate-y-0 transition-all duration-300">
                    <div className="p-6 grid grid-cols-3 gap-6 flex-1">
                      {item.submenu.map((sub) => (
                        <div key={sub.name} className="group">
                          <h3 className="text-lg font-heading  font-semibold text-gray-900 mb-3">{sub.name}</h3>
                          {'content' in sub && sub.content && (
                            <ul className="space-y-2">
                              {sub.content.map((contentItem, index) => (
                                <li key={index}>
                                  {typeof contentItem === 'string' ? (
                                    <div className="text-sm text-gray-700 hover:text-brandblue transition-colors cursor-pointer flex items-center space-x-2 pl-0 hover:pl-2 duration-200">
                                      <span className="text-brandblue">•</span>
                                      <span>{contentItem}</span>
                                    </div>
                                  ) : (
                                    <Link
                                      href={contentItem.href}
                                      className="text-sm text-gray-700 hover:text-brandblue transition-colors flex items-center space-x-2 pl-0 hover:pl-2 duration-200"
                                    >
                                      <span className="text-brandblue">•</span>
                                      <span>{contentItem.label}</span>
                                    </Link>
                                  )}
                                </li>
                              ))}

                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="w-80 bg-brandblue rounded-2xl m-4 flex flex-col justify-center items-center p-8 text-white">
                      <h4 className="text-2xl font-heading mb-2">{item.rightBox?.title}</h4>
                      <p className="mb-4 text-base opacity-90">{item.rightBox?.description}</p>
                      <img
                        src={item.rightBox?.image}
                        alt={item.rightBox?.title}
                        className="w-32 h-32 object-contain mb-4 rounded-xl shadow-lg bg-white p-2"
                      />

                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => setShowProposalForm(true)}
              className="rounded-full bg-brandblue px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-brandblue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandblue transition"
            >
              Get Proposal
            </button>
          </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg transition-transform">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="sr-only">Aenigm3 Labs</span>
                <img className="h-10 w-auto" src="/A3L Logo-01.svg" alt="Logo" />
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brandblue"
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
                    className="block text-lg font-bold text-gray-900 hover:bg-gray-100 rounded-md px-4 py-2"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href="#"
                            className="block text-sm text-gray-600 hover:text-brandblue w-full text-left"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowProposalForm(true);
                }}
                className="block w-full rounded-full bg-brandblue px-4 py-2 text-center text-base font-semibold text-white hover:bg-brandblue/90 transition"
              >
                Get Proposal
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* ✅ Modal for GetProposalForm */}
      {showProposalForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <GetProposalForm onClose={() => setShowProposalForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
