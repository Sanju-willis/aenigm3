// src\components\forms\StrategyCallForm.tsx
import { useState } from 'react';

interface StrategyCallFormData {
  name: string;
  email: string;
  company: string;
  topic: string;
  preferredTime: string;
  notes: string;
}

interface StrategyCallFormProps {
  onClose?: () => void;
}

const INITIAL_DATA: StrategyCallFormData = {
  name: '',
  email: '',
  company: '',
  topic: '',
  preferredTime: '',
  notes: '',
};

const topics = [
  'CRO Audit',
  'Website Feedback',
  'Funnel Help',
  'Ad Strategy',
  'AI Integration',
  'Other',
];

export default function StrategyCallForm({ onClose }: StrategyCallFormProps) {
  const [formData, setFormData] = useState<StrategyCallFormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof StrategyCallFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'New Strategy Call Request',
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
      <div className="relative w-full bg-white rounded-lg p-6">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
            aria-label="Close"
          >
            &times;
          </button>
        )}
        <h2 className="text-2xl font-semibold text-center">✅ Call Scheduled!</h2>
        <p className="text-center text-gray-600 mt-2">We’ll follow up with the meeting link shortly.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-white rounded-lg p-6">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
      )}
      <h2 className="text-2xl font-semibold mb-2 text-center">Schedule a Strategy Call</h2>
      <p className="text-gray-600 mb-4 text-center">Let’s discuss your biggest growth opportunities.</p>

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

        <input
          type="text"
          placeholder="Company Name / Website*"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
          required
        />

        <select
          value={formData.topic}
          onChange={(e) => handleChange('topic', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
        >
          <option value="">What Do You Want to Discuss?</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>

        <input
          type="datetime-local"
          placeholder="Preferred Call Time"
          value={formData.preferredTime}
          onChange={(e) => handleChange('preferredTime', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
        />

        <textarea
          placeholder="Comments or Notes (optional)"
          value={formData.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
          rows={3}
        />

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
}
