"use client";

import React, { useState } from "react";

export function AboutMeSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about-me" className="bg-[#3E5F44] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header with Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-8 flex w-full items-center justify-between"
        >
          <h2 className="text-3xl font-bold text-[#DDD6B9] sm:text-4xl">
            About Me
          </h2>
          <svg
            className={`h-6 w-6 text-[#DDD6B9] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        {/* Content */}
        {isOpen && (
          <div className="rounded-lg border border-[#D4AA7D] bg-[#F5F2EA] p-6 sm:p-8">
            <div className="space-y-4 text-[#272727]">
              <p>
                With over 15 years of experience across Europe and the Middle East, I've worked across the HR value chain and executive development.
              </p>
              <p>
                I bring a mix of strategic thinking, psychological insight, and regional nuance. I've helped leaders navigate career pivots, identity transitions, and the messy reality of stepping up.
              </p>
              <p>
                Before coaching full-time, I built leadership programmes, managed talent, and worked in organizational development. I've been on both sides—as a leader making hard calls, and as someone supporting leaders through them.
              </p>
              <p className="font-semibold text-[#3E5F44]">
                What I believe:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Clarity comes from honest reflection, not generic frameworks.</li>
                <li>Great leaders are still figuring it out—they're just willing to ask better questions.</li>
                <li>Your career is yours to design, not something that happens to you.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
