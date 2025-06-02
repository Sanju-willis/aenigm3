// src\app\hooks\useSendPageView.ts
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

export default function useSendPageView({ email, gender, city, country, event_id }: PageViewProps) {
  useEffect(() => {
    const sendEvent = async () => {
      try {
        await axios.post("http://localhost:3000/events", {
          email,
          gender,
          city,
          country,
          event_id,
          client_ip_address: window.location.hostname,
          user_agent: navigator.userAgent,
        });
        console.log("✅ PageView event sent to backend");
      } catch (err) {
        console.error("❌ Failed to send PageView:", err);
      }
    };

    sendEvent();
  }, [email, gender, city, country, event_id]);
}
