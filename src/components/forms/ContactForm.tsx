'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  // Self-contained state management
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    traffic: '',
    conversions: '',
    adSpend: '',
    challenge: '',
    growthTime: '',
    contactMethod: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!open) return null;

  const handleNext = () => {
    const currentErrors = validateStep();
    if (Object.keys(currentErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const handlePrev = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateStep = () => {
    const stepErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.fullName) stepErrors.fullName = 'Required';
      if (!formData.email) stepErrors.email = 'Required';
      if (!formData.website) stepErrors.website = 'Required';
    }
    if (step === 2) {
      if (!formData.traffic) stepErrors.traffic = 'Required';
      if (!formData.conversions) stepErrors.conversions = 'Required';
      if (!formData.adSpend) stepErrors.adSpend = 'Required';
    }
    if (step === 3) {
      if (!formData.challenge) stepErrors.challenge = 'Required';
      if (!formData.growthTime) stepErrors.growthTime = 'Required';
      if (!formData.contactMethod) stepErrors.contactMethod = 'Required';
    }
    return stepErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-xl"
        >
          <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
            ×
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <p className="text-sm text-blue-600 font-medium mb-1">Step {step} of 3</p>
              <h2 className="text-xl font-bold mb-2">
                {step === 1 && 'About You'}
                {step === 2 && 'Business Details'}
                {step === 3 && 'Goals'}
              </h2>
              <div className="h-1 w-full bg-gray-200 rounded">
                <div className={`h-1 bg-blue-600 rounded transition-all duration-300`} style={{ width: `${step * 33}%` }} />
              </div>
            </div>

            {step === 1 && (
              <>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <input
                  type="text"
                  name="website"
                  placeholder="Website URL*"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
              </>
            )}

            {step === 2 && (
              <>
                <select name="traffic" value={formData.traffic} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">Monthly Website Traffic*</option>
                  <option value="less5k">Less than 5,000</option>
                  <option value="5k-10k">5,000 - 10,000</option>
                  <option value="10k-50k">10,000 - 50,000</option>
                  <option value="50k+">More than 50,000</option>
                </select>
                {errors.traffic && <p className="text-red-500 text-sm">{errors.traffic}</p>}

                <select name="conversions" value={formData.conversions} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">Monthly Conversions*</option>
                  <option value="less200">Less than 200</option>
                  <option value="200-500">200 - 500</option>
                  <option value="500+">More than 500</option>
                </select>
                {errors.conversions && <p className="text-red-500 text-sm">{errors.conversions}</p>}

                <select name="adSpend" value={formData.adSpend} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">Current Monthly Ad Spend*</option>
                  <option value="less500">Less than $500</option>
                  <option value="500-2000">$500 - $2,000</option>
                  <option value="2000+">More than $2,000</option>
                </select>
                {errors.adSpend && <p className="text-red-500 text-sm">{errors.adSpend}</p>}
              </>
            )}

            {step === 3 && (
              <>
                <select name="challenge" value={formData.challenge} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">Biggest Conversion Challenge*</option>
                  <option value="visitors">Visitors don't convert</option>
                  <option value="checkout">People drop off at checkout</option>
                  <option value="cost">High ad costs, low sales</option>
                  <option value="other">Other</option>
                </select>
                {errors.challenge && <p className="text-red-500 text-sm">{errors.challenge}</p>}

                <select name="growthTime" value={formData.growthTime} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">How Soon to See Growth?*</option>
                  <option value="immediately">Immediately</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                </select>
                {errors.growthTime && <p className="text-red-500 text-sm">{errors.growthTime}</p>}

                <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full border p-2 rounded">
                  <option value="">Preferred Contact Method*</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                {errors.contactMethod && <p className="text-red-500 text-sm">{errors.contactMethod}</p>}
              </>
            )}

            <div className="flex justify-between pt-2">
              {step > 1 && (
                <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto">
                  Next
                </button>
              ) : (
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-auto">
                  Submit
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}