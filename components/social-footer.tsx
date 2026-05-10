export function SocialFooter() {
  return (
    <footer style={{ backgroundColor: "#272727" }}>
      {/* Main footer row */}
      <div className="flex flex-col items-center justify-between gap-6 px-9 py-7 sm:flex-row">
        
        {/* Left: tagline + copyright */}
        <div className="text-center sm:text-left">
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#DDD6B9", // Sand Dune for clear legibility
              marginBottom: "4px",
            }}
          >
            Connect. Commit. Create.
          </p>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.688rem",
              fontWeight: 300,
              color: "rgba(221,214,185,0.4)", // Low opacity Sand Dune for subtle secondary text
              letterSpacing: "0.06em",
            }}
          >
            © 2026 CoachFaris. All rights reserved.
          </span>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-6">
          
          {/* LinkedIn - Outline Style */}
          <a
            href="https://www.linkedin.com/in/fsamawi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DDD6B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Instagram - Outline Style */}
          <a
            href="https://www.instagram.com/faris.samawi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DDD6B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Threads - Minimalist Path */}
          <a
            href="https://www.threads.net/@faris.samawi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DDD6B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.25 10c0-4.5-3-7.25-7.25-7.25S4.75 5.5 4.75 10c0 1.75.5 3.5 1.5 4.75C8 17 10 18.25 12 18.25c1.25 0 2.5-.25 3.5-.75l.5-.25c.75-.5 1.25-1.25 1.5-2 .5-1.25.5-2.75-.25-4a2.75 2.75 0 0 0-4.5 0 2.5 2.5 0 0 0 0 3c.5.75 1.25 1 2 1s1.25-.25 1.75-.75" />
              <path d="M12 15.25c-2.5 0-4-1.5-4-3.5s1.5-3.5 4-3.5 4 1.5 4 3.5-1.5 3.5-4 3.5z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
