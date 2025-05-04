import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us - Aenigm3 Labs',
  description: 'Get in touch with us to discuss your digital marketing needs. We\'re here to help drive your business growth.',
};

export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help you achieve your business goals.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <dl className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a href="mailto:contact@aenigm3labs.com" className="text-gray-900 hover:text-[#0066FF]">
                      contact@aenigm3labs.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a href="tel:+1234567890" className="text-gray-900 hover:text-[#0066FF]">
                      +1 (234) 567-890
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-gray-900">Office Hours</h2>
                <dl className="mt-4 space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <dt>Monday - Friday</dt>
                    <dd>9:00 AM - 6:00 PM EST</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Saturday</dt>
                    <dd>By appointment</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 