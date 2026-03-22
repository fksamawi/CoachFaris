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
    <footer className="relative overflow-hidden bg-[#5c7a72]">

      {/* Top accent line */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, #2f3c36 0%, #a86443 30%, transparent 75%)",
        }}
      />

      {/* Dark vignette behind image */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "linear-gradient(105deg, rgba(35,47,42,0.5) 0%, transparent 50%)",
        }}
      />

      {/* Main row */}
      <div className="relative z-10 mx-auto flex max-w-5xl items-end">

        {/* Left: photo */}
        <div className="relative shrink-0 pl-10">
          <img
            src="/faris-footer.png"
            alt="Coach Faris"
            className="block h-[280px] w-auto object-contain object-bottom brightness-95 drop-shadow-xl"
          />
          {/* Fade feet into footer */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-12"
            style={{
              background: "linear-gradient(to top, #5c7a72 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Right: content */}
        <div className="flex flex-1 flex-col items-end gap-5 px-12 pb-10 pt-14 text-right">
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

      {/* Bottom bar: copyright only */}
      <div
        className="relative z-10 mx-auto max-w-5xl border-t px-10 py-4 text-right"
        style={{ borderColor: "rgba(240,242,245,0.15)" }}
      >
        <p
          className="text-[rgba(240,242,245,0.55)]"
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
