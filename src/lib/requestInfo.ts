// src\lib\requestInfo.ts
'use server';

import { headers } from 'next/headers';

export async function extractRequestInfo() {
  const headersList = await headers();

  const userAgent = headersList.get('user-agent') || 'unknown';
  const ipRaw =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    '::1';

  const referrer = headersList.get('referer') || 'none';
  const acceptLang = headersList.get('accept-language') || 'unknown';

  // 🌍 Lookup geolocation from IP (skip localhost)
  let city = 'unknown';
  let country = 'unknown';

  if (ipRaw !== '::1' && ipRaw !== '127.0.0.1') {
    try {
      const geoRes = await fetch(`https://ipapi.co/${ipRaw}/json`);
      const geoData = await geoRes.json();

      city = geoData.city || 'unknown';
      country = geoData.country || 'unknown';
    } catch (err) {
      console.warn('[🌐 Geolocation Lookup Failed]', err);
    }
  }

  return {
    ip: ipRaw,
    userAgent,
    referrer,
    acceptLang,
    city,
    country,
  };
}
