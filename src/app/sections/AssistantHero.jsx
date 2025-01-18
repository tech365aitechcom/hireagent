"use client";
import React, { useState } from "react";
import { ArrowDown, Award, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "../urls";

const AssistantHero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const trackVideoClick = async (videoName) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/traction/create-video-imperssion`,
        {
          video: videoName,
        }
      );
      console.log("Impression tracked:", response.data);
    } catch (error) {
      console.error("Error tracking impression:", error);
    }
  };

  const handleVideoPlay = () => {
    trackVideoClick("Real Estate Video");
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm md:text-base">
                #1 Rated Real Estate AI Assistant
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Turn Missed Calls into Closed Deals{" "}
              <span className="text-blue-600">While You Sleep</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Your AI assistant handles unlimited calls, schedules viewings, and
              qualifies leads 24/7 - so you never miss a potential sale.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6 md:mb-8">
              <a
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center sm:justify-start"
                href="#try-assistant"
              >
                Try AI Assistant for free
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </a>
              {/* <button
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center sm:justify-start"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch 2-Min Demo
                <Play className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </button> */}
              <Link
                href={"/schedule-meeting"}
                className="group px-6 py-3 bg-white text-gray-900 rounded-xl border-2 border-gray-200 
                      hover:border-indigo-600 transition-colors"
              >
                <span className="flex items-center font-medium">
                  Schedule Demo <Calendar className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Setup in 5 minutes
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 bg-white rounded-lg shadow-xl p-4 md:p-6">
            <div className="text-center mb-4">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-2">
                Live Demo
              </div>
              <h3 className="font-semibold">See It In Action</h3>
            </div>

            <div className="rounded-lg overflow-hidden ">
              <video
                className="w-full h-auto"
                controls
                onPlay={handleVideoPlay}
              >
                <source src="/dummy.mp4" type="video/mp4" />
                <source src="/dummy.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div
            className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 md:top-3 md:right-3 text-blue-600 hover:text-blue-800 transition focus:outline-none"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600">
                Watch the Demo
              </h2>
              <p className="text-sm md:text-base text-blue-500">
                Explore the interactive demo by watching this video.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-50 to-blue-100">
              <video
                className="aspect-video w-full object-cover "
                controls
                onPlay={handleVideoPlay}
              >
                <source src="/dummy.mp4" type="video/mp4" />
                <source src="/dummy.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssistantHero;
