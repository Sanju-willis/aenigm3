// src\components\forms\NotifyMeForm.tsx
'use client';

import { useEffect, useState } from 'react';

interface NotifyMeFormProps {
  onClose: () => void;
}

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  marketingStruggle: string;
  notes: string;
}

const INITIAL_DATA: FormData = {
  fullName: '',
  workEmail: '',
  company: '',
  marketingStruggle: '',
  notes: '',
};

const struggleOptions = [
  'Low ROAS',
  'Poor Targeting',
  'Time-Consuming Setup',
  'High CPMs',
  'I Don’t Know Where to Start',
];

export default function NotifyMeForm({ onClose }: NotifyMeFormProps) {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'Beta Access Interest - Notify Me Form',
          to: 'sanju.peramuna@gmail.com',
          data: formData,
        }),
      });
      setIsSubmitted(true);
      setTimeout(onClose, 2500);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#d9e6fb]/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-6 py-4">
          {isSubmitted ? (
            <div className="text-center space-y-4 py-6">
              <h2 className="text-2xl font-semibold text-pink-600">🎉 You’re on the beta list!</h2>
              <p className="text-sm text-gray-700">
                We’ll let you know the moment your AI Media Buyer is ready to go to work.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="text-center mb-4">
                <h1 className="text-xl font-bold text-gray-800 mb-1">Smarter Ads. Fewer Headaches.</h1>
                <p className="text-sm text-gray-600">Get early beta access before we launch publicly.</p>
              </div>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                required
              />

              <input
                type="email"
                name="workEmail"
                placeholder="Work Email*"
                value={formData.workEmail}
                onChange={handleChange}
                className={inputClass}
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Website*"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
                required
              />

              <select
                name="marketingStruggle"
                value={formData.marketingStruggle}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Biggest Marketing Struggle (optional)</option>
                {struggleOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              <textarea
                name="notes"
                placeholder="Anything you’d like to share? (optional)"
                value={formData.notes}
                onChange={handleChange}
                rows={2}
                className={inputClass}
              />

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-brandblue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brandblue/90 transition"
                >
                  Join Beta List
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
