"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: "who",
    label: "Who I work with",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-[#3E5F44]">The "unicorn leader"</p>
        <p className="text-[#272727]">
          High performers who have never fit neatly into one box — and are tired of twisting themselves to match titles.
        </p>
        <p className="font-semibold text-[#3E5F44]">You might be:</p>
        <ul className="list-disc space-y-2 pl-5 text-[#272727]">
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
        <p className="text-[#272727]">
          Clients come to me when something important has shifted—inside them, around them, or both—and the old way of operating no longer works.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[#272727]">
          <li>Making a clear, grounded decision about a next role.</li>
          <li>Redefining success so it aligns with your actual values.</li>
          <li>Building the confidence to lead authentically.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "approach",
    label: "Frameworks & approach",
    content: (
      <div className="space-y-4">
        <p className="text-[#272727]">
          Every engagement starts with deep listening and honest conversation—not a pre-packaged programme.
        </p>
        <p className="text-[#272727]">
          I'm direct but not harsh, pragmatic but not cynical. We focus on the few decisive moves that move the needle.
        </p>
      </div>
    ),
  },
];

export function AboutClientsSection() {
  const [activeTab, setActiveTab] = useState("who");
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about-clients" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-bold text-[#3E5F44] sm:text-4xl">
          About My Clients
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 border-b border-[#D4AA7D] pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-b-2 border-[#3E5F44] text-[#3E5F44]"
                  : "text-[#5c7a72] hover:text-[#3E5F44]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-lg border border-[#D4AA7D] bg-[#F5F2EA] p-6 sm:p-8">
          {activeContent && activeContent.content}
        </div>
      </div>
    </section>
  );
}
