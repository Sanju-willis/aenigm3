import { useState } from 'react';

interface AuditFormData {
  fullName: string;
  workEmail: string;
  websiteURL: string;
  biggestChallenge: string;
  commentsOrQuestions: string;
}

const INITIAL_AUDIT_FORM_DATA: AuditFormData = {
  fullName: '',
  workEmail: '',
  websiteURL: '',
  biggestChallenge: 'Low conversion rate',
  commentsOrQuestions: '',
};

const challengeOptions = [
  'Low conversion rate',
  'High bounce rate',
  'Poor mobile experience',
  'Confusing checkout process',
  'Need better UX & design',
];

export default function AuditForm() {
  const [formData, setFormData] = useState<AuditFormData>(INITIAL_AUDIT_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChallengeSelect = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      biggestChallenge: challenge,
    }));
    setShowDropdown(false);
  };

  const handleSubmit = () => {
    console.log('Audit form submitted:', formData);
    setIsSubmitted(true);
  };

  // Thank you / What Happens Next section
  const renderThankYou = () => (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">What Happens Next?</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
            ✓
          </div>
          <div>
            <p className="font-medium">Step 1: We analyze your site's conversion performance</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
            ✓
          </div>
          <div>
            <p className="font-medium">Step 2: Our experts identify growth opportunities</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
            ✓
          </div>
          <div>
            <p className="font-medium">Step 3: You receive a free CRO report with recommendations</p>
          </div>
        </div>
      </div>
      
      <p className="text-center font-medium mb-6">No Risk. No Spam. Just Real Insights to Grow Your Business.</p>
    </div>
  );

  // Form section
  const renderForm = () => (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-2 text-center">You run the business, we handle the sales!</h2>
      <p className="text-gray-600 mb-4 text-center">Tell us a little bit about you?</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your first and last name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Work email*</label>
            <input
              type="email"
              value={formData.workEmail}
              onChange={(e) => handleInputChange('workEmail', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">website URL*</label>
            <input
              type="url"
              value={formData.websiteURL}
              onChange={(e) => handleInputChange('websiteURL', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Link to the website you want us to analyze"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-center font-medium text-gray-700 mb-3">Getting to know your business</h3>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">What's Your Biggest Challenge?</label>
            <div 
              className="w-full px-4 py-2 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{formData.biggestChallenge}</span>
              <span className="text-gray-500">▼</span>
            </div>
            
            {showDropdown && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {challengeOptions.map((option) => (
                  <div 
                    key={option} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleChallengeSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Comments or Questions</label>
          <textarea
            value={formData.commentsOrQuestions}
            onChange={(e) => handleInputChange('commentsOrQuestions', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={2}
            placeholder="Tell us more about your business or specific issues"
          />
        </div>
        
        <div className="flex justify-end mt-6">
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 text-white py-2 px-12 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden ">
      {isSubmitted ? renderThankYou() : renderForm()}
    </div>
  );
}