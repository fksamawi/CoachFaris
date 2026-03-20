"use client";

import { useState } from "react";
import { ProfileAvatar } from "@/components/profile-avatar";
import { NavLinks } from "@/components/nav-links";
import { SocialFooter } from "@/components/social-footer";

export default function Page() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md rounded-3xl bg-card px-8 py-12 shadow-[0_4px_60px_-12px_rgba(0,0,0,0.08)]">
        {/* Avatar */}
        <ProfileAvatar />

        {/* Name & Title */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance">
            Strategic clarity for leaders at a crossroads
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            I work with thoughtful leaders and professionals navigating transitions in their career, direction, or identity to help them move forward with intention.
          </p>
        </div>

        {/* CTA Button Linked to Google Calendar */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:shadow-[0_0_20px_hsl(147,22%,92%)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Book a Clarity Session
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <NavLinks openId={openId} onToggle={setOpenId} />
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px w-12 bg-border" />

        {/* Social Footer */}
        <SocialFooter />
      </div>
    </main>
  );
}