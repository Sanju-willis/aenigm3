// src\lib\requestInfo.ts
'use server';

import { headers, cookies } from 'next/headers';

export async function extractRequestInfo() {
  const headersList = await headers();  // ✅ must await
  const cookieStore = await cookies();  // ✅ must await

  const userAgent = headersList.get('user-agent') || 'unknown';
  const ipRaw =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    '::1';

  const referrer = headersList.get('referer') || 'none';
  const acceptLang = headersList.get('accept-language') || 'unknown';

  const email = headersList.get('x-user-email') || undefined; // optional from header/middleware
  const fbc = cookieStore.get('_fbc')?.value || undefined;
  const fbp = cookieStore.get('_fbp')?.value || undefined;

  // 🌍 Lookup geolocation
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
    email,
    fbc,
    fbp,
  };
}
