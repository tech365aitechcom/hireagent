"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

const CalendlySection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFCFD] flex flex-col lg:flex-row items-center max-md:mt-20 md:mt-8">
      <div className="w-full lg:w-2/5 p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col items-center justify-center min-h-[50vh] lg:min-h-screen">
        <div className="mb-6 md:mb-8 lg:mb-10 max-w-2xl lg:max-w-none">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-indigo-700 mb-4 leading-tight">
            Transform Your Real Estate Business with AI-Powered Assistance
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-600">
            Revolutionize Property Matching & Client Engagement
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg bg-white w-full max-w-2xl lg:max-w-none">
          <div className="relative aspect-video">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                <div className="w-full h-full animate-pulse bg-slate-200" />
                <div className="absolute flex items-center justify-center">
                  <Play className="w-16 h-16 text-slate-400 animate-pulse" />
                </div>
              </div>
            )}
            <video
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              controls={isPlaying}
              onClick={() => setIsPlaying(true)}
              onLoadedData={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              poster="/video-thumbnail.jpg"
            >
              <source src="/dummy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5 h-[80vh] lg:h-screen">
        <iframe
          src="https://calendly.com/hireagent/30min?back=1&month=2025-01"
          className="w-full h-full border-0"
          title="Calendly Scheduling Page"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CalendlySection;
