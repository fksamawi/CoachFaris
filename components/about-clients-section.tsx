"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: "who",
    label: "Who I work with",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-[#3E5F44]">The &quot;unicorn leader&quot;</p>
        <p className="text-[#272727] opacity-85 leading-relaxed">
          High performers who have never fit neatly into one box — and are tired of twisting themselves to match titles.
        </p>
        <p className="font-medium text-[#3E5F44]">You might be...</p>
        <ul className="list-disc space-y-2 pl-5 text-[#272727] opacity-85 leading-loose">
          <li>Stepping into your first executive or regional role</li>
          <li>Questioning whether to double down or pivot</li>
          <li>Wrestling with identity outside your job title</li>
        </ul>
      </div>
    ),
  },
  {
    id: "what",
    label: "What we work on",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-[#3E5F44]">What we focus on</p>
        <ul className="list-disc space-y-2 pl-5 text-[#272727] opacity-85 leading-loose">
          <li>Making a clear, grounded decision about a next role</li>
          <li>Redefining success so it aligns with your actual values</li>
          <li>Building an operating model that fits who you actually are</li>
        </ul>
      </div>
    ),
  },
  {
    id: "approach",
    label: "Frameworks & approach",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-[#3E5F44]">How I work</p>
        <p className="text-[#272727] opacity-85 leading-relaxed">
          Every engagement starts with deep listening and honest conversation — not a pre-packaged programme. I&apos;m direct but not harsh, pragmatic but not cynical. We focus on the few decisive moves that move the needle.
        </p>
      </div>
    ),
  },
];

export function AboutClientsSection() {
  const [activeTab, setActiveTab] = useState("who");
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about-clients" className="bg-[#F5F2EA] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-medium text-[#3E5F44] sm:text-4xl">
          About My Clients
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
