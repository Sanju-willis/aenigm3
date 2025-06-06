// src\lib\sendServerEvent.ts
import axios from 'axios';
import crypto from 'crypto';

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN!;
const PIXEL_ID = process.env.FB_PIXEL_ID!;
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

function hash(value?: string) {
  return value
    ? crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
    : undefined;
}

export async function sendServerSidePageView(data: Record<string, any>) {
  try {
    const {
      email,
      gender,
      city,
      country,
      ip,
      userAgent,
    } = data;

    const userData: Record<string, any> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
    };

    if (email) userData.em = [hash(email)];
    if (gender) userData.ge = [hash(gender)];
    if (city) userData.ct = [hash(city)];
    if (country) userData.country = [hash(country)];

    const payload = {
      access_token: ACCESS_TOKEN,
      test_event_code: TEST_EVENT_CODE,
      data: [
        {
          event_name: 'PageView',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: process.env.NEXT_PUBLIC_SITE_URL,
          user_data: userData,
          event_id: `ssr-${Date.now()}`,
        },
      ],
    };

    await axios.post(`https://graph.facebook.com/v22.0/${PIXEL_ID}/events`, payload);

    console.log('✅ Server-side PageView sent');
  } catch (err) {
    console.error('❌ Failed to send PageView', err);
  }
}
