// src\components\analytics\TrackPageView.tsx
'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/trackEvent';

export default function TrackPageView() {
  useEffect(() => {
    const email = ''; // Optional: populate from session or user context
    const phone = '';
    trackEvent({ email, phone, eventName: 'PageView' });
  }, []);

  return null;
}
