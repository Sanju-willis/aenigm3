// src\components\forms\BusinessQualifyForm.tsx
import { useState } from 'react';

interface FormData {
  // Step 1 - About You
  fullName: string;
  workEmail: string;
  jobTitle: string;
  industry: string;
  websiteURL: string;
  whatsApp: string;

  // Step 2 - Website Traffic
  monthlyTraffic: string;
  monthlyConversions: string;
  monthlyAdSpend: string;

  // Step 3 - Challenges & Preferences
  biggestChallenge: string;
  growthTimeline: string;
  contactMethod: string;
}

const INITIAL_FORM_DATA: FormData = {
  fullName: '',
  workEmail: '',
  jobTitle: '',
  industry: '',
  websiteURL: '',
  whatsApp: '',
  monthlyTraffic: '',
  monthlyConversions: '',
  monthlyAdSpend: '',
  biggestChallenge: '',
  growthTimeline: '',
  contactMethod: '',
};

const trafficOptions = [
  'Less than 5,000',
  '5,000 - 10,000',
  '10,000 - 50,000',
  'More than 50,000',
];

const conversionOptions = [
  'Less than 200',
  '200 - 500',
  '500 - 1,000',
  'More than 1,000',
];

const spendOptions = [
  'Less than $500',
  '$500 - $2,000',
  '$2,000 - $5,000',
  'More than $5,000',
];

const challengeOptions = [
  'Visitors don\'t convert',
  'People drop off at checkout',
  'High ad costs, low sales',
  'Other (text field for custom input)',
];

const timelineOptions = [
  'Immediately',
  'Within 30 days',
  'Within 60 days',
  '3+ months',
];

const contactOptions = [
  'Email',
  'Phone',
  'WhatsApp',
];

interface BusinessQualifyFormProps {
  onClose: () => void;
}

export default function BusinessQualifyForm({ onClose }: BusinessQualifyFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    subject: 'ROI Guarantee Form Submitted',
    to: 'sanju.peramuna@gmail.com', // ✅ ADD THIS
    data: formData,
  }),
});

  } catch (err) {
    console.error('Email send failed:', err);
  }

  setIsSubmitted(true);
  setTimeout(() => {
    onClose();
  }, 2000);
};


  const inputClassName = "w-full p-1 rounded-lg bg-white border border-gray-200 focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm";
  const selectClassName = "w-full p-1 rounded-lg bg-white border border-gray-200 focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm appearance-none cursor-pointer";
  const buttonClassName = "bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-auto">
      <div className="w-full py-2 px-2 max-h-[98vh]">
        {/* Modal Card */}
        <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-2xl relative">
          {/* Close Button */}
          <button
            type="button"
            aria-label="Close"
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xl font-bold z-10"
            onClick={onClose}
          >
            ×
          </button>
          <div className="p-4">
            {/* Logo and Title */}
            <div className="text-center mb-2">
              <div className="flex justify-center mb-2">
                <img src="/icons/roi.svg" alt="ROI" className="w-8 h-8" />
              </div>
              <div className="flex items-center justify-center">
                <h1 className="text-lg font-bold text-gray-800">Apply for Our 2X ROI Guarantee!</h1>
              </div>
            </div>
            <hr className="mb-3" />

            {/* Progress Steps */}
            {!isSubmitted && (
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'} flex items-center justify-center text-xs font-semibold`}>
                    1
                  </div>
                  <div className="w-8 h-[2px] bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'} flex items-center justify-center text-xs font-semibold`}>
                    2
                  </div>
                  <div className="w-8 h-[2px] bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'} flex items-center justify-center text-xs font-semibold`}>
                    3
                  </div>
                </div>
              </div>
            )}

            {/* Form Content */}
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-3">
                {isSubmitted ? (
                  <div className="text-center space-y-2 py-2">
                    <h2 className="text-lg font-bold text-gray-800">Thanks!</h2>
                    <p className="text-sm text-gray-700">Our team is reviewing your application.</p>
                    <p className="text-sm text-gray-700">If you qualify, we'll reach out within 24 hours.</p>
                    
                    <div className="mt-2">
                      <p className="text-gray-600 mb-1 text-xs">In the meantime,</p>
                      <p className="text-xs mb-2">Schedule a quick call to discuss your growth potential</p>
                      <button
                        type="button"
                        className={buttonClassName}
                        onClick={() => window.location.href = '/schedule'}
                      >
                        Schedule a Call
                      </button>
                    </div>

                    <div className="mt-3">
                      <div className="inline-block ">
                        <img
                          src="/A3L Logo-01.svg"
                          alt="Aenigm3 Labs"
                          className="h-4"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {currentStep === 1 && (
                      <div className="space-y-2">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name*"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={inputClassName}
                          required
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <input
                            type="email"
                            name="workEmail"
                            placeholder="Work email*"
                            value={formData.workEmail}
                            onChange={handleInputChange}
                            className={inputClassName}
                            required
                          />
                          <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title*"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className={inputClassName}
                            required
                          />
                        </div>
                        
                        <input
                          type="text"
                          name="industry"
                          placeholder="Industry*"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className={inputClassName}
                          required
                        />
                        
                        <input
                          type="url"
                          name="websiteURL"
                          placeholder="website URL*"
                          value={formData.websiteURL}
                          onChange={handleInputChange}
                          className={inputClassName}
                          required
                        />
                        
                        <input
                          type="tel"
                          name="whatsApp"
                          placeholder="WhatsApp (Optional)"
                          value={formData.whatsApp}
                          onChange={handleInputChange}
                          className={inputClassName}
                        />

                        <div className="text-xs text-red-500">Get direct feedback on your audit results</div>

                        <div className="flex justify-end mt-2">
                          <button
                            type="button"
                            onClick={handleNext}
                            className={buttonClassName}
                          >
                            Next →
                          </button>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-2">
                        <div className="mb-1">
                          <p className="text-sm font-semibold text-gray-800">Monthly Website Traffic</p>
                          <p className="text-xs text-gray-500">(Traffic must be enough for valid testing)</p>
                        </div>

                        <select
                          name="monthlyTraffic"
                          value={formData.monthlyTraffic}
                          onChange={handleInputChange}
                          className={selectClassName}
                          required
                        >
                          <option value="">Select monthly traffic</option>
                          {trafficOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>

                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">How many conversions (sales, leads, sign-ups) do you get per month?</p>
                          <select
                            name="monthlyConversions"
                            value={formData.monthlyConversions}
                            onChange={handleInputChange}
                            className={selectClassName}
                            required
                          >
                            <option value="">Select monthly conversions</option>
                            {conversionOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">Current Monthly Ad Spend</p>
                          <select
                            name="monthlyAdSpend"
                            value={formData.monthlyAdSpend}
                            onChange={handleInputChange}
                            className={selectClassName}
                            required
                          >
                            <option value="">Select monthly ad spend</option>
                            {spendOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div className="flex justify-between mt-2">
                          <button
                            type="button"
                            onClick={handlePrevious}
                            className="text-blue-500 px-3 py-1 rounded-full font-semibold hover:bg-blue-50 transition-all text-sm"
                          >
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className={buttonClassName}
                          >
                            Next →
                          </button>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-2">
                        <div className="mb-1">
                          <p className="text-sm font-semibold text-gray-800">Biggest Conversion Challenge?</p>
                          <p className="text-xs text-gray-500">(Open-ended for qualification)</p>
                        </div>

                        <select
                          name="biggestChallenge"
                          value={formData.biggestChallenge}
                          onChange={handleInputChange}
                          className={selectClassName}
                          required
                        >
                          <option value="">Select your biggest challenge</option>
                          {challengeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>

                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">How Soon Do You Want to See Growth?</p>
                          <select
                            name="growthTimeline"
                            value={formData.growthTimeline}
                            onChange={handleInputChange}
                            className={selectClassName}
                            required
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-1">Preferred Contact Method</p>
                          <select
                            name="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleInputChange}
                            className={selectClassName}
                            required
                          >
                            <option value="">Select contact method</option>
                            {contactOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div className="flex justify-between mt-2">
                          <button
                            type="button"
                            onClick={handlePrevious}
                            className="text-blue-500 px-3 py-1 rounded-full font-semibold hover:bg-blue-50 transition-all text-sm"
                          >
                            ← Back
                          </button>
                          <button
                            type="submit"
                            className={buttonClassName}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}