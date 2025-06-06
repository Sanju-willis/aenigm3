// src\components\forms\BusinessQualifyForm.tsx
import { useEffect, useState } from 'react';

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

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function BusinessQualifyForm({ onClose }: BusinessQualifyFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const validateCurrentStep = (step: number): boolean => {
    const newErrors: typeof errors = {};
    
    if (step === 1) {
      // Step 1 validation
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required';
      }
      if (!formData.workEmail.trim()) {
        newErrors.workEmail = 'Work email is required';
      } else if (!isValidEmail(formData.workEmail.trim())) {
        newErrors.workEmail = 'Please enter a valid email address';
      }
      if (!formData.jobTitle.trim()) {
        newErrors.jobTitle = 'Job Title is required';
      }
      if (!formData.industry.trim()) {
        newErrors.industry = 'Industry is required';
      }
      if (!formData.websiteURL.trim()) {
        newErrors.websiteURL = 'Website URL is required';
      }
    } 
    else if (step === 2) {
      // Step 2 validation
      if (!formData.monthlyTraffic) {
        newErrors.monthlyTraffic = 'Please select monthly traffic';
      }
      if (!formData.monthlyConversions) {
        newErrors.monthlyConversions = 'Please select monthly conversions';
      }
      if (!formData.monthlyAdSpend) {
        newErrors.monthlyAdSpend = 'Please select monthly ad spend';
      }
    } 
    else if (step === 3) {
      // Step 3 validation
      if (!formData.biggestChallenge) {
        newErrors.biggestChallenge = 'Please select your biggest challenge';
      }
      if (!formData.growthTimeline) {
        newErrors.growthTimeline = 'Please select growth timeline';
      }
      if (!formData.contactMethod) {
        newErrors.contactMethod = 'Please select contact method';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing/selecting
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (validateCurrentStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    // Clear errors when going back
    setErrors({});
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submit
    if (!validateCurrentStep(3)) {
      return;
    }

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'ROI Guarantee Form Submitted',
          to: 'sanju.peramuna@gmail.com',
          data: formData,
        }),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Email send failed:', err);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const getFieldError = (field: keyof FormData) => {
    return errors[field] ? (
      <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
    ) : null;
  };

  const inputClassName = "w-full p-1 rounded-lg bg-white border border-gray-200 focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm";
  const inputErrorClassName = "w-full p-1 rounded-lg bg-white border border-red-300 focus:ring-1 focus:ring-red-500 focus:border-transparent text-gray-800 text-sm";
  const selectClassName = "w-full p-1 rounded-lg bg-white border border-gray-200 focus:ring-1 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm appearance-none cursor-pointer";
  const selectErrorClassName = "w-full p-1 rounded-lg bg-white border border-red-300 focus:ring-1 focus:ring-red-500 focus:border-transparent text-gray-800 text-sm appearance-none cursor-pointer";
  const buttonClassName = "bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'rgba(191, 211, 242, 0.5)',
        backdropFilter: 'blur(6px)',
      }} id="BusinessQualifyForm">
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
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* STEP 1 - About You */}
                  {currentStep === 1 && (
                    <div className="space-y-2">
                      <div>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name*"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={errors.fullName ? inputErrorClassName : inputClassName}
                        />
                        {getFieldError('fullName')}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <input
                            type="email"
                            name="workEmail"
                            placeholder="Work email*"
                            value={formData.workEmail}
                            onChange={handleInputChange}
                            className={errors.workEmail ? inputErrorClassName : inputClassName}
                          />
                          {getFieldError('workEmail')}
                        </div>
                        <div>
                          <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title*"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className={errors.jobTitle ? inputErrorClassName : inputClassName}
                          />
                          {getFieldError('jobTitle')}
                        </div>
                      </div>

                      <div>
                        <input
                          type="text"
                          name="industry"
                          placeholder="Industry*"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className={errors.industry ? inputErrorClassName : inputClassName}
                        />
                        {getFieldError('industry')}
                      </div>

                      <div>
                        <input
                          type="url"
                          name="websiteURL"
                          placeholder="Website URL*"
                          value={formData.websiteURL}
                          onChange={handleInputChange}
                          className={errors.websiteURL ? inputErrorClassName : inputClassName}
                        />
                        {getFieldError('websiteURL')}
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="whatsApp"
                          placeholder="WhatsApp (Optional)"
                          value={formData.whatsApp}
                          onChange={handleInputChange}
                          className={inputClassName}
                        />
                      </div>

                      <div className="text-xs text-red-500">Get direct feedback on your audit results</div>

                      <div className="flex justify-end mt-4">
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

                  {/* STEP 2 - Website Traffic */}
                  {currentStep === 2 && (
                    <div className="space-y-3">
                      <div className="mb-2">
                        <p className="text-sm font-semibold text-gray-800">Monthly Website Traffic</p>
                        <p className="text-xs text-gray-500">(Traffic must be enough for valid testing)</p>
                      </div>

                      <div>
                        <select
                          name="monthlyTraffic"
                          value={formData.monthlyTraffic}
                          onChange={handleInputChange}
                          className={errors.monthlyTraffic ? selectErrorClassName : selectClassName}
                        >
                          <option value="">Select monthly traffic*</option>
                          {trafficOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {getFieldError('monthlyTraffic')}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 mb-1">How many conversions (sales, leads, sign-ups) do you get per month?*</p>
                        <select
                          name="monthlyConversions"
                          value={formData.monthlyConversions}
                          onChange={handleInputChange}
                          className={errors.monthlyConversions ? selectErrorClassName : selectClassName}
                        >
                          <option value="">Select monthly conversions*</option>
                          {conversionOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {getFieldError('monthlyConversions')}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 mb-1">Current Monthly Ad Spend*</p>
                        <select
                          name="monthlyAdSpend"
                          value={formData.monthlyAdSpend}
                          onChange={handleInputChange}
                          className={errors.monthlyAdSpend ? selectErrorClassName : selectClassName}
                        >
                          <option value="">Select monthly ad spend*</option>
                          {spendOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {getFieldError('monthlyAdSpend')}
                      </div>

                      <div className="flex justify-between mt-4">
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

                  {/* STEP 3 - Challenges & Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-3">
                      <div className="mb-2">
                        <p className="text-sm font-semibold text-gray-800">Biggest Conversion Challenge?*</p>
                        <p className="text-xs text-gray-500">(Open-ended for qualification)</p>
                      </div>

                      <div>
                        <select
                          name="biggestChallenge"
                          value={formData.biggestChallenge}
                          onChange={handleInputChange}
                          className={errors.biggestChallenge ? selectErrorClassName : selectClassName}
                        >
                          <option value="">Select your biggest challenge*</option>
                          {challengeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {getFieldError('biggestChallenge')}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 mb-1">How Soon Do You Want to See Growth?*</p>
                        <select
                          name="growthTimeline"
                          value={formData.growthTimeline}
                          onChange={handleInputChange}
                          className={errors.growthTimeline ? selectErrorClassName : selectClassName}
                        >
                          <option value="">Select timeline*</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {getFieldError('growthTimeline')}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 mb-1">Preferred Contact Method*</p>
                        <select
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleInputChange}
                          className={errors.contactMethod ? selectErrorClassName : selectClassName}
                        >
                          <option value="">Select contact method*</option>
                          {contactOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {getFieldError('contactMethod')}
                      </div>

                      <div className="flex justify-between mt-4">
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
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}