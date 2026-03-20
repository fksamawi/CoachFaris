"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from "react";

interface NavLinksProps {
  openId: string | null;
  onToggle: Dispatch<SetStateAction<string | null>>;
}

const accordionSections = [
  {
    id: "who",
    label: "Who I work with",
    content: (
      <div className="space-y-4 border border-gray-400 rounded-2xl p-6">
        <p>
          I partner with "unicorn leaders"—high performers who have never fit neatly
          into one box and are tired of twisting themselves to match titles, org charts,
          or other people's expectations.
        </p>
        <p className="text-muted-foreground">You might be:</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Stepping into your first executive or regional role and feeling the weight of visibility.</li>
          <li>Questioning whether to double down where you are or make a significant career pivot.</li>
          <li>Wrestling with who you are outside your job title, especially after rapid progression or a major life change.</li>
        </ul>
        <p>
          You're capable and self-aware. You're here because you know you can't think
          your way out of this one alone.
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
          Clients come to me when something important has shifted—inside them, around them,
          or both—and the old way of operating no longer works.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Making a clear, grounded decision about a next role, industry, or direction.</li>
          <li>Redefining success so it aligns with your actual values, not inherited ones.</li>
          <li>Navigating the first 6–12 months in a bigger role without burning out or losing yourself.</li>
          <li>Untangling identity questions that sit underneath "career strategy" and "work–life balance."</li>
        </ul>
        <p>
          We don't chase generic performance hacks. We focus on the few decisive moves
          that change how you show up, decide, and lead.
        </p>
      </div>
    ),
  },
  {
    id: "approach",
    label: "My approach",
    content: (
      <div className="space-y-4 border border-gray-400 rounded-2xl p-6">
        <p>
          Every engagement starts with deep listening and honest conversation—not a pre‑packaged programme.
        </p>
        <p>Together, we:</p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Surface the real questions beneath your current dilemma—career, identity, leadership, or all three.</li>
          <li>Map the tensions you're holding (ambition vs sustainability, belonging vs originality, security vs freedom).</li>
          <li>Design experiments, not fantasies: concrete steps you can test in your real life and work.</li>
        </ul>
        <p>
          I'm direct but not harsh, pragmatic but not cynical. We'll use structured frameworks where they help,
          and drop them where they don't. No fluff, no motivational theatre—just a thinking partnership focused
          on what actually moves the needle for you.
        </p>
        <p className="text-sm text-muted-foreground">
          You won't find testimonials here. Coaching is private, and I don't trade clients' stories for persuasion.
          If you need marketing quotes to feel safe, we're probably not a fit.
        </p>
      </div>
    ),
  },
];

const aboutContent = (
  <>
    <p>
      With over 15 years of experience working with senior leaders and high-potentials
      across Europe and the Middle East, I've worked across the HR value chain,
      organisational development, and executive development for multinationals.
    </p>
    <p>
      I've seen how smart, capable people get trapped by roles, systems, and expectations
      that no longer fit. This practice exists so you have a space to question all of that—
      with someone who understands both the human and political realities of leadership.
    </p>
    <p>
      I bring a mix of strategic thinking, psychological insight, and regional nuance.
      You bring your experience and your current questions. We build the next chapter from there.
    </p>
  </>
);

const gettingStartedContent = (
  <>
    <p>
      We begin with a 30‑minute Clarity Session—a focused conversation on where you are now
      and what's at stake.
    </p>
    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
      <li>Clarify the decision, transition, or tension you're sitting with.</li>
      <li>Identify what's driving it—internally, relationally, and structurally.</li>
      <li>Outline a small number of practical next steps, whether or not we work together.</li>
    </ul>
    <p className="text-sm text-muted-foreground">
      If we both sense a good fit, we'll agree a coaching structure that works for your context.
      If not, you still leave with more perspective than you came in with.
    </p>
  </>
);

export function NavLinks({ openId, onToggle }: NavLinksProps) {
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  useEffect(() => {
    if (openId === null) {
      onToggle("who");
    }
  }, [onToggle, openId]);

  const measureHeights = useCallback(() => {
    const newHeights: Record<string, number> = {};
    for (const section of accordionSections) {
      const el = contentRefs.current[section.id];
      if (el) {
        newHeights[section.id] = el.scrollHeight;
      }
    }
    setHeights(newHeights);
  }, []);

  useEffect(() => {
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [measureHeights, openId]);

  function toggle(id: string) {
    onToggle((prev) => (prev === id ? null : id));
  }

  return (
    <div className="space-y-10">
      <nav aria-label="Main navigation" className="space-y-0">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {accordionSections.map((section) => {
            const isActive = openId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => toggle(section.id)}
                aria-expanded={isActive}
                aria-controls={`panel-${section.id}`}
                className={`text-sm transition-all duration-200 ${
                  isActive
                    ? "font-bold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>

        {accordionSections.map((section) => {
          const isOpen = openId === section.id;
          return (
            <div
              key={section.id}
              id={`panel-${section.id}`}
              role="region"
              aria-labelledby={section.id}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? `${(heights[section.id] ?? 0) + 24}px` : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                ref={(el) => {
                  contentRefs.current[section.id] = el;
                }}
                className="pt-6 text-left text-sm leading-relaxed"
              >
                {section.content}
              </div>
            </div>
          );
        })}
      </nav>

      <section
        aria-label="About me"
        className="mt-6 border-t border-border bg-muted/40 px-4 py-8 text-left sm:px-6"
      >
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          About me
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
          {aboutContent}
        </div>
      </section>

      <section
        aria-label="Getting started"
        className="mt-4 rounded-lg bg-muted px-4 py-8 text-left sm:px-6"
      >
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Getting started
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
          {gettingStartedContent}
        </div>
      </section>

      <div className="mt-4 flex flex-col items-center gap-2">
        <a
          href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
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