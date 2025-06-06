// src/lib/sendServerEvent.ts
import axios from 'axios';
import crypto from 'crypto';

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN2!;
const PIXEL_ID = process.env.FB_PIXEL_ID2!;
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

function hash(value?: string) {
  return value
    ? crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
    : undefined;
}

export async function sendServerEvent({
  eventName,
  userData = {},
  customData = {},
  eventSourceUrl,
  eventId = `ssr-${Date.now()}`,
}: {
  eventName: string;
  userData?: {
    email?: string;
    phone?: string;
    gender?: string;
    city?: string;
    country?: string;
    external_id?: string;
    ip?: string;
    userAgent?: string;
    fbc?: string;
    fbp?: string;
  };
  customData?: Record<string, any>;
  eventSourceUrl?: string;
  eventId?: string;
}) {
  try {
    const {
      email,
      phone,
      gender,
      city,
      country,
      external_id,
      ip,
      userAgent,
      fbc,
      fbp,
    } = userData;

    const payloadUserData: Record<string, any> = {};

    if (ip) payloadUserData.client_ip_address = ip;
    if (userAgent) payloadUserData.client_user_agent = userAgent;
    if (email && hash(email)) payloadUserData.em = [hash(email)];
    if (phone && hash(phone)) payloadUserData.ph = [hash(phone)];
    if (gender && hash(gender)) payloadUserData.ge = [hash(gender)];
    if (external_id && hash(external_id)) payloadUserData.external_id = [hash(external_id)];
    if (fbc) payloadUserData.fbc = fbc;
    if (fbp) payloadUserData.fbp = fbp;

   if (city && city !== 'unknown') {
  const hashedCity = hash(city);
  if (hashedCity) payloadUserData.ct = [hashedCity];
}

if (country && country !== 'unknown') {
  const hashedCountry = hash(country);
  if (hashedCountry) payloadUserData.country = [hashedCountry]; // ✅ hashed version is valid
}


    const payload = {
      access_token: ACCESS_TOKEN,
      test_event_code: TEST_EVENT_CODE,
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventSourceUrl || process.env.NEXT_PUBLIC_SITE_URL,
          event_id: eventId,
          user_data: payloadUserData,
          custom_data: customData,
        },
      ],
    };

    console.log('[📤 Meta CAPI Payload]', JSON.stringify(payload, null, 2));

    const res = await axios.post(
      `https://graph.facebook.com/v22.0/${PIXEL_ID}/events`,
      payload
    );
    console.log(`✅ Sent ${eventName} event via CAPI`, res.data);
  } catch (err: any) {
    console.error(`❌ Failed to send ${eventName} event`, err?.response?.data || err.message);
  }
}
