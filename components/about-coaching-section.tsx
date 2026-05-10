"use client";

import React, { useState } from "react";

export function AboutCoachingSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about-coaching" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header with Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-8 flex w-full items-center justify-between"
        >
          <h2 className="text-3xl font-bold text-[#3E5F44] sm:text-4xl">
            About Coaching
          </h2>
          <svg
            className={`h-6 w-6 text-[#3E5F44] transition-transform duration-200 ${
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
                Executive coaching is for leaders who want to lead with more clarity, confidence, and impact. It's not therapy, consulting, or cheerleading—it's a focused partnership.
              </p>
              <p>
                Together, we work on the real tensions you're navigating: making a pivotal decision, stepping into a bigger role, or building the presence and direction you want.
              </p>
              <p className="font-semibold text-[#3E5F44]">
                What makes a good coaching relationship?
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>You're ready to examine your own thinking and behavior.</li>
                <li>You want a thought partner who isn't invested in a specific outcome.</li>
                <li>You're willing to be challenged and to do the work between sessions.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
