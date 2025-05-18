// src\components\ChatbotWidget.tsx
'use client';

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.setAttribute('chatbotId', 'gkzid1kp7bvbsk39xg7m7y2axkfpnte0');
    script.setAttribute('domain', 'test.mychatbot.com');
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatbotWidget;
