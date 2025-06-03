// src\components\forms\GetProposalForm.tsx
import { useState, useEffect } from 'react';

interface GetProposalFormData {
  fullName: string;
  workEmail: string;
  websiteURL: string;
  businessType: string;
  projectType: string;
  goals: string;
  budget: string;
  commentsOrQuestions: string;
}

interface GetProposalFormProps {
  onClose?: () => void;
}

const INITIAL_AUDIT_FORM_DATA: GetProposalFormData = {
  fullName: '',
  workEmail: '',
  websiteURL: '',
  businessType: '',
  projectType: '',
  goals: '',
  budget: '',
  commentsOrQuestions: '',
};

const businessTypes = ['SaaS', 'eComm', 'Services', 'Other'];
const projectTypes = ['Landing Page', 'Full Site', 'CRO Audit', 'AI Ad Setup'];
const goalOptions = ['More leads', 'Better funnel', 'Higher sales', 'Lower ad spend'];
const budgetOptions = ['$1k–$3k', '$3k–$10k', '$10k+'];

export default function GetProposalForm({ onClose }: GetProposalFormProps) {
  const [formData, setFormData] = useState<GetProposalFormData>(INITIAL_AUDIT_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'New CRO Audit Submission',
          to: 'sanju.peramuna@gmail.com',
          data: formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to send audit form email:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

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
      <h2 className="text-2xl font-semibold mb-4 text-center">🎉 Thanks! Your Proposal Is On the Way</h2>
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
      <h2 className="text-2xl font-semibold mb-2 text-center">Get Your Custom Growth Proposal</h2>
      <p className="text-gray-600 text-center mb-6">Unlock actionable insights to boost conversions</p>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Work Email*"
            value={formData.workEmail}
            onChange={(e) => handleInputChange('workEmail', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Company / Website URL*"
          value={formData.websiteURL}
          onChange={(e) => handleInputChange('websiteURL', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            value={formData.businessType}
            onChange={(e) => handleInputChange('businessType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Business Type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={formData.projectType}
            onChange={(e) => handleInputChange('projectType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Project Type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            value={formData.goals}
            onChange={(e) => handleInputChange('goals', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">What Are Your Goals?</option>
            {goalOptions.map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>

          <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Budget Range</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </div>

        <textarea
          placeholder="Tell Us More (optional)"
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
