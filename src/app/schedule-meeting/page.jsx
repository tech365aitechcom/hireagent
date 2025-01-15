import React from "react";
import CalendlySection from "../sections/CalendlySectio";
import ComparisonSection from "../sections/ComparisonSection";
import FeaturesShowcase from "../sections/FeaturesShowcase";
import TestimonialsSection from "../sections/TestimonialsSection";

const CalendlyEmbed = () => {
  return (
    <div className="w-full h-screen md:pt-10 sm:pt-20">
      <CalendlySection />
      <ComparisonSection />
      <FeaturesShowcase />
      <TestimonialsSection />
    </div>
  );
};

export default CalendlyEmbed;