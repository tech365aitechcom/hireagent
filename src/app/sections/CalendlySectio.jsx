import React from "react";

const CalendlySection = () => {
  return (
    <div className="h-screen relative mt-20 bg-gray-50">
      <div className="absolute bottom-0 left-0 right-0 h-[320px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#6366F1"
            fillOpacity="0.1"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#6366F1"
            fillOpacity="0.15"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#6366F1"
            fillOpacity="0.2"
            d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center ">
        <div className="w-full text-center px-6">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
            Transform Your Real Estate Business with <br /> AI-Powered
            Assistance
          </h1>
          <p className="text-xl font-semibold text-blue-600 mb-6">
            Revolutionize Property Matching & Client Engagement
          </p>
        </div>
        <div className="relative flex-1 w-full ">
          <iframe
            src="https://calendly.com/hireagent/30min?back=1&month=2025-01"
            className="absolute inset-0 w-full h-full border-0 "
            title="Calendly Scheduling Page"
            loading="lazy"
            style={{ overflow: "hidden" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlySection;
