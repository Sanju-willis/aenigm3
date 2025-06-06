// src\lib\requestInfo.ts
'use server';

import { headers, cookies } from 'next/headers';

export async function extractRequestInfo() {
  const headersList = await headers();
  const cookieStore = await cookies();

  const userAgent = headersList.get('user-agent') || 'unknown';
  const ipRaw =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    '::1';

  // 🚫 Ignore bot/test/preview traffic
  const isBot = userAgent.includes('vercel-favicon') || userAgent.includes('bot') || userAgent === 'unknown';
  const isLocal = ipRaw === '::1' || ipRaw === '127.0.0.1';

  if (isBot || isLocal) {
    console.log('[🛑 Skipped Non-Human Request]', { userAgent, ipRaw });
    return null;
  }

  const referrer = headersList.get('referer') || undefined;
  const acceptLang = headersList.get('accept-language') || 'unknown';

  const email = headersList.get('x-user-email') || undefined;
  const fbc = cookieStore.get('_fbc')?.value || undefined;
  const fbp = cookieStore.get('_fbp')?.value || undefined;

  let city = 'unknown';
  let country = 'unknown';

  try {
    const geoRes = await fetch(`https://ipapi.co/${ipRaw}/json`);
    const geoData = await geoRes.json();
    city = geoData.city || 'unknown';
    country = geoData.country || 'unknown';
  } catch (err) {
    console.warn('[🌐 Geolocation Failed]', err);
  }

  return {
    ip: ipRaw,
    userAgent,
    referrer,
    acceptLang,
    city,
    country,
    email,
    fbc,
    fbp,
  };
}
