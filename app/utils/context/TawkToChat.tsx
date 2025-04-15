"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkToChat() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    // Prevent duplicate script loading
    if (document.getElementById("tawkto-script")) {
      return;
    }

    try {
      // Initialize Tawk API
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Create script element
      const script = document.createElement("script");
      script.id = "tawkto-script";
      script.async = true;
      script.src = "https://embed.tawk.to/67df3ecf9a2cc71918efc540/1in00qmpt";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      // Add event listeners to track loading status
      script.onload = () => {
        setScriptLoaded(true);
        console.log("Tawk.to script loaded successfully");
      };

      script.onerror = (error) => {
        setScriptError(true);
        console.error("Error loading Tawk.to script:", error);
      };

      // Append script to document
      document.head.appendChild(script);

      // Cleanup function to remove script when component unmounts
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
          console.log("Tawk.to script removed");

          // Cleanup Tawk_API when component unmounts
          if (window.Tawk_API && window.Tawk_API.onStatusChange) {
            delete window.Tawk_API;
            delete window.Tawk_LoadStart;
          }
        }
      };
    } catch (error) {
      console.error("Error in Tawk.to integration:", error);
      setScriptError(true);
    }
  }, []);

  // You could return a fallback UI if script fails to load
  if (scriptError) {
    return (
      <div style={{ display: "none" }}>
        {/* Script loading error is logged but not visible to users */}
      </div>
    );
  }

  return null;
}
