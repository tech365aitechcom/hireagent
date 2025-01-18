import React from "react";
import CalendlySection from "../sections/CalendlySectio";
import ComparisonSection from "../sections/ComparisonSection";
import FeaturesShowcase from "../sections/FeaturesShowcase";
import TestimonialsSection from "../sections/TestimonialsSection";
import VideoPlayer from "../sections/VideoPlayer";
import TryAssistant2 from "../sections/TryAssistant2";
import GetStarted from "../sections/GetStarted";

const CalendlyEmbed = () => {
  return (
    <div className="w-full h-screen md:pt-10 sm:pt-20">
      <CalendlySection />
      {/* <TryAssistant2 /> */}
      <VideoPlayer />
      <ComparisonSection />
      <FeaturesShowcase />
      <TestimonialsSection />
      <GetStarted />
    </div>
  );
};

export default CalendlyEmbed;
