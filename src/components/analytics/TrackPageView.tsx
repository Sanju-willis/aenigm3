// src\components\analytics\TrackPageView.tsx
'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/trackEvent';

declare global {
  interface Window {
    __fb_dedupe_id?: string;
  }
}
export default function TrackPageView() {
  useEffect(() => {
    const email = ''; // Optional: populate from session or user context
    const phone = '';
    const eventId = typeof window !== 'undefined' ? window.__fb_dedupe_id : undefined;

    trackEvent({
      email,
      phone,
      eventName: 'PageView',
      eventId, // 👈 deduplication ID passed to backend
    });
  }, []);

  return null;
}
