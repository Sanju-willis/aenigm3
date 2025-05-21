'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-MRD82LQD';

export default function GTM() {
  return (
    <>
      {/* 1) Initialize Data Layer with structured page context + userId */}
      <Script id="dl-init" strategy="beforeInteractive">
        {`
          // Ensure dataLayer exists
          window.dataLayer = window.dataLayer || [];

          // Generate or retrieve a persistent anonymous userId
          (function() {
            try {
              // Try to get an existing userId from localStorage
              let userId = localStorage.getItem('a3l_userId');
              
              // If none, generate a new UUID and store it
              if (!userId) {
                // Use the Web Crypto API for RFC‑4122 UUID v4
                userId = crypto.randomUUID();
                localStorage.setItem('a3l_userId', userId);
              }

              // Push initial GTM bootstrap + our custom variables
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
                userId: userId,
                pageCategory: document.body.dataset.category || 'unknown',
                pageTitle: document.title,
                pagePath: window.location.pathname
              });
            } catch (e) {
              // Fallback: still push without userId on any error
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
                pageCategory: document.body.dataset.category || 'unknown',
                pageTitle: document.title,
                pagePath: window.location.pathname
              });
            }
          })();
        `}
      </Script>

      {/* 2) Google Tag Manager Core Snippet */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  );
}
