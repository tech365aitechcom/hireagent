"use client";
import { Calendar, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CalendlySection = () => {
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const scheduledElement = document.querySelector(
            "h1._DCg81pIT0_JBNNWNnk_.Irang_XWALx_cgdnp2wH"
          );
          if (scheduledElement) {
            router.push("/thank-you");
          }
        }
      });
    });
    const targetNode = document.body;
    const config = { childList: true, subtree: true };
    observer.observe(targetNode, config);
    return () => {
      observer.disconnect();
    };
  }, [router]);

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 flex flex-col lg:flex-row items-center justify-center py-16">
      <div className="w-full max-w-6xl px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600 leading-tight">
              Transform Your Real Estate Business with AI-Powered Assistance
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-600/90">
              Revolutionize Property Matching & Client Engagement
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setScheduleModalOpen(true)}
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl border-2 border-gray-200 
                        hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-100 
                        transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <span className="flex items-center font-medium text-lg">
                Schedule Meeting
                <Calendar className="ml-3 w-5 h-5 group-hover:text-indigo-600 transition-colors" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {isScheduleModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setScheduleModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            <iframe
              src="https://calendly.com/hireagent/30min?back=1&month=2025-01"
              className="w-full h-full rounded-2xl border-0"
              title="Calendly Scheduling Page"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlySection;
