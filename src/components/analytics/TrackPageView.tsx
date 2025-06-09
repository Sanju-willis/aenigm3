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
    if (typeof window === 'undefined') return;

    // Add: Get user ID from localStorage or auth context
    const userId = localStorage.getItem('a3l_userId') || ''; // fallback-safe
    const email = '';
    const phone = '';

    const maxWaitMs = 3000;
    const intervalMs = 100;
    let waited = 0;

    const interval = setInterval(() => {
      const eventId = window.__fb_dedupe_id;

      if (eventId) {
        console.log('[🧪 Dedupe ID found]', eventId);
        trackEvent({
          email,
          phone,
          eventName: 'PageView',
          eventId,
          userId, // ✅ added user ID here
        });
        clearInterval(interval);
      } else {
        waited += intervalMs;
        if (waited >= maxWaitMs) {
          console.warn('⚠️ Dedupe ID not set within 3s, sending without it');
          trackEvent({
            email,
            phone,
            eventName: 'PageView',
            userId, // ✅ still pass user ID
          });
          clearInterval(interval);
        }
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return null;
}
