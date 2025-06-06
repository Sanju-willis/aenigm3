// src\app\api\sendServerEvent\route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import crypto from 'crypto';

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN2!;
const PIXEL_ID = process.env.FB_PIXEL_ID2!;
const FB_API_URL = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;

function hash(value?: string) {
  return value
    ? crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
    : undefined;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '';
    const userAgent = req.headers.get('user-agent') || '';
    const { email, phone, fbp, fbc, eventName = 'PageView', eventSourceUrl } = await req.json();

    const eventId = `ssr-${Date.now()}`; // Unique ID for deduplication

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || '',
          action_source: 'website',
          user_data: {
            em: hash(email),
            ph: hash(phone),
            client_ip_address: ip,
            client_user_agent: userAgent,
            fbp,
            fbc,
          },
        },
      ],
    };
    console.log('[📤 CAPI Payload]', JSON.stringify(payload, null, 2));

    const response = await axios.post(`${FB_API_URL}?access_token=${ACCESS_TOKEN}`, payload);
    console.log('✅ Meta CAPI event sent:', response.data);

    return NextResponse.json({ success: true, eventId });
  } catch (err: any) {
    console.error('❌ CAPI send failed:', err.response?.data || err.message);
    return NextResponse.json({ error: 'Failed to send event' }, { status: 500 });
  }
}
