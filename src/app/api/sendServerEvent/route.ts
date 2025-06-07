import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import crypto from 'crypto';

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN2!;
const PIXEL_ID = process.env.FB_PIXEL_ID2!;
const ENV_TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;
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

    const bodyText = await req.text();
    console.log('📩 Raw body received:', bodyText);

    const body = JSON.parse(bodyText);
    const {
      email,
      phone,
      fbp,
      fbc,
      userId,
      city,
      country,
      zip,
      eventName,
      eventSourceUrl,
      eventId: customEventId,
      test_event_code, // 👈 support dynamic test code
      custom_data = {},
      actionSource = 'website',
    } = body;

    if (!eventName || typeof eventName !== 'string' || eventName.trim() === '') {
      console.warn('❌ Missing or invalid event_name, skipping event');
      return NextResponse.json({ error: 'Invalid or missing event_name' }, { status: 400 });
    }

    const eventId = customEventId || `ssr-${Date.now()}`;

    const user_data: Record<string, any> = {
      em: email ? [hash(email)] : undefined,
      ph: phone ? [hash(phone)] : undefined,
      external_id: userId ? [hash(userId)] : undefined,
      client_ip_address: ip,
      client_user_agent: userAgent,
      fbp,
      fbc,
      country: country ? [hash(country)] : undefined,
      city: city ? [hash(city)] : undefined,
      zip: zip ? [hash(zip)] : undefined,
    };

    // Clean undefined fields
    Object.keys(user_data).forEach((key) => {
      if (user_data[key] === undefined) delete user_data[key];
    });

    const payload: Record<string, any> = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || '',
          action_source: actionSource,
          user_data,
          custom_data,
        },
      ],
    };

    // Conditionally include test_event_code
    const finalTestCode = test_event_code || ENV_TEST_EVENT_CODE;
    if (finalTestCode) {
      payload.data[0].test_event_code = finalTestCode;
    }

    console.log('[📤 Sending CAPI Event]', JSON.stringify(payload, null, 2));

    const response = await axios.post(`${FB_API_URL}?access_token=${ACCESS_TOKEN}`, payload);
    console.log('✅ Meta CAPI event sent:', response.data);

    return NextResponse.json({ success: true, eventId });
  } catch (err: any) {
    console.error('❌ CAPI send failed:', err.response?.data || err.message);
    return NextResponse.json({ error: 'Failed to send event' }, { status: 500 });
  }
}
