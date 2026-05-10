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
            &copy; 2026 CoachFaris. All rights reserved.
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
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20260509_214727-ePTfwi5c8lrI6t9dQfG8dYdyzmjbWu.png"
              alt="LinkedIn"
              width={22}
              height={22}
              style={{
                filter:
                  "invert(1) brightness(0.9) drop-shadow(0 0 4px rgba(255,255,255,0.25))",
              }}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/faris.samawi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20260509_214724-4XMi7GcuUJYsvJp73zpkey3EHuT7yK.png"
              alt="Instagram"
              width={22}
              height={22}
              style={{
                filter:
                  "invert(1) brightness(0.9) drop-shadow(0 0 4px rgba(255,255,255,0.25))",
              }}
            />
          </a>

          {/* Threads */}
          <a
            href="https://www.threads.com/@faris.samawi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="transition-opacity duration-200 hover:opacity-100"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20260509_214720-vBDhGYzY54f4KlftHTqTWQl6kIGinA.png"
              alt="Threads"
              width={22}
              height={22}
              style={{
                filter:
                  "invert(1) brightness(0.9) drop-shadow(0 0 4px rgba(255,255,255,0.25))",
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
