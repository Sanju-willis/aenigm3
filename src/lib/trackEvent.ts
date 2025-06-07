'use client';

export async function trackEvent({
  email,
  phone,
  eventName = 'PageView',
}: {
  email?: string;
  phone?: string;
  eventName?: string;
}) {
  try {
    if (!eventName || typeof eventName !== 'string') {
      console.warn('⚠️ Skipping event: invalid or missing event name.');
      return;
    }

    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    const eventSourceUrl = window.location.href;

    console.log('📡 Tracking client event:', eventName);

    await fetch('/api/sendServerEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        phone,
        fbp,
        fbc,
        eventName,
        eventSourceUrl,
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
