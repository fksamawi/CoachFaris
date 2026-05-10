"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-[#3E5F44]">
            CoachFaris
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 sm:flex">
          <a href="#about-clients" className="text-sm font-medium text-[#272727] hover:text-[#3E5F44]">
            About My Clients
          </a>
          <a href="#about-coaching" className="text-sm font-medium text-[#272727] hover:text-[#3E5F44]">
            About Coaching
          </a>
          <a href="#about-me" className="text-sm font-medium text-[#272727] hover:text-[#3E5F44]">
            About Me
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <a
            href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-[#3E5F44] px-6 py-2 text-sm font-semibold text-[#DDD6B9] transition-all duration-200 hover:bg-[#5c7a72]"
          >
            Book a Clarity Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-[#3E5F44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#D4AA7D] bg-white px-4 py-4 sm:hidden">
          <div className="space-y-3">
            <a href="#about-clients" className="block text-sm font-medium text-[#272727] hover:text-[#3E5F44]">
              About My Clients
            </a>
            <a href="#about-coaching" className="block text-sm font-medium text-[#272727] hover:text-[#3E5F44]">
              About Coaching
            </a>
            <a href="#about-me" className="block text-sm font-medium text-[#272727] hover:text-[#3E5F44]">
              About Me
            </a>
            <a
              href="https://calendar.app.google/82cuX3WRaRWwDAdu6"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-[#3E5F44] px-6 py-2 text-center text-sm font-semibold text-[#DDD6B9] transition-all duration-200 hover:bg-[#5c7a72]"
            >
              Book a Clarity Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
