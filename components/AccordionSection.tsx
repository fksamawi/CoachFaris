"use client";

import { useState } from "react";

interface SubTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AccordionSectionProps {
  id: string;
  title: string;
  tabs: SubTab[];
  variant?: "light" | "dark";
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionSection({
  id,
  title,
  tabs,
  variant = "light",
  isOpen,
  onToggle,
}: AccordionSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const isDark = variant === "dark";

  return (
    <section
      id={id}
      style={{
        borderTop: "0.5px solid rgba(62, 95, 68, 0.15)",
        background: isDark ? "var(--hunter-green)" : "var(--surface)",
      }}
    >
      {/* ── Accordion Header ── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-body`}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--section-py) var(--section-px)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
            fontWeight: 500,
            color: isDark ? "var(--sand-dune)" : "var(--hunter-green)",
            margin: 0,
          }}
        >
          {title}
        </h2>

        {/* Chevron */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? "var(--sandy-clay)" : "var(--hunter-green)"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* ── Accordion Body ── */}
      <div
        id={`${id}-body`}
        style={{
          display: isOpen ? "block" : "none",
          padding: "0 var(--section-px) 2rem",
        }}
      >
        {/* Sub-tab pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            marginBottom: "1.5rem",
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "0.4rem 1.1rem",
                  borderRadius: "2rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  border: isDark
                    ? `1.5px solid ${isActive ? "var(--sandy-clay)" : "rgba(212,170,125,0.5)"}`
                    : `1.5px solid ${isActive ? "var(--teal)" : "var(--teal-border)"}`,
                  background: isDark
                    ? isActive ? "var(--sandy-clay)" : "transparent"
                    : isActive ? "var(--teal)" : "transparent",
                  color: isDark
                    ? isActive ? "var(--shadow-grey)" : "var(--sandy-clay)"
                    : isActive ? "#fff" : "var(--teal)",
                  transition: "all 0.15s ease",
                  // Underline on active tab
                  borderBottom: isActive
                    ? isDark
                      ? "2.5px solid var(--sandy-clay)"
                      : "2.5px solid var(--teal)"
                    : undefined,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active tab content */}
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <div key={tab.id}>{tab.content}</div>
          ) : null
        )}
      </div>
    </section>
  );
}
