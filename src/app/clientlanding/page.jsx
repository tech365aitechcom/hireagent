"use client";
import React, { useEffect, useState } from "react";
import { Calendar, Clock, MessageCircle, Phone } from "lucide-react";
import Assistant from "../components/Assistant";
import ClientAssistant from "../components/ClientAssistant";

const FloatingBlob = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={`absolute ${className}`}
    style={{ filter: "blur(30px)" }}
  >
    <path
      fill="rgba(59, 130, 246, 0.25)"
      d="M41.2,-70.7C54.8,-64.6,68,-55.5,76.3,-42.7C84.6,-30,88,-13.5,86.6,2.3C85.2,18,79,33,69.7,45.3C60.4,57.6,48,67.2,34.1,73.7C20.2,80.2,4.8,83.6,-10.2,81.8C-25.2,80,-39.8,73,-52.1,63.1C-64.4,53.2,-74.4,40.4,-79.7,25.8C-85,11.2,-85.6,-5.2,-81.7,-20.1C-77.8,-35,-69.4,-48.4,-57.4,-55.4C-45.4,-62.5,-29.9,-63.2,-15.9,-64.7C-1.9,-66.2,10.5,-68.5,22.9,-69.8C35.3,-71.1,47.7,-71.4,41.2,-70.7Z"
      transform="translate(100 100)"
    />
  </svg>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-sm opacity-25 transition-all duration-300 group-hover:opacity-40"></div>
    <div className="relative flex flex-col h-full p-4 md:p-6 lg:p-8 transition-all duration-300 bg-white border border-blue-100 rounded-xl hover:shadow-xl hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
      <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const Page = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    setAuthToken(storedAuthToken);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "24/7 Scheduling",
      description:
        "Book your appointments anytime, anywhere with our intelligent booking system",
    },
    {
      icon: Clock,
      title: "Instant Confirmation",
      description:
        "Receive immediate confirmations and automated appointment reminders",
    },
    {
      icon: MessageCircle,
      title: "Smart Assistant",
      description:
        "AI-powered scheduling that learns your preferences for the perfect time slot",
    },
    {
      icon: Phone,
      title: "Priority Care",
      description:
        "Immediate assistance for dental emergencies with priority scheduling",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="hidden md:block">
        <FloatingBlob className="top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] animate-pulse" />
        <FloatingBlob className="bottom-0 right-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] animate-pulse delay-1000" />
        <FloatingBlob className="top-1/2 right-1/4 w-[300px] md:w-[400px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[600px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 md:mb-20">
            <h1 className="mb-4 md:mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Practice<span className="text-blue-600">Agent</span>
            </h1>
            <p className="mb-6 md:mb-10 text-lg md:text-xl text-gray-600">
              Experience the future of dental appointment scheduling
            </p>
            <button
              onClick={() => setShowAssistant(true)}
              className="px-6 md:px-10 py-3 md:py-5 text-base md:text-lg font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:shadow-lg hover:scale-105"
            >
              Try AI Bot Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {showAssistant && (
        <ClientAssistant
          id={"Dentist--J4688teFHbm8CN2OXpAP_"}
          authToken={authToken}
        />
      )}
    </div>
  );
};

export default Page;
