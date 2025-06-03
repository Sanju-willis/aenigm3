// src\hooks\useSendPageView.ts
"use client";

import { useEffect } from "react";
import axios from "axios";

interface PageViewProps {
  email?: string;
  gender?: string;
  city?: string;
  country?: string;
  event_id?: string;
}

export default function useSendPageView({
  email,
  gender,
  city,
  country,
  event_id,
}: PageViewProps) {
  useEffect(() => {
    const sendEvent = async () => {
      try {
        const payload = {
          email,
          gender,
          city,
          country,
          event_id,
          client_ip_address: window.location.hostname,
          user_agent: navigator.userAgent,
        };

        await axios.post("/api/events", payload);
        console.log("✅ PageView event sent to /api/events");
      } catch (err) {
        console.error("❌ Failed to send PageView:", err);
      }
    };

    sendEvent();
  }, [email, gender, city, country, event_id]);
}
