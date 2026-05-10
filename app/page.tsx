import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutClientsSection } from "@/components/about-clients-section";
import { AboutCoachingSection } from "@/components/about-coaching-section";
import { AboutMeSection } from "@/components/about-me-section";
import { SocialFooter } from "@/components/social-footer";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <Header />
      <HeroSection />
      <AboutClientsSection />
      <AboutCoachingSection />
      <AboutMeSection />
      <SocialFooter />
    </div>
  );
}
