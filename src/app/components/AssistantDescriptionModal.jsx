import { X, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const AssistantDescriptionModal = ({
  setActiveCard,
  name,
  authToken,
  setShowAssistant,
  desc,
  testStep,
  aiId,
}) => {
  const [activeTab, setActiveTab] = useState("description");

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

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 md:p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-6xl p-4 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
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
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/_HOGoZiov6k"
                  title="Property Video Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
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

        {/* Footer */}
        <div className="pt-4 md:pt-6">
          {!authToken ? (
            <Link
              href={`/login?id=${aiId}`}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 md:py-4 px-4 md:px-6 
                rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
                hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <span>Try Our AI Assistant</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          ) : (
            <button
              onClick={setShowAssistant}
              className="w-full bg-green-500 text-white py-3 md:py-4 px-4 md:px-6 
                rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
                hover:bg-green-600 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <span>Talk to Assistant</span>
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          )}
          <p className="text-center text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
            Available 24/7 to help with your real estate needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssistantDescriptionModal;
