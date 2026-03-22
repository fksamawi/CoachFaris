function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function SocialFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#5c7a72]">


      {/* Main row */}
      <div className="flex w-full flex-col items-center md:flex-row md:items-end">

        {/* Left: Faris — flush to left edge */}
        <div className="relative shrink-0 self-end">
          <img
            src="/faris-footer.png"
            alt="Coach Faris"
            className="block h-[260px] w-auto object-contain object-bottom md:h-[300px]"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-10"
            style={{
              background: "linear-gradient(to top, #5c7a72 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Right: headline + button */}
        <div className="flex flex-1 flex-col items-center gap-6 px-8 pb-8 pt-6 text-center md:items-end md:px-12 md:pb-10 md:pt-0 md:text-right">
          <h2
            className="text-[#f0f2f5]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Let&rsquo;s connect.
          </h2>

          <a
            href="https://www.linkedin.com/in/fsamawi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#a86443] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#af765a]"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(168,100,67,0.3)",
            }}
            aria-label="Connect on LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright bar — darker teal, full width, no extra padding */}
      <div
        className="w-full px-8 py-3 text-center md:px-12 md:text-right"
        style={{
          backgroundColor: "#3e4c47",
          borderTop: "1px solid rgba(240,242,245,0.1)",
        }}
      >
        <p
          className="text-[rgba(240,242,245,0.6)]"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
          }}
        >
          &copy; 2026 CoachFaris. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
