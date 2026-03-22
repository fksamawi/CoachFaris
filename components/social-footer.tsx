"use client"; // Required for Hooks in Next.js

import { useEffect, useRef, useState } from "react";

// ... (Keep your LinkedInIcon function here)

export function SocialFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's revealed
        }
      },
      { threshold: 0.1 } // Fires when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative w-full overflow-hidden bg-[#5c7a72] transition-all duration-1000 ease-out 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      {/* ... (The rest of your footer content) */}
    </footer>
  );
}
