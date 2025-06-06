// src\components\forms\FindOutForm.tsx
import { useState } from 'react';

interface FindOutFormData {
  fullName: string;
  workEmail: string;
  websiteURL: string;
  strugglingArea: string;
  triedSoFar: string;
  commentsOrQuestions: string;
}

interface FindOutFormProps {
  onClose?: () => void;
}

const INITIAL_FORM_DATA: FindOutFormData = {
  fullName: '',
  workEmail: '',
  websiteURL: '',
  strugglingArea: '',
  triedSoFar: '',
  commentsOrQuestions: '',
};

const struggleOptions = [
  'Landing Page',
  'Checkout',
  'Lead Form',
  'Ad Performance',
  'Bounce Rate',
  'Other',
];

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function GetProposalForm({ onClose }: FindOutFormProps) {
  const [formData, setFormData] = useState<FindOutFormData>(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FindOutFormData, string>>>({});

  const handleInputChange = (name: keyof FindOutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.workEmail) newErrors.workEmail = 'Email is required.';
    else if (!isValidEmail(formData.workEmail)) newErrors.workEmail = 'Invalid email format.';
    if (!formData.websiteURL) newErrors.websiteURL = 'Website URL is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'New Proposal Form Submission',
          to: 'sanju.peramuna@gmail.com',
          data: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to send proposal form email:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  const errorText = (field: keyof FindOutFormData) =>
    errors[field] && <p className="text-sm text-red-500 mt-1">{errors[field]}</p>;

  const renderThankYou = () => (
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
      <h2 className="text-2xl font-semibold mb-4 text-center">🎉 Thank You! We'll be in touch soon.</h2>
    </div>
  );

  const renderForm = () => (
    <div className="global-form">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
      )}
      <h2 className="text-2xl font-semibold mb-2 text-center">Let’s Unlock Your Growth</h2>
      <p className="text-gray-600 mb-4 text-center">Tell us a bit about your goals so we can help you convert better.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errorText('fullName')}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address*"
              value={formData.workEmail}
              onChange={(e) => handleInputChange('workEmail', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errorText('workEmail')}
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Website URL*"
            value={formData.websiteURL}
            onChange={(e) => handleInputChange('websiteURL', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errorText('websiteURL')}
        </div>

        <select
          value={formData.strugglingArea}
          onChange={(e) => handleInputChange('strugglingArea', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Where Are You Struggling?</option>
          {struggleOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="What Have You Tried So Far? (optional)"
          value={formData.triedSoFar}
          onChange={(e) => handleInputChange('triedSoFar', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <textarea
          placeholder="Comments or Questions (optional)"
          value={formData.commentsOrQuestions}
          onChange={(e) => handleInputChange('commentsOrQuestions', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={3}
        />

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full">
      {isSubmitted ? renderThankYou() : renderForm()}
    </div>
  );
}
