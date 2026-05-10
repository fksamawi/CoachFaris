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
              color: "#DDD6B9",
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
              color: "rgba(221,214,185,0.4)",
              letterSpacing: "0.06em",
            }}
          >
            © 2026 CoachFaris. All rights reserved.
          </span>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-5">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fsamawi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#DDD6B9"
            >
              <rect x="2" y="2" width="20" height="20" rx="4" />
              <rect x="6.5" y="10" width="2.5" height="8" />
              <circle cx="7.75" cy="7" r="1.25" />
              <path d="M12 10h2.3v1.1c.3-.6 1.1-1.3 2.4-1.3 2.5 0 3.3 1.6 3.3 3.8V18h-2.5v-3.7c0-1-.2-2-1.5-2-1.3 0-1.7 1-1.7 2V18H12v-8z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/faris.samawi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#DDD6B9"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17" cy="7" r="1.2" />
            </svg>
          </a>

          {/* Threads */}
          <a
            href="https://www.threads.com/@faris.samawi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#DDD6B9"
            >
              <path d="M12 2C7 2 3 6 3 11c0 2 .6 3.8 1.6 5.3L3 22h4l1.2-4.8c1.2.5 2.5.8 3.8.8 5 0 9-4 9-9s-4-9-9-9zm0 14c-3 0-5-2.5-5-5s2-5 5-5 5 2.5 5 5-2 5-5 5z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
