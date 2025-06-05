// src\app\api\events\route.ts
// Conversion api
import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      email,
      gender,
      city,
      country,
      client_ip_address,
      user_agent,
      event_id,
    } = body;

    const userData: Record<string, any> = {
      client_ip_address,
      client_user_agent: user_agent,
    };

    if (email) userData.em = [hash(email)];
    if (gender) userData.ge = [hash(gender)];
    if (city) userData.ct = [hash(city)];
    if (country) userData.country = [hash(country)];

    const eventPayload = {
      access_token: ACCESS_TOKEN,
      test_event_code: TEST_EVENT_CODE,
      data: [
        {
          event_name: 'PageView',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: 'https://yourdomain.com', // ✅ Replace with your actual domain
          user_data: userData,
          event_id: event_id || 'pageview-' + Date.now(),
        },
      ],
    };

    const fbResponse = await axios.post(
      `https://graph.facebook.com/v22.0/${PIXEL_ID}/events`,
      eventPayload
    );

    console.log('✅ Facebook PageView:', fbResponse.data);
    return NextResponse.json({ success: true, fb: fbResponse.data });
  } catch (error: any) {
    console.error('❌ Facebook API Error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Facebook API failed', details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
