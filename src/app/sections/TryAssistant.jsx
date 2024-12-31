"use client";
import { Play, Shield, Sparkles, Trophy, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import Assistant from "../components/Assistant";
import { existingCard } from "../page";

const TryAssistantComp = () => {
  const searchParams = useSearchParams();
  const isModalTrue = searchParams.get("isModalTrue");
  const [activeCard, setActiveCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const [aiId, setAIId] = useState("");

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    setAuthToken(storedAuthToken);
  }, []);

  useEffect(() => {
    if (isModalTrue) {
      setShowModal(true);
    }
  }, [isModalTrue]);

  const highlights = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise-grade security",
    },
    { icon: <Sparkles className="w-5 h-5" />, text: "99.9% Uptime" },
    { icon: <Trophy className="w-5 h-5" />, text: "Award-winning support" },
  ];

  console.log(aiId, "raju");

  return (
    <div
      id="try-assistant"
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16 pb-24 relative overflow-hidden"
    >
      <div className="">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
                  <span className="text-blue-100">AI-Powered Assistant</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">
                  Meet Your AI Companion
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Experience intelligent conversations, task automation, and
                  24/7 support with our advanced AI assistant
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">0.1s</div>
                  <div className="text-blue-100 text-sm">Response Time</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-blue-100 text-sm">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-100 text-sm">Availability</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-blue-100 text-sm">Use Cases</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/bot.png"
                alt="AI Assistant"
                className="animate-bounce animate-infinite"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-transparent max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(existingCard).map(([name, { id, features }]) => (
              <div key={id} className="relative group">
                {/* Enhanced gradient background with animation */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl 
                  opacity-80 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 
                  transition-all duration-300 ease-out"
                />

                {/* Main card content */}
                <div
                  className="relative bg-white rounded-2xl p-8 border-0 shadow-lg backdrop-blur-sm
                  transition-all duration-300 hover:shadow-xl"
                >
                  {/* Enhanced checkmark design */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-75">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="none"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          from="0 251.2"
                          to="251.2 0"
                          dur="1s"
                          fill="freeze"
                        />
                      </circle>
                      <path
                        d="M30 50 L45 65 L70 35"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="100"
                          to="0"
                          dur="0.6s"
                          fill="freeze"
                          begin="0.5s"
                        />
                      </path>
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#4f46e5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                    {name}
                  </h3>

                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div
                          className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600
                          group-hover/item:scale-110 transition-transform"
                        />
                        <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActiveCard(id);
                      setAIId(id);
                    }}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl
                      flex items-center justify-center group/button relative overflow-hidden shadow-lg
                      hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center font-medium">
                      Try Now
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 
                      opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                    />
                  </button>
                </div>

                {/* Enhanced Modal */}
                {activeCard === id && (
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-6xl w-full p-8 shadow-2xl relative max-md:h-[80vh] overflow-y-auto">
                      {/* Modal Header */}
                      <div className="flex justify-between items-center mb-8 relative">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                            <span className="text-2xl">🏠</span>
                          </div>
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {name}
                          </h3>
                        </div>
                        <button
                          onClick={() => setActiveCard(null)}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                        </button>
                      </div>

                      <div className="flex justify-center items-center gap-12">
                        {/* Video Section */}
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
                          <div className="space-y-8">
                            <p className="text-xl text-gray-700 font-medium">
                              I'm your AI-powered real estate assistant, ready
                              to help you with:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                              {[
                                {
                                  icon: "🔍",
                                  title: "Property Search",
                                  desc: "Find your perfect home based on your preferences",
                                },
                                {
                                  icon: "💰",
                                  title: "Price Analysis",
                                  desc: "Get instant property valuations and market insights",
                                },
                                {
                                  icon: "📊",
                                  title: "Market Trends",
                                  desc: "Access real-time market data and trends",
                                },
                                {
                                  icon: "📝",
                                  title: "Listing Assistant",
                                  desc: "Help create compelling property descriptions",
                                },
                              ].map((item) => (
                                <div
                                  key={item.title}
                                  className="group flex items-start gap-4 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl
                                    border border-gray-100 hover:border-blue-100 transition-all duration-300
                                    hover:shadow-lg hover:-translate-y-0.5"
                                >
                                  <span className="text-2xl group-hover:scale-110 transition-transform">
                                    {item.icon}
                                  </span>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6">
                        {!authToken ? (
                          <Link
                            href={"/login"}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 
                                    rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
                                    hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center gap-2"
                          >
                            <span>Try Our AI Assistant</span>
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => setShowAssistant(true)}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 
                                    rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
                                    hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center gap-2"
                          >
                            <span>Try Our AI Assistant</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        )}
                        <p className="text-center text-sm text-gray-500 mt-4">
                          Available 24/7 to help with your real estate needs
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {showAssistant && <Assistant id={aiId} />}
    </div>
  );
};

const TryAssistant = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TryAssistantComp />
    </Suspense>
  );
};

export default TryAssistant;
