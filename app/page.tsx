"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Audiences from "@/components/Audiences";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";
// import CrowdfundingWidget from "@/components/CrowdfundingWidget"; // SupportKori widget, disabled for now
import type { Audience } from "@/lib/audience";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [audience, setAudience] = useState<Audience>("candidate");

  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero audience={audience} onAudienceChange={setAudience} />
        <HowItWorks audience={audience} onAudienceChange={setAudience} />
        <Audiences />
        <Pricing />
        <CTASection />
        <ContactSection onContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <div style={{ display: "none" }}>
        <FeedbackWidget />
      </div>
      {/* SupportKori "Buy me a cha!" widget, disabled for now.
      <CrowdfundingWidget />
      */}
    </div>
  );
}
