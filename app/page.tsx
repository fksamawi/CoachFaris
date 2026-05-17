import Image from "next/image";
import { getSiteContent, getAboutClients, getAboutCoaching, getAboutMe } from "@/lib/sanity";
import PageClient from "@/components/PageClient";

const BOOKING_URL = "https://clarity.coachfaris.com";

// ── Fallback content (shown until Sanity docs are populated) ─────────────────

const FALLBACK = {
  site: {
    heroHeadline: "Strategic clarity for leaders at a crossroads",
    heroSubtext:
      "I work with thoughtful leaders and professionals navigating transitions in their career, direction, or identity — to move forward with intention.",
    footerTagline: "Connect. Commit. Create.",
  },
  clients: {
    whoHeading: 'The "unicorn leader"',
    whoBody:
      "High performers who have never fit neatly into one box — and are tired of twisting themselves to match titles.",
    whoList: [
      "Stepping into your first executive or regional role",
      "Questioning whether to double down or pivot",
      "Wrestling with identity outside your job title",
      "Sensing that something important has shifted — inside you, or around you",
    ],
    whatList: [
      "Making a clear, grounded decision about a next role",
      "Redefining success so it aligns with your actual values",
      "Building the operating model that fits who you actually are",
    ],
    approachBody:
      "Every engagement starts with deep listening and honest conversation — not a pre-packaged programme. I'm direct but not harsh, pragmatic but not cynical. We focus on the few decisive moves that move the needle.",
  },
  coaching: {
    whatBody:
      "Coaching is forward-focused. It doesn't diagnose or prescribe — it creates the conditions for you to think more clearly, decide more deliberately, and act more intentionally. A good coach asks the questions you haven't thought to ask yourself.",
    forMeList: [
      "You're at a genuine crossroads and want clarity",
      "You're not looking to be told what to do — you want to think it through",
      "You're willing to be honest about what's really going on",
      "You want a thought partner, not a cheerleader",
    ],
    expectBody:
      "We start with a 30-minute Clarity Session — no charge, no obligation. A focused conversation on where you are now and what's at stake. From there, engagements are structured around your specific situation, not a fixed curriculum.",
  },
  me: {
    bioBody:
      "With over 15 years of experience across Europe and the Middle East, I've worked across the HR value chain and executive development. I bring a mix of strategic thinking, psychological insight, and regional nuance to every engagement.",
    testimonials: [
      {
        quote:
          "Working with Faris gave me the clarity I needed to make a decision I'd been avoiding for two years.",
        author: "Regional Director, Financial Services",
      },
      {
        quote:
          "Direct, thoughtful, and genuinely invested in getting it right — not just getting through the session.",
        author: "Chief People Officer, Technology",
      },
    ],
    gettingStartedBody:
      "We begin with a 30-minute Clarity Session — a focused conversation on where you are now and what's at stake. No obligation.",
  },
};

// ── Static server icons ──────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor" aria-hidden="true">
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.11 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.6 32.788 27.994 19.882 44.467 13.224 67.517 13.01 96.04l-.01.36.01.36c.214 28.521 6.872 51.572 19.778 68.043C47.292 182.401 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.944 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.113 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z"/>
    </svg>
  );
}

// ── Structured data for SEO ──────────────────────────────────────────────────

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.coachfaris.com/#faris",
        name: "Faris Samawi",
        jobTitle: "Executive Leadership Coach",
        url: "https://www.coachfaris.com",
        sameAs: [
          "https://www.linkedin.com/in/fsamawi",
          "https://www.instagram.com/faris.samawi",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.coachfaris.com/#coaching",
        name: "Executive Leadership Coaching",
        description:
          "Strategic clarity coaching for leaders navigating career and identity transitions.",
        provider: { "@id": "https://www.coachfaris.com/#faris" },
        url: "https://www.coachfaris.com",
        areaServed: ["Europe", "Middle East"],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Page (server component — fetches from Sanity) ────────────────────────────

export default async function Home() {
  // Fetch all content in parallel; fall back to hardcoded if Sanity returns null
  const [rawSite, rawClients, rawCoaching, rawMe] = await Promise.all([
    getSiteContent().catch(() => null),
    getAboutClients().catch(() => null),
    getAboutCoaching().catch(() => null),
    getAboutMe().catch(() => null),
  ]);

  const site     = rawSite     ?? FALLBACK.site;
  const clients  = rawClients  ?? FALLBACK.clients;
  const coaching = rawCoaching ?? FALLBACK.coaching;
  const me       = rawMe       ?? FALLBACK.me;

  return (
    <>
      <StructuredData />
      <PageClient
        site={site}
        clients={clients}
        coaching={coaching}
        me={me}
        bookingUrl={BOOKING_URL}
        LinkedInIcon={<LinkedInIcon />}
        InstagramIcon={<InstagramIcon />}
        ThreadsIcon={<ThreadsIcon />}
      />
    </>
  );
}
