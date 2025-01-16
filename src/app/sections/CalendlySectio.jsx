import React from "react";

const CalendlySection = () => {
  return (
    <div className="h-[100dvh] bg-[#FBFCFD] max-md:mt-20 mt-10 flex flex-col">
      <div className="w-full text-center px-4 md:px-6 py-4 md:py-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-indigo-700 mb-2 md:mb-4">
          <span className="block md:inline">
            Transform Your Real Estate Business
          </span>{" "}
          <span className="block md:inline">with AI-Powered Assistance</span>
        </h1>
        <p className="text-base md:text-xl font-semibold text-blue-600">
          Revolutionize Property Matching & Client Engagement
        </p>
      </div>

      <div className="flex-1 w-full">
        <iframe
          src="https://calendly.com/hireagent/30min?back=1&month=2025-01"
          className="w-full h-full border-0"
          title="Calendly Scheduling Page"
          loading="lazy"
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
};

export default CalendlySection;
