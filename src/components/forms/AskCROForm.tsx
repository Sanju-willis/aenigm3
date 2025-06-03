// src\components\forms\AskCROForm.tsx
import { useState } from 'react';

interface AskCROExpertFormData {
  name: string;
  email: string;
  question: string;
  website: string;
  urgency: string;
}

interface AskCROExpertFormProps {
  onClose?: () => void;
}

const INITIAL_DATA: AskCROExpertFormData = {
  name: '',
  email: '',
  question: '',
  website: '',
  urgency: '',
};

const urgencyOptions = ['ASAP', 'This Week', 'Just Exploring'];

export default function AskCROExpertForm({ onClose }: AskCROExpertFormProps) {
  const [formData, setFormData] = useState<AskCROExpertFormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof AskCROExpertFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'New Ask a CRO Expert Submission',
          to: 'sanju.peramuna@gmail.com',
          data: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="global-form">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
            aria-label="Close"
          >
            &times;
          </button>
        )}
        <h2 className="text-2xl font-semibold text-center">✅ Question Sent!</h2>
        <p className="text-center text-gray-600 mt-2">We'll get back to you with expert insights shortly.</p>
      </div>
    );
  }

  return (
    <div className="global-form">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
      )}
      <h2 className="text-2xl font-semibold mb-2 text-center">Ask a CRO Expert</h2>
      <p className="text-gray-600 mb-4 text-center">Get expert eyes on your conversion challenges.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name*"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <textarea
          placeholder="Your Question / Challenge*"
          value={formData.question}
          onChange={(e) => handleChange('question', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
          rows={4}
          required
        />

        <input
          type="text"
          placeholder="Website / Page (optional)"
          value={formData.website}
          onChange={(e) => handleChange('website', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
        />

        <select
          value={formData.urgency}
          onChange={(e) => handleChange('urgency', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
        >
          <option value="">How Soon Do You Need Help?</option>
          {urgencyOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Send Question
          </button>
        </div>
      </div>
    </div>
  );
}
