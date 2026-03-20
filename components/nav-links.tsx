"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// --- Types ---
interface Section {
  id: string;
  label: string;
  content: React.ReactNode;
}

// --- Content (Updated with Jet Black text) ---
const WhoContent = () => (
  <div className="space-y-4 text-[#232f2a]">
    <p>I partner with &quot;unicorn leaders&quot;—high performers who have never fit neatly into one box...</p>
    <ul className="list-disc space-y-1 pl-5 opacity-90">
      <li>Stepping into executive roles.</li>
      <li>Questioning career pivots.</li>
    </ul>
  </div>
);

const WhatContent = () => <div className="text-[#232f2a]"><p>We focus on decisive moves that change how you lead.</p></div>;
const ApproachContent = () => <div className="text-[#232f2a]"><p>Direct, pragmatic partnership. No motivational theatre.</p></div>;
const AboutContent = () => <div className="text-[#f0f2f5]"><p>15+ years experience across Europe and the Middle East.</p></div>;
const StartedContent = () => <div className="text-[#f0f2f5]"><p>30-minute Clarity Session to identify what is at stake.</p></div>;

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

  // Trigger Fade-In on Scroll Logic
  const group1Ref = useRef<HTMLDivElement>(null);
  const group2Ref = useRef<HTMLDivElement>(null);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.target === group1Ref.current && e.isIntersecting) setShow1(true);
        if (e.target === group2Ref.current && e.isIntersecting) setShow2(true);
      });
    }, { threshold: 0.1 });
    if (group1Ref.current) obs.observe(group1Ref.current);
    if (group2Ref.current) obs.observe(group2Ref.current);
    return () => obs.disconnect();
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
    variant: "outlined" | "solid",
    visible: boolean,
    ref: React.RefObject<HTMLDivElement | null>
  ) => (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {sections.map(s => {
          const active = currentId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setter(active ? null : s.id)}
              className={`text-sm transition-colors duration-300 ${active ? "font-bold text-[#a86443]" : "font-medium text-[#af765a] hover:text-[#a86443]"}`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      {sections.map(s => {
        const open = currentId === s.id;
        return (
          <div key={s.id} className="overflow-hidden transition-all duration-500" style={{ maxHeight: open ? `${(heights[s.id] ?? 0) + 40}px` : "0" }}>
            <div 
              ref={el => { contentRefs.current[s.id] = el; }} 
              className={`p-6 rounded-2xl text-sm mb-4 ${variant === "outlined" ? "bg-[#f0f2f5] border border-[#a86443]" : "bg-[#af765a]"}`}
            >
              {s.content}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-10 max-w-2xl mx-auto w-full px-4">
      {renderGroup(primarySections, openPrimaryId, setOpenPrimaryId, "outlined", show1, group1Ref)}
      {renderGroup(secondarySections, openSecondaryId, setOpenSecondaryId, "solid", show2, group2Ref)}

      <div className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-300 ${show2 ? "opacity-100" : "opacity-0"}`}>
        <a href="#" className="bg-[#5c7a72] text-[#f0f2f5] px-8 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all">
          Be Different. Make A Difference.
        </a>
        <p className="text-[10px] uppercase tracking-widest text-[#5e4c31] font-bold">
          30 minutes. One conversation. No obligation.
        </p>
      </div>
    </div>
  );
}
