import React from "react";

const CalendlyEmbed = () => {
  return (
    <div className="w-full h-screen md:pt-10 sm:pt-20">
      <iframe
        src="https://calendly.com/hireagent/"
        className="w-full h-full border-0"
        title="Calendly Scheduling Page"
        loading="lazy"
      />
    </div>
  );
};

export default CalendlyEmbed;
