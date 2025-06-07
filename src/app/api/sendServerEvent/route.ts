// src\app\api\sendServerEvent\route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import crypto from 'crypto';

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN2!;
const PIXEL_ID = process.env.FB_PIXEL_ID2!;
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE; // Optional
const FB_API_URL = `https://graph.facebook.com/v22.0/${PIXEL_ID}/events`;

function hash(value?: string) {
  return value
    ? crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
    : undefined;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '';
    const userAgent = req.headers.get('user-agent') || '';
    const {
      email,
      phone,
      fbp,
      fbc,
      eventName = 'PageView',
      eventSourceUrl,
    } = await req.json();

    if (!eventName || typeof eventName !== 'string') {
      console.warn('❌ Missing or invalid event_name, skipping event');
      return NextResponse.json({ error: 'Missing or invalid event_name' }, { status: 400 });
    }

    const eventId = `ssr-${Date.now()}`;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || '',
          action_source: 'website',
          user_data: {
            em: email ? [hash(email)] : undefined,
            ph: phone ? [hash(phone)] : undefined,
            client_ip_address: ip,
            client_user_agent: userAgent,
            fbp,
            fbc,
          },
          ...(TEST_EVENT_CODE && { test_event_code: TEST_EVENT_CODE }),
        },
      ],
    };

    console.log('[📤 Sending CAPI Event]', JSON.stringify(payload, null, 2));

    const response = await axios.post(`${FB_API_URL}?access_token=${ACCESS_TOKEN}`, payload);
    console.log('✅ Meta CAPI event sent:', response.data);

    return NextResponse.json({ success: true, eventId });
  } catch (err: any) {
    console.error('❌ CAPI send failed:', err.response?.data || err.message);
    return NextResponse.json({ error: 'Failed to send event' }, { status: 500 });
  }
}
