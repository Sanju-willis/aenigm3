// src\lib\trackEvent.ts
'use client';

export async function trackEvent({
  email,
  phone,
  userId,
  eventName = 'PageView',
  eventId,
  test_event_code,
}: {
  email?: string;
  phone?: string;
  userId?: string;
  eventName?: string;
  eventId?: string;
  test_event_code?: string;
}) {
  try {
    if (!eventName || typeof eventName !== 'string') {
      console.warn('⚠️ Skipping event: invalid or missing event name.');
      return;
    }

    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    const eventSourceUrl = window.location.href;

    console.log('📡 Tracking client event:', { eventName, eventId, userId });

    await fetch('/api/sendServerEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        phone,
        userId, // ✅ Added userId to request body
        fbp,
        fbc,
        eventName,
        eventSourceUrl,
        eventId,
        test_event_code,
      }),
    });
  } catch (err) {
    console.error('❌ Failed to track event', err);
  }
}

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}
