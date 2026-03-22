export function SocialFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#5c7a72]">
      {/* Container: flex-col for mobile, flex-row for desktop, always centered */}
      <div className="flex w-full flex-col items-center justify-center gap-8 py-12 md:flex-row md:gap-16">
        
        {/* Image Container */}
        <div className="relative flex shrink-0 justify-center">
          <img
            src="/faris-footer.png"
            alt="Coach Faris"
            className="relative z-10 block h-[200px] w-auto object-contain md:h-[300px]"
          />
          {/* Subtle gradient blend for the bottom of the image */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-12"
            style={{
              background: "linear-gradient(to top, #5c7a72 10%, transparent 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className="text-[#f0f2f5]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Let&rsquo;s connect.
          </h2>

          <a
            href="https://www.linkedin.com/in/fsamawi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#a86443] px-8 py-3.5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#af765a]"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
            aria-label="Connect on LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright Footer */}
      <div
        className="w-full py-4 text-center"
        style={{
          backgroundColor: "#3e4c47",
          borderTop: "1px solid rgba(240,242,245,0.05)",
        }}
      >
        <p
          className="text-[rgba(240,242,245,0.5)]"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 300,
            letterSpacing: "0.1em",
          }}
        >
          &copy; 2026 CoachFaris. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
