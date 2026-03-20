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

// --- Section Data ---
const primarySections = [
  {
    id: "who",
    label: "Who I work with",
    content: (
      <div className="space-y-4 border border-gray-400 rounded-2xl p-6">
        <p>
          I partner with "unicorn leaders"—high performers who have never fit
          neatly into one box and are tired of twisting themselves to match titles.
        </p>
        <p className="text-muted-foreground">You might be:</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground text-sm">
          <li>Stepping into your first executive or regional role.</li>
          <li>Questioning whether to double down or pivot.</li>
          <li>Wrestling with identity outside your job title.</li>
        </ul>
        <p>
          You&apos;re capable and self-aware. You&apos;re here because you know you
          can&apos;t think your way out of this one alone.
        </p>
      </div>
    ),
  },
  {
    id: "what",
    label: "What we work on",
    content: (
      <div className="space-y-4 border border-gray-400 rounded-2xl p-6">
        <p>
          Clients come to me when something important has shifted and the old
          way of operating no longer works.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground text-sm">
          <li>Making grounded decisions about a next role.</li>
          <li>Redefining success to align with actual values.</li>
          <li>Navigating the first 6–12 months in a bigger role.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "approach",
    label: "My approach",
    content: (
      <div className="space-y-4 border border-gray-400 rounded-2xl p-6">
        <p>
          Every engagement starts with deep listening—not a pre-packaged
          programme. I&apos;m direct but not harsh, pragmatic but not cynical.
        </p>
        <p className="text-xs text-muted-foreground italic">
          Coaching is private. I don&apos;t trade client stories for persuasion.
        </p>
      </div>
    ),
  },
];

const secondarySections = [
  {
    id: "about",
    label: "About me",
    content: (
      <div className="space-y-4 rounded-2xl bg-muted p-6">
        <p>
          With over 15 years of experience across Europe and the Middle East,
          I&apos;ve worked across the HR value chain and executive development.
        </p>
        <p>
          I bring a mix of strategic thinking, psychological insight, and
          regional nuance. We build the next chapter from there.
        </p>
      </div>
    ),
  },
  {
    id: "started",
    label: "Getting started",
    content: (
      <div className="space-y-4 rounded-2xl bg-muted p-6">
        <p>
          We begin with a 30-minute Clarity Session—a focused conversation on
          where you are now and what&apos;s at stake.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Clarify the decision or transition.</li>
          <li>Identify internal and structural drivers.</li>
        </ul>
      </div>
    ),
  },
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
      {/* FIRST ACCORDION: Outlined Style */}
      <nav aria-label="Services navigation" className="space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {primarySections.map((s) => {
            const isActive = openPrimaryId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setOpenPrimaryId(isActive ? null : s.id)}
                className={`group flex items-center gap-1.5 text-sm transition-all ${
                  isActive
                    ? "font-bold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                <ChevronDown
                  className={isActive ? "rotate-180" : "opacity-50 group-hover:opacity-100"}
                />
              </button>
            );
          })}
        </div>
        {primarySections.map((s) => {
          const isOpen = openPrimaryId === s.id;
          return (
            <div
              key={s.id}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 24}px` : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                ref={(el) => (contentRefs.current[s.id] = el)}
                className="pt-4 text-left text-sm leading-relaxed"
              >
                {s.content}
              </div>
            </div>
          );
        })}
      </nav>

      {/* SECOND ACCORDION: Solid Background Style */}
      <nav aria-label="About navigation" className="space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {secondarySections.map((s) => {
            const isActive = openSecondaryId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setOpenSecondaryId(isActive ? null : s.id)}
                className={`group flex items-center gap-1.5 text-sm transition-all ${
                  isActive
                    ? "font-bold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                <ChevronDown
                  className={isActive ? "rotate-180" : "opacity-50 group-hover:opacity-100"}
                />
              </button>
            );
          })}
        </div>
        {secondarySections.map((s) => {
          const isOpen = openSecondaryId === s.id;
          return (
            <div
              key={s.id}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? `${(heights[s.id] ?? 0) + 24}px` : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                ref={(el) => (contentRefs.current[s.id] = el)}
                className="pt-4 text-left text-sm leading-relaxed"
              >
                {s.content}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer CTA */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <a
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background hover:bg-foreground/90 transition-all active:scale-95"
        >
          Be Different. Make A Difference.
        </a>
        <p className="text-xs text-muted-foreground">
          30 minutes. One conversation. No obligation.
        </p>
      </div>
    </div>
  );
}
