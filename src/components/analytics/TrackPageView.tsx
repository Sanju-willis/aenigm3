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

    const email = ''; // Optional: pull from session/user
    const phone = '';
    const eventId = window.__fb_dedupe_id;

    console.log('[🧪 Dedupe ID] window.__fb_dedupe_id:', eventId);

    trackEvent({
      email,
      phone,
      eventName: 'PageView',
      eventId, // ✅ This must match the browser pixel's eventID
    });
  }, []);

  return null;
}
