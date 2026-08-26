"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import ForCandidates from "@/components/ForCandidates";
import ForRecruiters from "@/components/ForRecruiters";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <ForCandidates />
        <ForRecruiters />
        <Pricing onContactSales={() => setContactOpen(true)} />
        <CTASection />
        <ContactSection onContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <FeedbackWidget />
    </>
  );
}
