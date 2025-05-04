'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MultiStepForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-blue-600">
              {step < 4 ? `Step ${step}` : '🎉 Done!'}
            </span>
          </DialogTitle>
          <DialogDescription>
            {step < 4
              ? 'Complete the form to apply for 2X ROI Guarantee'
              : 'Thanks! We’ll contact you soon.'}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-3">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleChange('fullName', e.target.value)
                  }
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    handleChange('email', e.target.value)
                  }
                />
                <Input
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={(e) =>
                    handleChange('website', e.target.value)
                  }
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <SelectRoot
                  onValueChange={(v: string) =>
                    handleChange('traffic', v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Monthly Website Traffic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less5k">
                      Less than 5,000
                    </SelectItem>
                    <SelectItem value="5k-10k">5,000 - 10,000</SelectItem>
                    <SelectItem value="10k-50k">
                      10,000 - 50,000
                    </SelectItem>
                    <SelectItem value="50k+">
                      More than 50,000
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>

                <SelectRoot
                  onValueChange={(v: string) =>
                    handleChange('conversions', v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Monthly Conversions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less200">
                      Less than 200
                    </SelectItem>
                    <SelectItem value="200-500">
                      200 - 500
                    </SelectItem>
                    <SelectItem value="500+">More than 500</SelectItem>
                  </SelectContent>
                </SelectRoot>

                <SelectRoot
                  onValueChange={(v: string) =>
                    handleChange('adSpend', v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Current Monthly Ad Spend" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less500">
                      Less than $500
                    </SelectItem>
                    <SelectItem value="500-2000">
                      $500 - $2,000
                    </SelectItem>
                    <SelectItem value="2000+">
                      More than $2,000
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <SelectRoot
                  onValueChange={(v: string) =>
                    handleChange('challenge', v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Biggest Conversion Challenge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visitors">
                      Visitors don’t convert
                    </SelectItem>
                    <SelectItem value="checkout">
                      People drop at checkout
                    </SelectItem>
                    <SelectItem value="cost">
                      High ad costs, low sales
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </SelectRoot>

                <SelectRoot
                  onValueChange={(v: string) =>
                    handleChange('growthTime', v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="How Soon to See Growth?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">
                      Immediately
                    </SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3months">
                      Within 3 months
                    </SelectItem>
                  </SelectContent>
                </SelectRoot>

                <SelectRoot
                  onValueChange={(v: string) =>
                    handleChange('contactMethod', v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Preferred Contact Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </SelectRoot>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-10">
                <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <p className="text-lg font-semibold">
                  Thank you! We will contact you within 24h.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {step < 4 && (
          <DialogFooter className="mt-4">
            {step > 1 && (
              <Button variant="outline" onClick={handlePrev}>
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleSubmit} disabled={loading}>
                {loading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
