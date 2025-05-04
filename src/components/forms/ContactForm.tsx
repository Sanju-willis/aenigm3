'use client';

import React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={cn(
            "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          )}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={cn(
            "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          )}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={cn(
            "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          )}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          )}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            "flex w-full justify-center rounded-md bg-[#0066FF] px-4 py-2",
            "text-sm font-semibold text-white shadow-sm",
            "hover:bg-blue-500 focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-offset-2 focus-visible:outline-blue-600",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-sm text-green-600">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
} 