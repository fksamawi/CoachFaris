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
    <p>
      I partner with &quot;unicorn leaders&quot;—high performers who have never fit
      neatly into one box and are tired of twisting themselves to match titles.
    </p>
    <p className="text-[#798686]">You might be:</p>
    <ul className="list-disc space-y-1 pl-5 text-[#798686]">
      <li>Stepping into your first executive or regional role.</li>
      <li>Questioning whether to double down or pivot.</li>
      <li>Wrestling with identity outside your job title.</li>
    </ul>
  </div>
);

const WhatContent = () => (
  <div className="space-y-4">
    <p>
      Clients come to me when something important has shifted—inside them,
      around them, or both—and the old way of operating no longer works.
    </p>
    <ul className="list-disc space-y-1 pl-5 text-[#798686]">
      <li>Making a clear, grounded decision about a next role.</li>
      <li>Redefining success so it aligns with your actual values.</li>
    </ul>
  </div>
);

const ApproachContent = () => (
  <div className="space-y-4">
    <p>
      Every engagement starts with deep listening and honest conversation—not a
      pre-packaged programme.
    </p>
    <p>
      I&apos;m direct but not harsh, pragmatic but not cynical. We focus on the
      few decisive moves that move the needle.
    </p>
  </div>
);

const AboutContent = () => (
  <div className="space-y-4">
    <p>
      With over 15 years of experience across Europe and the Middle East,
      I&apos;ve worked across the HR value chain and executive development.
    </p>
    <p>
      I bring a mix of strategic thinking, psychological insight, and regional
      nuance.
    </p>
  </div>
);

const StartedContent = () => (
  <div className="space-y-4">
    <p>
      We begin with a 30-minute Clarity Session—a focused conversation on where
      you are now and what&apos;s at stake.
    </p>
    <ul className="list-disc space-y-1 pl-5 text-sm text-[#798686]">
      <li>Clarify the decision, transition, or tension.</li>
      <li>Identify internal and structural drivers.</li>
    </ul>
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
  // Set defaults: Who and About are open
  const [openPrimaryId, setOpenPrimaryId] = useState<string | null>("who");
  const [openSecondaryId, setOpenSecondaryId] = useState<string | null>("about");

  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

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
    delayClass: string
  ) => (
    <nav className={`space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both ${delayClass}`}>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {sections.map((s) => {
          const isActive = currentId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setter(isActive ? null : s.id)}
              className={`group flex items-center gap-1.5 text-xs sm:text-sm transition-all duration-300 ${
                isActive ? "font-bold text-[#1d1716]" : "font-medium text-[#798686] hover:text-[#181b1b]"
              }`}
            >
              {s.label}
              <svg
                className={`transition-transform duration-300 ${isActive ? "rotate-180" : "opacity-40 group-hover:opacity-100"}`}
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
            style={{ 
              maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 64}px` : "0px", 
              opacity: isOpen ? 1 : 0 
            }}
          >
            <div
              ref={(el) => { contentRefs.current[s.id] = el; }}
              className={`p-5 sm:p-6 rounded-2xl text-sm leading-relaxed ${
                variant === "outlined" 
                  ? "border border-[#afb6b6] bg-transparent text-[#303636]" 
                  : "bg-[#f1eff5] border border-transparent text-[#1d1716]"
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
    <div className="space-y-12 px-2 sm:px-0">
      {/* Group 1 fades in first */}
      {renderGroup(primarySections, openPrimaryId, setOpenPrimaryId, "outlined", "delay-0")}

      {/* Group 2 fades in slightly after */}
      {renderGroup(secondarySections, openSecondaryId, setOpenSecondaryId, "solid", "delay-300")}

      {/* CTA fades in last */}
      <div className="mt-8 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
        <a
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#1d1716] px-10 py-4 text-sm font-semibold text-[#f2f3f3] hover:bg-[#303636] transition-all active:scale-95 shadow-lg shadow-black/5"
        >
          Be Different. Make A Difference.
        </a>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#949e9e] font-medium">
          30 minutes. One conversation. No obligation.
        </p>
      </div>
    </div>
  );
}