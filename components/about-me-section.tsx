"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: "bio",
    label: "Bio",
    content: (
      <div className="space-y-3">
        <p className="font-medium" style={{ color: "#D4AA7D" }}>Background</p>
        <p className="leading-relaxed" style={{ color: "#DDD6B9", opacity: 0.9 }}>
          With over 15 years across Europe and the Middle East, I&apos;ve worked across the HR value chain and executive development. I bring a mix of strategic thinking, psychological insight, and regional nuance.
        </p>
      </div>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    content: (
      <div className="space-y-4">
        <p className="font-medium" style={{ color: "#D4AA7D" }}>What clients say</p>
        <blockquote
          className="border-l-2 pl-4"
          style={{ borderColor: "#D4AA7D" }}
        >
          <p className="text-sm italic leading-relaxed" style={{ color: "#DDD6B9", opacity: 0.9 }}>
            &quot;Working with Faris gave me the clarity I needed to make a decision I&apos;d been avoiding for two years.&quot;
          </p>
          <cite className="mt-2 block text-xs not-italic" style={{ color: "#D4AA7D" }}>
            — Regional Director, Financial Services
          </cite>
        </blockquote>
        <blockquote
          className="border-l-2 pl-4"
          style={{ borderColor: "#D4AA7D" }}
        >
          <p className="text-sm italic leading-relaxed" style={{ color: "#DDD6B9", opacity: 0.9 }}>
            &quot;Direct, thoughtful, and genuinely invested in getting it right — not just getting through the session.&quot;
          </p>
          <cite className="mt-2 block text-xs not-italic" style={{ color: "#D4AA7D" }}>
            — Chief People Officer, Technology
          </cite>
        </blockquote>
      </div>
    ),
  },
  {
    id: "start",
    label: "Getting started",
    content: (
      <div className="space-y-4">
        <p className="font-medium" style={{ color: "#D4AA7D" }}>Ready to begin?</p>
        <p className="leading-relaxed" style={{ color: "#DDD6B9", opacity: 0.9 }}>
          We begin with a 30-minute Clarity Session — a focused conversation on where you are now and what&apos;s at stake. No obligation.
        </p>
        <a
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{ backgroundColor: "#D4AA7D", color: "#272727" }}
        >
          Book a Clarity Session
        </a>
      </div>
    ),
  },
];

export function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("bio");
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about-me" className="bg-[#3E5F44] border-t border-[#3E5F44]/15 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-medium sm:text-4xl" style={{ color: "#DDD6B9" }}>
          About Me
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-5 py-1.5 text-sm font-medium transition-all duration-150`}
              style={
                activeTab === tab.id
                  ? { borderColor: "#D4AA7D", backgroundColor: "#D4AA7D", color: "#272727" }
                  : { borderColor: "#D4AA7D", backgroundColor: "transparent", color: "#D4AA7D" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-sm">
          {activeContent && activeContent.content}
        </div>
      </div>
    </section>
  );
}
