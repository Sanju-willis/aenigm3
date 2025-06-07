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
          });
          clearInterval(interval);
        }
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return null;
}
