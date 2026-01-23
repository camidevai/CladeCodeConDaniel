"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import VideoPreview from "@/components/VideoPreview";
import Outcomes from "@/components/Outcomes";
import TargetAudience from "@/components/TargetAudience";
import Modules from "@/components/Modules";
import FinalProject from "@/components/FinalProject";
import Instructors from "@/components/Instructors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import EmailModal from "@/components/EmailModal";

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onOpenEmailModal={() => setIsEmailModalOpen(true)} />
      <VideoPreview />
      <Outcomes />
      <TargetAudience />
      <Modules />
      <FinalProject />
      <Instructors />
      <FAQ />
      <Footer onOpenEmailModal={() => setIsEmailModalOpen(true)} />
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </main>
  );
}

