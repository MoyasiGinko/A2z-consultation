// GoogleAnalytics.tsx
"use client";

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (document.getElementById("google-analytics-script")) return;

    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-HLT9J6X6SV";
    scriptTag.async = true;
    scriptTag.id = "google-analytics-script";
    document.head.appendChild(scriptTag);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HLT9J6X6SV');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      if (scriptTag.parentNode) scriptTag.parentNode.removeChild(scriptTag);
      if (inlineScript.parentNode)
        inlineScript.parentNode.removeChild(inlineScript);
    };
  }, []);

  return null;
}
