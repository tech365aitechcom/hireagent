import React from "react";
import { existingCard } from "../page";

const AssistantPopup = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-20 text-center">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Assistants
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(existingCard).map(([name, features]) => (
            <div key={name} className="relative group">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl 
                                transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
              />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
                <div className="absolute top-4 right-4 w-20 h-20">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full opacity-10"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient1)"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      d="M30 50 L45 65 L70 35"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {name}
                </h3>
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {/* <button
                        onClick={() => (window.location.href = "/pricing")}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
                                  flex items-center justify-center group"
                      >
                        Try Now
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistantPopup;
