"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// --- Sub-Component for cleaner code ---
interface AccordionGroupProps {
  sections: any[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
  heights: Record<string, number>;
  contentRefs: any;
  variant: "outlined" | "solid";
}

const AccordionGroup = ({ sections, openId, setOpenId, heights, contentRefs, variant }: AccordionGroupProps) => (
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
            maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 32}px` : "0px", 
            opacity: isOpen ? 1 : 0 
          }}
        >
          <div
            ref={(el) => (contentRefs.current[s.id] = el)}
            className={`p-6 rounded-2xl text-sm leading-relaxed transition-colors duration-500 ${
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

export function NavLinks() {
  const [openPrimaryId, setOpenPrimaryId] = useState<string | null>("who");
  const [openSecondaryId, setOpenSecondaryId] = useState<string | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  const measureHeights = useCallback(() => {
    const newHeights: Record<string, number> = {};
    const all = [...primarySections, ...secondarySections];
    all.forEach(s => { if (contentRefs.current[s.id]) newHeights[s.id] = contentRefs.current[s.id]!.scrollHeight; });
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
          className="inline-flex items-center justify-center rounded-full bg-[#1d1716] px-8 py-3.5 text-sm font-medium text-[#f2f3f3] hover:bg-[#303636] transition-all"
        >
          Be Different. Make A Difference.
        </a>
        <p className="text-xs text-[#798686]">30 minutes. One conversation. No obligation.</p>
      </div>
    </div>
  );
}

// --- Content Arrays (Ensure these are defined) ---
const primarySections = [ /* same as before */ ];
const secondarySections = [ /* same as before */ ];
