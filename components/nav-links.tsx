"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// --- Icons ---
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${className}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// --- Section Data (Remains the same as before) ---
const primarySections = [
  { id: "who", label: "Who I work with", content: ( <div className="space-y-4 border border-gray-400 rounded-2xl p-6"><p>I partner with "unicorn leaders"...</p></div> ) },
  { id: "what", label: "What we work on", content: ( <div className="space-y-4 border border-gray-400 rounded-2xl p-6"><p>Clients come to me when something important has shifted...</p></div> ) },
  { id: "approach", label: "My approach", content: ( <div className="space-y-4 border border-gray-400 rounded-2xl p-6"><p>Every engagement starts with deep listening...</p></div> ) },
];

const secondarySections = [
  { id: "about", label: "About me", content: ( <div className="space-y-4 rounded-2xl bg-muted p-6 border border-transparent"><p>With over 15 years of experience...</p></div> ) },
  { id: "started", label: "Getting started", content: ( <div className="space-y-4 rounded-2xl bg-muted p-6 border border-transparent"><p>We begin with a 30‑minute Clarity Session...</p></div> ) },
];

export function NavLinks() {
  const [openPrimaryId, setOpenPrimaryId] = useState<string | null>("who");
  const [openSecondaryId, setOpenSecondaryId] = useState<string | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  const measureHeights = useCallback(() => {
    const newHeights: Record<string, number> = {};
    [...primarySections, ...secondarySections].forEach((section) => {
      const el = contentRefs.current[section.id];
      if (el) newHeights[section.id] = el.scrollHeight;
    });
    setHeights(newHeights);
  }, []);

  useEffect(() => {
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [measureHeights]);

  return (
    <div className="space-y-12">
      {/* FIRST ACCORDION */}
      <nav aria-label="Services navigation" className="space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {primarySections.map((s) => {
            const isActive = openPrimaryId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setOpenPrimaryId(isActive ? null : s.id)}
                className={`group flex items-center gap-1.5 text-sm transition-all ${
                  isActive ? "font-bold text-foreground" : "font-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                <ChevronDown className={isActive ? "rotate-180" : "opacity-50 group-hover:opacity-100"} />
              </button>
            );
          })}
        </div>
        {primarySections.map((s) => (
          <div
            key={s.id}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: openPrimaryId === s.id ? `${(heights[s.id] ?? 0) + 24}px` : "0px", opacity: openPrimaryId === s.id ? 1 : 0 }}
          >
            <div ref={(el) => (contentRefs.current[s.id] = el)} className="pt-4 text-left text-sm leading-relaxed">
              {s.content}
            </div>
          </div>
        ))}
      </nav>

      {/* SECOND ACCORDION */}
      <nav aria-label="About navigation" className="space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {secondarySections.map((s) => {
            const isActive = openSecondaryId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setOpenSecondaryId(isActive ? null : s.id)}
                className={`group flex items-center gap-1.5 text-sm transition-all ${
                  isActive ? "font-bold text-foreground" : "font-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                <ChevronDown className={isActive ? "rotate-180" : "opacity-50 group-hover:opacity-100"} />
              </button>
            );
          })}
        </div>
        {secondarySections.map((s) => (
          <div
            key={s.id}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: openSecondaryId === s.id ? `${(heights[s.id] ?? 0) + 24}px` : "0px", opacity: openSecondaryId === s.id ? 1 : 0 }}
          >
            <div ref={(el) => (contentRefs.current[s.id] = el)} className="pt-4 text-left text-sm leading-relaxed">
              {s.content}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer CTA */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <a href="https://calendar.app.google/82cuX3WRaRWwDAdu6" className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background hover:bg-foreground/90 transition-all active:scale-95">
          Be Different. Make A Difference.
        </a>
        <p className="text-xs text-muted-foreground">30 minutes. One conversation. No obligation.</p>
      </div>
    </div>
  );
}
