// src\lib\sendServerEvent.ts
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

// Map common event names to Facebook standard events
const EVENT_NAME_MAP: Record<string, string> = {
  'PageView': 'ViewContent',
  'page_view': 'ViewContent',
  'view_page': 'ViewContent',
  'AddToCart': 'AddToCart',
  'Purchase': 'Purchase',
  'Lead': 'Lead',
  'CompleteRegistration': 'CompleteRegistration',
  'InitiateCheckout': 'InitiateCheckout',
  'AddPaymentInfo': 'AddPaymentInfo',
  'AddToWishlist': 'AddToWishlist',
  'Contact': 'Contact',
  'CustomizeProduct': 'CustomizeProduct',
  'Donate': 'Donate',
  'FindLocation': 'FindLocation',
  'Schedule': 'Schedule',
  'Search': 'Search',
  'StartTrial': 'StartTrial',
  'SubmitApplication': 'SubmitApplication',
  'Subscribe': 'Subscribe',
};

function sanitizeEventName(eventName: string): string {
  // First check if it maps to a standard Facebook event
  const standardEvent = EVENT_NAME_MAP[eventName];
  if (standardEvent) return standardEvent;
  
  // If not a standard event, sanitize custom event name
  return eventName.trim().replace(/[^a-zA-Z0-9_]/g, '_');
}

function generateUniqueEventId(eventName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 9);
  return `${eventName}-${timestamp}-${random}`;
}

export async function sendServerEvent({
  eventName,
  userData = {},
  customData = {},
  eventSourceUrl,
  eventId,
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
    // Validate event name
    if (!eventName || typeof eventName !== 'string' || eventName.trim() === '') {
      console.warn('[❌ Invalid event name]', eventName);
      return;
    }

    // Sanitize and map event name
    const sanitizedEventName = sanitizeEventName(eventName);
    console.log(`[📝 Event name mapping] ${eventName} → ${sanitizedEventName}`);

    // Generate unique event ID
    const finalEventId = eventId || generateUniqueEventId(sanitizedEventName);

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

    if (country && country !== 'unknown') {
      const hashedCountry = hash(country);
      if (hashedCountry) payloadUserData.country = [hashedCountry];
    }

    // Enhanced custom data with event backup
    const enhancedCustomData = {
      ...customData,
      event_type: sanitizedEventName, // Backup event reference
      content_type: sanitizedEventName === 'ViewContent' ? 'page' : 'product',
    };

    const payload = {
      access_token: ACCESS_TOKEN,
      // Only include test_event_code in development
      ...(process.env.NODE_ENV === 'development' && TEST_EVENT_CODE && {
        test_event_code: TEST_EVENT_CODE
      }),
      data: [
        {
          event_name: sanitizedEventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventSourceUrl || process.env.NEXT_PUBLIC_SITE_URL,
          event_id: finalEventId,
          user_data: payloadUserData,
          custom_data: enhancedCustomData,
        },
      ],
    };

    console.log('[📤 Meta CAPI Payload]', JSON.stringify(payload, null, 2));

    const res = await axios.post(
      `https://graph.facebook.com/v22.0/${PIXEL_ID}/events`,
      payload
    );
    
    console.log(`✅ Sent ${sanitizedEventName} event via CAPI`, res.data);
    return res.data;
    
  } catch (err: any) {
    console.error(`❌ Failed to send ${eventName} event`, {
      error: err?.response?.data || err.message,
      status: err?.response?.status,
      statusText: err?.response?.statusText
    });
    
    // Don't throw - log and continue
    return null;
  }
}