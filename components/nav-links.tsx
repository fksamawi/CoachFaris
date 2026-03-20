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
  <div className="space-y-4 text-[#232f2a]">
    <p>I partner with &quot;unicorn leaders&quot;—high performers who have never fit neatly into one box and are tired of twisting themselves to match titles.</p>
    <ul className="list-disc space-y-1 pl-5 opacity-90">
      <li>Stepping into executive roles.</li>
      <li>Questioning career pivots.</li>
    </ul>
  </div>
);

const AboutContent = () => (
  <div className="text-[#f0f2f5] space-y-4">
    <p>With over 15 years of experience across Europe and the Middle East, I bring a mix of strategic thinking and psychological insight.</p>
  </div>
);

// ... (Other content blocks stay the same)

const primarySections: Section[] = [
  { id: "who", label: "Who I work with", content: <WhoContent /> },
  { id: "what", label: "What we work on", content: <div className="text-[#232f2a]">Decisive moves for meaningful transitions.</div> },
  { id: "approach", label: "My approach", content: <div className="text-[#232f2a]">Direct, pragmatic thinking partnership.</div> },
];

const secondarySections: Section[] = [
  { id: "about", label: "About me", content: <AboutContent /> },
  { id: "started", label: "Getting started", content: <div className="text-[#f0f2f5]">A 30-minute Clarity Session to find your next move.</div> },
];

export function NavLinks() {
  const [openPrimaryId, setOpenPrimaryId] = useState<string | null>("who");
  const [openSecondaryId, setOpenSecondaryId] = useState<string | null>("about");
  const [heights, setHeights] = useState<Record<string, number>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Intersection Observer for Scroll Animation
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const measure = useCallback(() => {
    const h: Record<string, number> = {};
    [...primarySections, ...secondarySections].forEach(s => {
      if (contentRefs.current[s.id]) h[s.id] = contentRefs.current[s.id]!.scrollHeight;
    });
    setHeights(h);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const renderGroup = (
    sections: Section[], 
    currentId: string | null, 
    setter: (id: string | null) => void, 
    variant: "outlined" | "solid"
  ) => (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        {sections.map(s => {
          const active = currentId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setter(active ? null : s.id)}
              className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                active ? "font-bold text-[#a86443]" : "font-medium text-[#af765a] hover:text-[#a86443]"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      {sections.map(s => {
        const isOpen = currentId === s.id;
        return (
          <div 
            key={s.id} 
            className="overflow-hidden transition-all duration-500 ease-in-out" 
            style={{ maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 60}px` : "0", opacity: isOpen ? 1 : 0 }}
          >
            <div 
              ref={el => { contentRefs.current[s.id] = el; }} 
              className={`p-8 rounded-3xl text-sm leading-relaxed ${
                variant === "outlined" 
                  ? "bg-[#f0f2f5] border border-[#a86443]" 
                  : "bg-[#af765a]"
              }`}
            >
              {s.content}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className={`max-w-xl mx-auto w-full space-y-12 px-6 pb-20 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {renderGroup(primarySections, openPrimaryId, setOpenPrimaryId, "outlined")}
      {renderGroup(secondarySections, openSecondaryId, setOpenSecondaryId, "solid")}

      <div className="flex flex-col items-center gap-4 pt-6">
        <a 
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6" 
          className="bg-[#5c7a72] text-[#f0f2f5] px-10 py-4 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
        >
          Be Different. Make A Difference.
        </a>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#5e4c31] font-black">
          30 minutes. One conversation. No obligation.
        </p>
      </div>
    </div>
  );
}
