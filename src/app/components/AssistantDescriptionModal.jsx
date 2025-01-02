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
      className={`px-4 py-2 font-medium rounded-lg transition-colors
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-6xl w-full p-8 shadow-2xl relative max-md:h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {name}
            </h3>
          </div>
          <button
            onClick={setActiveCard}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <div className="flex items-end gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
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

          <div className="lg:w-1/2">
            <div className="flex gap-2 mb-4">
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
              className="h-[280px] overflow-y-auto border rounded-lg p-4"
              dangerouslySetInnerHTML={{
                __html: activeTab === "description" ? desc : testStep,
              }}
            ></div>
          </div>
        </div>

        <div className="pt-6">
          {!authToken ? (
            <Link
              href={`/login?id=${aiId}`}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 
                rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
                hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center gap-2"
            >
              <span>Try Our AI Assistant</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <button
              onClick={setShowAssistant}
              className="w-full bg-green-500 text-white py-4 px-6 
                rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
                hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <span>Talk to Assistant</span>
              <Phone className="w-5 h-5" />
            </button>
          )}
          <p className="text-center text-sm text-gray-500 mt-4">
            Available 24/7 to help with your real estate needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssistantDescriptionModal;
