"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: "what",
    label: "What is coaching?",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-[#3E5F44]">Coaching vs consulting vs therapy</p>
        <p className="text-[#272727] opacity-85 leading-relaxed">
          Coaching is forward-focused. It doesn&apos;t diagnose or prescribe — it creates the conditions for you to think more clearly, decide more deliberately, and act more intentionally.
        </p>
      </div>
    ),
  },
  {
    id: "forme",
    label: "Is it for me?",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-[#3E5F44]">A good fit if...</p>
        <ul className="list-disc space-y-2 pl-5 text-[#272727] opacity-85 leading-loose">
          <li>You&apos;re at a genuine crossroads and want clarity</li>
          <li>You&apos;re not looking to be told what to do — you want to think it through</li>
          <li>You&apos;re willing to be honest about what&apos;s really going on</li>
        </ul>
      </div>
    ),
  },
  {
    id: "expect",
    label: "What to expect",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-[#3E5F44]">The process</p>
        <p className="text-[#272727] opacity-85 leading-relaxed">
          We start with a 30-minute Clarity Session — no charge, no obligation. From there, engagements are structured around your specific situation, not a fixed curriculum.
        </p>
      </div>
    ),
  },
];

export function AboutCoachingSection() {
  const [activeTab, setActiveTab] = useState("what");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about-coaching" className="bg-[#F5F2EA] border-t border-[#3E5F44]/15 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-medium text-[#3E5F44] sm:text-4xl">
          About Coaching
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-5 py-1.5 text-sm font-medium transition-all duration-150 ${
                activeTab === tab.id
                  ? "border-[#5c7a72] bg-[#5c7a72] text-white"
                  : "border-[#5c7a72] bg-[#F5F2EA] text-[#5c7a72] hover:bg-[#5c7a72] hover:text-white"
              }`}
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
