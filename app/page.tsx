"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionSection from "@/components/AccordionSection";
import ContentBlock from "@/components/ContentBlock";

// ── Social Icons ────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <line x1="7" y1="11" x2="7" y2="17" />
      <circle cx="7" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
      <line x1="11" y1="11" x2="11" y2="17" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor">
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.11 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.6 32.788 27.994 19.882 44.467 13.224 67.517 13.01 96.04l-.01.36.01.36c.214 28.521 6.872 51.572 19.778 68.043C47.292 182.401 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.944 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.113 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z"/>
    </svg>
  );
}

// ── Nav ──────────────────────────────────────────────────────────────────────

function Nav({ onNavClick }: { onNavClick: (section: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About My Clients", id: "clients" },
    { label: "About Coaching",   id: "coaching" },
    { label: "About Me",         id: "me" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "0.5px solid rgba(62,95,68,0.12)",
        padding: "0 var(--section-px)",
      }}
    >
      {/* Desktop row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.0625rem",
            fontWeight: 500,
            color: "var(--hunter-green)",
          }}
        >
          CoachFaris
        </span>

        {/* Desktop links */}
        <div
          className="nav-desktop-links"
          style={{ display: "flex", gap: "2rem" }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavClick(l.id)}
              style={{
                background: "none",
                border: "none",
                fontSize: "0.8125rem",
                color: "var(--hunter-green)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                cursor: "pointer",
                padding: "0.25rem 0",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side: hamburger only */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              color: "var(--hunter-green)",
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            borderTop: "0.5px solid rgba(62,95,68,0.12)",
            paddingBottom: "1rem",
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                onNavClick(l.id);
                setMenuOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "0.75rem 0",
                fontSize: "0.9375rem",
                color: "var(--hunter-green)",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
              }}
            >
              {l.label}
            </button>
          ))}
          {/* CTA in mobile menu */}
          <a
            href="https://clarity.coachfaris.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{ marginTop: "0.5rem", display: "inline-block" }}
          >
            Book a Clarity Session
          </a>
        </div>
      )}

      {/* Responsive styles injected */}
      <style>{`
        @media (max-width: 680px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        background: "var(--sand-dune)",
        padding: "4rem var(--section-px) 3.5rem",
        textAlign: "center",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          margin: "0 auto 1.5rem",
          overflow: "hidden",
          border: "3px solid var(--hunter-green)",
        }}
      >
        <Image
          src="/CoachFaris.jpg"
          alt="Faris Samawi — Executive leadership coach"
          width={96}
          height={96}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
        />
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          fontWeight: 500,
          color: "var(--hunter-green)",
          maxWidth: 520,
          margin: "0 auto 1rem",
          lineHeight: 1.2,
        }}
      >
        Strategic clarity for leaders at a crossroads
      </h1>

      <p
        style={{
          fontSize: "0.9375rem",
          color: "var(--shadow-grey)",
          maxWidth: 440,
          margin: "0 auto 1.875rem",
          lineHeight: 1.75,
          opacity: 0.85,
        }}
      >
        I work with thoughtful leaders and professionals navigating transitions
        in their career, direction, or identity — to move forward with intention.
      </p>

      <a
        href="https://clarity.coachfaris.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta"
      >
        Book a Clarity Session
      </a>

      <p
        className="text-muted"
        style={{ marginTop: "0.75rem", color: "var(--shadow-grey)", opacity: 0.5 }}
      >
        30 minute call. No obligation.
      </p>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        background: "var(--shadow-grey)",
        padding: "2rem var(--section-px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      {/* Social icons — centered */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a
          href="https://www.linkedin.com/in/fsamawi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: "var(--sand-dune)", opacity: 0.75, display: "flex", transition: "opacity 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/faris.samawi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: "var(--sand-dune)", opacity: 0.75, display: "flex", transition: "opacity 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.threads.com/@faris.samawi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Threads"
          style={{ color: "var(--sand-dune)", opacity: 0.75, display: "flex", transition: "opacity 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
        >
          <ThreadsIcon />
        </a>
      </div>

      {/* Tagline + copyright — centered */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "var(--sand-dune)",
            marginBottom: "0.25rem",
          }}
        >
          Connect. Commit. Create.
        </p>
        <span
          style={{
            fontSize: "0.6875rem",
            color: "var(--sand-dune)",
            opacity: 0.4,
            letterSpacing: "0.03em",
          }}
        >
          © 2026 CoachFaris. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

// ── Tab Content Helpers ───────────────────────────────────────────────────────

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "0.25rem" }}>{item}</li>
      ))}
    </ul>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  function toggleSection(id: string) {
    setOpenSection((prev) => (prev === id ? null : id));
  }

  function handleNavClick(id: string) {
    setOpenSection(id);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  // ── About My Clients tabs ──
  const clientsTabs = [
    {
      id: "who",
      label: "Who I work with",
      content: (
        <>
          <ContentBlock heading='The "unicorn leader"'>
            <p>
              High performers who have never fit neatly into one box — and are
              tired of twisting themselves to match titles.
            </p>
          </ContentBlock>
          <ContentBlock heading="You might be...">
            <List items={[
              "Stepping into your first executive or regional role",
              "Questioning whether to double down or pivot",
              "Wrestling with identity outside your job title",
              "Sensing that something important has shifted — inside you, or around you",
            ]} />
          </ContentBlock>
        </>
      ),
    },
    {
      id: "what",
      label: "What we work on",
      content: (
        <ContentBlock heading="What we focus on">
          <List items={[
            "Making a clear, grounded decision about a next role",
            "Redefining success so it aligns with your actual values",
            "Building the operating model that fits who you actually are",
          ]} />
        </ContentBlock>
      ),
    },
    {
      id: "approach",
      label: "Frameworks & approach",
      content: (
        <ContentBlock heading="How I work">
          <p>
            Every engagement starts with deep listening and honest conversation —
            not a pre-packaged programme. I&apos;m direct but not harsh, pragmatic
            but not cynical. We focus on the few decisive moves that move the
            needle.
          </p>
        </ContentBlock>
      ),
    },
  ];

  // ── About Coaching tabs ──
  const coachingTabs = [
    {
      id: "what",
      label: "What is coaching?",
      content: (
        <ContentBlock heading="Coaching vs consulting vs therapy">
          <p>
            Coaching is forward-focused. It doesn&apos;t diagnose or prescribe — it
            creates the conditions for you to think more clearly, decide more
            deliberately, and act more intentionally. A good coach asks the
            questions you haven&apos;t thought to ask yourself.
          </p>
        </ContentBlock>
      ),
    },
    {
      id: "forme",
      label: "Is it for me?",
      content: (
        <ContentBlock heading="A good fit if...">
          <List items={[
            "You're at a genuine crossroads and want clarity",
            "You're not looking to be told what to do — you want to think it through",
            "You're willing to be honest about what's really going on",
            "You want a thought partner, not a cheerleader",
          ]} />
        </ContentBlock>
      ),
    },
    {
      id: "expect",
      label: "What to expect",
      content: (
        <ContentBlock heading="The process">
          <p>
            We start with a 30-minute Clarity Session — no charge, no obligation.
            A focused conversation on where you are now and what&apos;s at stake. From
            there, engagements are structured around your specific situation, not a
            fixed curriculum.
          </p>
        </ContentBlock>
      ),
    },
  ];

  // ── About Me tabs ──
  const meTabs = [
    {
      id: "bio",
      label: "Bio",
      content: (
        <ContentBlock heading="Background" variant="dark">
          <p>
            With over 15 years of experience across Europe and the Middle East,
            I&apos;ve worked across the HR value chain and executive development. I
            bring a mix of strategic thinking, psychological insight, and regional
            nuance to every engagement.
          </p>
        </ContentBlock>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      content: (
        <ContentBlock heading="What clients say" variant="dark">
          <blockquote
            style={{
              borderLeft: "2px solid var(--sandy-clay)",
              paddingLeft: "1rem",
              marginBottom: "1rem",
              fontStyle: "italic",
              fontSize: "0.875rem",
              color: "var(--sand-dune)",
              opacity: 0.9,
            }}
          >
            <p>&ldquo;Working with Faris gave me the clarity I needed to make a decision I&apos;d been avoiding for two years.&rdquo;</p>
            <cite
              style={{
                display: "block",
                marginTop: "0.4rem",
                fontStyle: "normal",
                fontSize: "0.75rem",
                color: "var(--sandy-clay)",
              }}
            >
              — Regional Director, Financial Services
            </cite>
          </blockquote>
          <blockquote
            style={{
              borderLeft: "2px solid var(--sandy-clay)",
              paddingLeft: "1rem",
              fontStyle: "italic",
              fontSize: "0.875rem",
              color: "var(--sand-dune)",
              opacity: 0.9,
            }}
          >
            <p>&ldquo;Direct, thoughtful, and genuinely invested in getting it right — not just getting through the session.&rdquo;</p>
            <cite
              style={{
                display: "block",
                marginTop: "0.4rem",
                fontStyle: "normal",
                fontSize: "0.75rem",
                color: "var(--sandy-clay)",
              }}
            >
              — Chief People Officer, Technology
            </cite>
          </blockquote>
        </ContentBlock>
      ),
    },
    {
      id: "start",
      label: "Getting started",
      content: (
        <ContentBlock heading="Ready to begin?" variant="dark">
          <p style={{ marginBottom: "1.25rem" }}>
            We begin with a 30-minute Clarity Session — a focused conversation on
            where you are now and what&apos;s at stake. No obligation.
          </p>
          <a
            href="https://clarity.coachfaris.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Book a Clarity Session
          </a>
        </ContentBlock>
      ),
    },
  ];

  return (
    <>
      <Nav onNavClick={handleNavClick} />
      <main>
        <Hero />

        <AccordionSection
          id="clients"
          title="About My Clients"
          tabs={clientsTabs}
          variant="light"
          isOpen={openSection === "clients"}
          onToggle={() => toggleSection("clients")}
        />

        <AccordionSection
          id="coaching"
          title="About Coaching"
          tabs={coachingTabs}
          variant="light"
          isOpen={openSection === "coaching"}
          onToggle={() => toggleSection("coaching")}
        />

        <AccordionSection
          id="me"
          title="About Me"
          tabs={meTabs}
          variant="dark"
          isOpen={openSection === "me"}
          onToggle={() => toggleSection("me")}
        />
      </main>
      <Footer />
    </>
  );
}
