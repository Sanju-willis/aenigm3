// src\components\analytics\ClientPageViewTracker.tsx
"use client";

import useSendPageView from "../../hooks/useSendPageView";

export default function ClientPageViewTracker() {
  const eventId = `dedupe-${Math.floor(Math.random() * 1000000)}`;

  useSendPageView({
    email: "test@example.com",
    gender: "m",
    city: "Colombo",
    country: "LK",
    event_id: eventId
  });

  return null;
}
