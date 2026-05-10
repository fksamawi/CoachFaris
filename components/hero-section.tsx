import { ProfileAvatar } from "@/components/profile-avatar";

export function HeroSection() {
  return (
    <section className="bg-[#DDD6B9] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Avatar */}
        <div className="mb-8">
          <ProfileAvatar />
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold text-[#3E5F44] sm:text-5xl">
          Strategic clarity for leaders at a crossroads
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg text-[#272727]">
          I work with thoughtful leaders navigating transitions in career, direction, or identity — to move forward with intention.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-[#3E5F44] px-8 py-3 text-base font-semibold text-[#DDD6B9] transition-all duration-200 hover:bg-[#5c7a72]"
          >
            Book a Clarity Session
          </a>
          <p className="text-xs uppercase tracking-wider text-[#5c7a72]">
            30 minute call. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
