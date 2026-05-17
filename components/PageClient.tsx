"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionSection from "./AccordionSection";
import ContentBlock from "./ContentBlock";

interface PageClientProps {
  site: { heroHeadline: string; heroSubtext: string; footerTagline: string };
  clients: { whoHeading: string; whoBody: string; whoList: string[]; whatList: string[]; approachBody: string };
  coaching: { whatBody: string; forMeList: string[]; expectBody: string };
  me: { bioBody: string; clientOrgs: string[]; gettingStartedBody: string };
  bookingUrl: string;
  LinkedInIcon: React.ReactNode;
  InstagramIcon: React.ReactNode;
  ThreadsIcon: React.ReactNode;
}

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "0.25rem" }}>{item}</li>
      ))}
    </ul>
  );
}

export default function PageClient({
  site,
  clients,
  coaching,
  me,
  bookingUrl,
  LinkedInIcon,
  InstagramIcon,
  ThreadsIcon,
}: PageClientProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleSection(id: string) {
    setOpenSection((prev) => (prev === id ? null : id));
  }

  function handleNavClick(id: string) {
    setOpenSection(id);
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  const navLinks = [
    { label: "About My Clients", id: "clients" },
    { label: "About Coaching", id: "coaching" },
    { label: "About Me", id: "me" },
  ];

  // ── Tabs ──────────────────────────────────────────────────────────────────

  const clientsTabs = [
    {
      id: "who",
      label: "Who I work with",
      content: (
        <>
          <ContentBlock heading={clients.whoHeading}>
            <p>{clients.whoBody}</p>
          </ContentBlock>
          <ContentBlock heading="You might be...">
            <List items={clients.whoList} />
          </ContentBlock>
        </>
      ),
    },
    {
      id: "what",
      label: "What we work on",
      content: (
        <ContentBlock heading="What we focus on">
          <List items={clients.whatList} />
        </ContentBlock>
      ),
    },
    {
      id: "approach",
      label: "Frameworks & approach",
      content: (
        <ContentBlock heading="How I work">
          <p>{clients.approachBody}</p>
        </ContentBlock>
      ),
    },
  ];

  const coachingTabs = [
    {
      id: "what",
      label: "What is coaching?",
      content: (
        <ContentBlock heading="What is Coaching?">
          <p>{coaching.whatBody}</p>
        </ContentBlock>
      ),
    },
    {
      id: "forme",
      label: "Is it for me?",
      content: (
        <ContentBlock heading="You are a good fit if...">
          <List items={coaching.forMeList} />
        </ContentBlock>
      ),
    },
    {
      id: "expect",
      label: "What to expect",
      content: (
        <ContentBlock heading="The process">
          <p>{coaching.expectBody}</p>
        </ContentBlock>
      ),
    },
  ];

  const meTabs = [
    {
      id: "bio",
      label: "Bio",
      content: (
        <ContentBlock heading="Background" variant="dark">
          <p>{me.bioBody}</p>
        </ContentBlock>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      content: (
        <ContentBlock heading="Leaders I&apos;ve worked with" variant="dark">
          <p style={{ fontSize: "0.875rem", color: "var(--sand-dune)", opacity: 0.7, marginBottom: "1.25rem" }}>
            I&apos;ve worked with leaders from organisations including:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {me.clientOrgs.map((org, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--sand-dune)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                {org}
              </span>
            ))}
          </div>
        </ContentBlock>
      ),
    },
    {
      id: "start",
      label: "Getting started",
      content: (
        <ContentBlock heading="Ready to begin?" variant="dark">
          <p style={{ marginBottom: "1.25rem" }}>{me.gettingStartedBody}</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta">
            Book a Clarity Session
          </a>
          <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", opacity: 0.6, color: "var(--sand-dune)" }}>
            30 minutes. No obligation.
          </p>
        </ContentBlock>
      ),
    },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Nav */}
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
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

          <div className="nav-desktop-links" style={{ display: "flex", gap: "2rem" }}>
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNavClick(l.id)}
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

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta nav-cta"
              style={{ fontSize: "0.8125rem", padding: "0.5rem 1.25rem" }}
            >
              Book a Clarity Session
            </a>
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="nav-mobile-menu"
            style={{ borderTop: "0.5px solid rgba(62,95,68,0.12)", paddingBottom: "1rem" }}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNavClick(l.id)}
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
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              style={{ marginTop: "0.5rem", display: "inline-block" }}
            >
              Book a Clarity Session
            </a>
          </div>
        )}

        <style>{`
          @media (max-width: 680px) {
            .nav-desktop-links { display: none !important; }
            .nav-cta { display: none !important; }
            .nav-hamburger { display: block !important; }
          }
        `}</style>
      </nav>

      {/* Hero */}
      <main>
        <section
          style={{
            background: "var(--sand-dune)",
            padding: "4rem var(--section-px) 3.5rem",
            textAlign: "center",
          }}
        >
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
            {site.heroHeadline}
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
            {site.heroSubtext}
          </p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta">
            Book a Clarity Session
          </a>
          <p
            className="text-muted"
            style={{ marginTop: "0.75rem", color: "var(--shadow-grey)", opacity: 0.5 }}
          >
            30 minute call. No obligation.
          </p>
        </section>

        {/* Accordion sections */}
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

      {/* Footer */}
      <footer
        style={{
          background: "var(--shadow-grey)",
          padding: "1.75rem var(--section-px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {[
            { href: "https://www.linkedin.com/in/fsamawi", label: "LinkedIn", icon: LinkedInIcon },
            { href: "https://www.instagram.com/faris.samawi", label: "Instagram", icon: InstagramIcon },
            { href: "https://www.threads.net/@faris.samawi", label: "Threads", icon: ThreadsIcon },
          ].map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "var(--sand-dune)", opacity: 0.75, display: "flex", transition: "opacity 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
            >
              {icon}
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--sand-dune)",
              marginBottom: "0.2rem",
            }}
          >
            {site.footerTagline}
          </p>
          <span
            style={{
              fontSize: "0.6875rem",
              color: "var(--sand-dune)",
              opacity: 0.4,
              letterSpacing: "0.03em",
            }}
          >
            © {new Date().getFullYear()} CoachFaris. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
