"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[][];
  }
}

const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    let loaded = false;

    const removeListeners = () => {
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, loadAnalytics);
      });
    };

    function loadAnalytics() {
      if (loaded || document.getElementById("google-analytics-script")) return;
      loaded = true;
      removeListeners();

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(["js", new Date()]);
      window.dataLayer.push([
        "config",
        measurementId,
        { anonymize_ip: true },
      ]);

      const script = document.createElement("script");
      script.id = "google-analytics-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
    }

    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, loadAnalytics, {
        once: true,
        passive: true,
      });
    });

    const fallbackTimer = window.setTimeout(loadAnalytics, 5000);

    return () => {
      window.clearTimeout(fallbackTimer);
      removeListeners();
    };
  }, [measurementId]);

  return null;
}
