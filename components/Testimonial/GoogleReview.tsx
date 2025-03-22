"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";

interface GoogleReviewsProps {
  appId: string;
  className?: string;
}

const GoogleReviews = ({ appId, className = "" }: GoogleReviewsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect runs when the component mounts
    // It ensures that Elfsight's script can find the container
    if (containerRef.current && window.elfsight) {
      window.elfsight.reinitWidgets();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.elfsight && containerRef.current) {
            window.elfsight.reinitWidgets();
          }
        }}
      />
      <div
        ref={containerRef}
        className={`elfsight-app-${appId}`}
        data-elfsight-app-lazy
      ></div>
    </motion.div>
  );
};

export default GoogleReviews;
