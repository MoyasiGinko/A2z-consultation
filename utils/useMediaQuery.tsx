"use client";
import { useState, useEffect } from "react";

// Custom hook for responsive design
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // For SSR, default to false on initial render
    // Only execute on client side
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      // Set initial value
      setMatches(media.matches);

      // Define listener function
      const listener = (e: MediaQueryListEvent) => {
        setMatches(e.matches);
      };

      // Add the listener
      media.addEventListener("change", listener);

      // Clean up on unmount
      return () => {
        media.removeEventListener("change", listener);
      };
    }

    return undefined;
  }, [query]);

  return matches;
};

export default useMediaQuery;
