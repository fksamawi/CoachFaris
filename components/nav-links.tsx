"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// --- Types ---
interface Section {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AccordionGroupProps {
  sections: Section[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
  heights: Record<string, number>;
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  variant: "outlined" | "solid";
}

// --- Data Arrays (Defined BEFORE the component to avoid hoisting errors) ---
const primarySections: Section[] = [
  {
    id: "who",
    label: "Who I work with",
    content: (
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
    ),
  },
  {
    id: "what",
    label: "What we work on",
    content: (
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
    ),
  },
  {
    id: "approach",
    label: "My approach",
    content: (
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
    ),
  },
];

const secondarySections: Section[] = [
  {
    id: "about",
    label: "About me",
    content: (
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
    ),
  },
  {
    id: "started",
    label: "Getting started",
    content: (
      <div className="space-y-4">
        <p>
          We begin with a 30-minute Clarity Session—a focused conversation on where
          you are now and what&apos;s at stake.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-[#798686]">
          <li>Clarify the decision, transition, or tension.</li>
          <li>Identify internal and structural drivers.</li>
        </ul>
      </div>
    ),
  },
];

// --- Sub-Component ---
const AccordionGroup = ({ 
  sections, 
  openId, 
  setOpenId, 
  heights, 
  contentRefs, 
  variant 
}: AccordionGroupProps) => (
  <nav className="space-y-4">
    <div className="flex flex-wrap items-center justify-center gap-6">
      {sections.map((s) => {
        const isActive = openId === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => setOpenId(isActive ? null : s.id)}
            className={`group flex items-center gap-1.5 text-sm transition-all duration-300 ${
              isActive ? "font-bold text-[#1d1716]" : "font-medium text-[#798686] hover:text-[#181b1b]"
            }`}
          >
            {s.label}
            <svg
              className={`transition-transform duration-300 ${isActive ? "rotate-180" : "opacity-40 group-hover:opacity-100"}`}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        );
      })}
    </div>
    {sections.map((s) => {
      const isOpen = openId === s.id;
      return (
        <div
          key={s.id}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ 
            maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 48}px` : "0px", 
            opacity: isOpen ? 1 : 0 
          }}
        >
          <div
            ref={(el) => (contentRefs.current[s.id] = el)}
            className={`p-6 rounded-2xl text-sm leading-relaxed ${
              variant === "outlined" 
                ? "border border-[#afb6b6] bg-transparent" 
                : "bg-[#f1eff5] border border-transparent"
            }`}
          >
            {s.content}
          </div>
        </div>
      );
    })}
  </nav>
);

// --- Main Component ---
export function NavLinks() {
  const [openPrimaryId, setOpenPrimaryId] = useState<string | null>("who");
  const [openSecondaryId, setOpenSecondaryId] = useState<string | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  const measureHeights = useCallback(() => {
    const newHeights: Record<string, number> = {};
    [...primarySections, ...secondarySections].forEach(s => {
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

  return (
    <div className="space-y-12">
      <AccordionGroup 
        sections={primarySections} 
        openId={openPrimaryId} 
        setOpenId={setOpenPrimaryId} 
        heights={heights} 
        contentRefs={contentRefs}
        variant="outlined"
      />

      <AccordionGroup 
        sections={secondarySections} 
        openId={openSecondaryId} 
        setOpenId={setOpenSecondaryId} 
        heights={heights} 
        contentRefs={contentRefs}
        variant="solid"
      />

      <div className="mt-8 flex flex-col items-center gap-2">
        <a
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
          className="inline-flex items-center justify-center rounded-full bg-[#1d1716] px-8 py-3.5 text-sm font-medium text-[#f2f3f3] hover:bg-[#303636] transition-all active:scale-95"
        >
          Be Different. Make A Difference.
        </a>
        <p className="text-xs text-[#798686]">30 minutes. One conversation. No obligation.</p>
      </div>
    </div>
  );
}
