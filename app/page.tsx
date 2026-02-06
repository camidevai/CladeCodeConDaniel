"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import VideoPreview from "@/components/VideoPreview";
import Outcomes from "@/components/Outcomes";
import TargetAudience from "@/components/TargetAudience";
import Modules from "@/components/Modules";
import FinalProject from "@/components/FinalProject";
import Instructors from "@/components/Instructors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ResourcesModal from "@/components/ResourcesModal";

export default function Home() {
  const [isResourcesModalOpen, setIsResourcesModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onOpenEmailModal={() => setIsResourcesModalOpen(true)} />
      <Countdown />
      <Instructors />
      <VideoPreview />
      <Outcomes />
      <TargetAudience />
      <Modules />
      <FinalProject />
      <FAQ />
      <Footer onOpenEmailModal={() => setIsResourcesModalOpen(true)} />
      <ResourcesModal
        isOpen={isResourcesModalOpen}
        onClose={() => setIsResourcesModalOpen(false)}
      />
    </main>
  );
}

