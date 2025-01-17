import {
  X,
  ArrowRight,
  Phone,
  AudioLinesIcon,
  ShoppingCart,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ScheduleMeetingModal } from "../sections/SheduleMeetingModal";
import axios from "axios";
import { baseURL } from "../urls";

const AssistantDescriptionModal2 = ({
  setActiveCard,
  name,
  authToken,
  setShowAssistant,
  desc,
  testStep,
  aiId,
  user,
}) => {
  const iframeRef = useRef(null);
  const [activeTab, setActiveTab] = useState("description");
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);

  const TabButton = ({ id, label, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base font-medium rounded-lg transition-colors
        ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      {label}
    </button>
  );

  const trackBotClick = async (botName) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/traction/create-bot-imperssion`,
        {
          bot: botName,
        }
      );
      console.log("Impression tracked:", response.data);
    } catch (error) {
      console.error("Error tracking impression:", error);
    }
  };

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

  let player;
  useEffect(() => {
    const setupPlayer = () => {
      if (!window.YT) {
        console.error("YouTube API not loaded");
        return;
      }

      player = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              const videoUrl = player.getVideoUrl();
              trackVideoClick(videoUrl);
            }
          },
        },
      });
    };

    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.onload = () => {
          window.onYouTubeIframeAPIReady = setupPlayer;
        };
        document.body.appendChild(script);
      } else {
        setupPlayer();
      }
    };

    loadYouTubeAPI();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 md:p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-6xl p-4 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {" "}
        <div className="flex justify-between items-center relative mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 md:p-3 rounded-xl">
              <span className="text-xl md:text-2xl">🏠</span>
            </div>
            <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {name}
            </h3>
          </div>
          <button
            onClick={setActiveCard}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/_HOGoZiov6k?enablejsapi=1"
                  title="Property Video Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex gap-2 mb-3 md:mb-4">
              <TabButton
                id="description"
                label="Description"
                isActive={activeTab === "description"}
              />
              <TabButton
                id="testSteps"
                label="Test Steps"
                isActive={activeTab === "testSteps"}
              />
            </div>

            <div
              className="h-[200px] md:h-[280px] overflow-y-auto border rounded-lg p-3 md:p-4 text-sm md:text-base"
              dangerouslySetInnerHTML={{
                __html: activeTab === "description" ? desc : testStep,
              }}
            ></div>
          </div>
        </div>
        <div className="pt-4 md:pt-6">
          {!authToken ? (
            <button
              onClick={() => {
                setShowAssistant();
                trackBotClick(name);
              }}
              className="w-full bg-green-500 text-white py-3 md:py-4 px-4 md:px-6 
      rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
      hover:bg-green-600 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <span>Try Assistant</span>

              <AudioLinesIcon className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setShowAssistant();
                  trackBotClick(name);
                }}
                className="w-full bg-green-500 text-white py-3 md:py-4 px-4 md:px-6 
      rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
      hover:bg-green-600 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <span>Try Assistant</span>

                <AudioLinesIcon className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href={`/pricing?aiId=${aiId}`}
                  className="w-full bg-purple-500 text-white py-3 md:py-4 px-4 md:px-6 
        rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
        hover:bg-purple-600 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <span>Purchase Assistant</span>
                  <ShoppingCart className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
          <p className="text-center text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
            Available 24/7 to help with your real estate needs
          </p>
        </div>
      </div>
      {isScheduleModalOpen && (
        <ScheduleMeetingModal
          isOpen={"schedule"}
          onClose={() => setScheduleModalOpen(false)}
          bot={activeTab}
          mode="schedule"
          user={user}
        />
      )}
    </div>
  );
};

export default AssistantDescriptionModal2;
