"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// --- Types ---
interface Section {
  id: string;
  label: string;
  content: React.ReactNode;
}

// --- Content Components ---
const WhoContent = () => (
  <div className="space-y-4">
    <p>I partner with &quot;unicorn leaders&quot;—high performers who have never fit neatly into one box...</p>
    <ul className="list-disc space-y-1 pl-5 opacity-80">
      <li>Stepping into your first executive or regional role.</li>
      <li>Questioning whether to double down or pivot.</li>
    </ul>
  </div>
);

const WhatContent = () => (
  <div className="space-y-4">
    <p>Clients come to me when something important has shifted—inside them, around them, or both...</p>
  </div>
);

const ApproachContent = () => (
  <div className="space-y-4">
    <p>Every engagement starts with deep listening and honest conversation—not a pre-packaged programme.</p>
  </div>
);

const AboutContent = () => (
  <div className="space-y-4">
    <p>With over 15 years of experience across Europe and the Middle East...</p>
  </div>
);

const StartedContent = () => (
  <div className="space-y-4">
    <p>We begin with a 30-minute Clarity Session—a focused conversation on where you are now.</p>
  </div>
);

// --- Data ---
const primarySections: Section[] = [
  { id: "who", label: "Who I work with", content: <WhoContent /> },
  { id: "what", label: "What we work on", content: <WhatContent /> },
  { id: "approach", label: "My approach", content: <ApproachContent /> },
];

const secondarySections: Section[] = [
  { id: "about", label: "About me", content: <AboutContent /> },
  { id: "started", label: "Getting started", content: <StartedContent /> },
];

export function NavLinks() {
  const [openPrimaryId, setOpenPrimaryId] = useState<string | null>("who");
  const [openSecondaryId, setOpenSecondaryId] = useState<string | null>("about");
  const [heights, setHeights] = useState<Record<string, number>>({});
  
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Intersection Observer for Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible1(true); },
      { threshold: 0.1 }
    );
    if (containerRef1.current) observer.observe(containerRef1.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible2(true); },
      { threshold: 0.1 }
    );
    if (containerRef2.current) observer.observe(containerRef2.current);
    return () => observer.disconnect();
  }, []);

  const measureHeights = useCallback(() => {
    const newHeights: Record<string, number> = {};
    [...primarySections, ...secondarySections].forEach((s) => {
      const el = contentRefs.current[s.id];
      if (el) newHeights[s.id] = el.scrollHeight;
    });
    setHeights(newHeights);
  }, []);

  useEffect(() => {
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [measureHeights]);

  const renderGroup = (
    sections: Section[],
    currentId: string | null,
    setter: (id: string | null) => void,
    variant: "outlined" | "solid",
    isVisible: boolean,
    ref: React.RefObject<HTMLDivElement | null>
  ) => (
    <nav 
      ref={ref}
      className={`space-y-4 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {sections.map((s) => {
          const isActive = currentId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setter(isActive ? null : s.id)}
              className={`group flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300 ${
                isActive ? "font-bold text-[#a86443]" : "font-medium text-[#af765a] hover:text-[#a86443]"
              }`}
            >
              {s.label}
              <svg
                className={`transition-transform duration-300 ${isActive ? "rotate-180" : "opacity-40"}`}
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
              >
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          );
        })}
      </div>
      {sections.map((s) => {
        const isOpen = currentId === s.id;
        return (
          <div
            key={s.id}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 64}px` : "0px", opacity: isOpen ? 1 : 0 }}
          >
            <div
              ref={(el) => { contentRefs.current[s.id] = el; }}
              className={`p-6 rounded-2xl text-sm leading-relaxed ${
                variant === "outlined" 
                  ? "border border-[#a86443] bg-[#f0f2f5] text-[#232f2a]" 
                  : "bg-[#af765a] border border-transparent text-[#f0f2f5]"
              }`}
            >
              {s.content}
            </div>
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="space-y-16 px-4 sm:px-0 max-w-2xl mx-auto">
      {renderGroup(primarySections, openPrimaryId, setOpenPrimaryId, "outlined", isVisible1, containerRef1)}
      {renderGroup(secondarySections, openSecondaryId, setOpenSecondaryId, "solid", isVisible2, containerRef2)}

      <div className={`mt-12 flex flex-col items-center gap-4 transition-all duration-1000 delay-300 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <a
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
          className="w-full sm:w-64 inline-flex items-center justify-center rounded-full bg-[#5c7a72] px-8 py-4 text-sm font-semibold text-[#f0f2f5] hover:opacity-90 transition-all active:scale-95"
        >
          Be Different. Make A Difference.
        </a>
        <p className="text-[10px] uppercase tracking-widest text-[#5e4c31] font-bold">
          30 minutes. One conversation. No obligation.
        </p>
      </div>
    </div>
  );
}
