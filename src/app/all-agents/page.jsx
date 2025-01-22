"use client";
import React from "react";
import { ShoppingCart, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const HorizontalBotCatalog = () => {
  // Sample data
  const categories = [
    {
      name: "Healthcare",
      bots: [
        {
          id: 1,
          name: "MediAssist AI",
          description:
            "24/7 patient support voice bot with medical terminology understanding.",
          price: 299,
          image: "/api/placeholder/300/200",
        },
        {
          id: 2,
          name: "HealthGuide Pro",
          description:
            "Symptom assessment and medical information voice assistant.",
          price: 399,
          image: "/api/placeholder/300/200",
        },
        {
          id: 3,
          name: "NurseBot AI",
          description: "Automated nursing assistant for patient monitoring.",
          price: 349,
          image: "/api/placeholder/300/200",
        },
        {
          id: 4,
          name: "MedScheduler",
          description: "Appointment scheduling and reminder voice assistant.",
          price: 249,
          image: "/api/placeholder/300/200",
        },
        {
          id: 5,
          name: "PharmacyHelper",
          description: "Medication information and reminder voice bot.",
          price: 199,
          image: "/api/placeholder/300/200",
        },
      ],
    },
    {
      name: "Education",
      bots: [
        {
          id: 6,
          name: "EduTutor Pro",
          description:
            "Interactive learning assistant for personalized education.",
          price: 199,
          image: "/api/placeholder/300/200",
        },
        {
          id: 7,
          name: "LanguageMaster AI",
          description:
            "Language learning voice bot with pronunciation correction.",
          price: 249,
          image: "/api/placeholder/300/200",
        },
        {
          id: 8,
          name: "MathGenius Bot",
          description: "Mathematics tutoring and problem-solving assistant.",
          price: 299,
          image: "/api/placeholder/300/200",
        },
        {
          id: 9,
          name: "ScienceTutor AI",
          description: "Interactive science education and experiment guide.",
          price: 279,
          image: "/api/placeholder/300/200",
        },
      ],
    },
  ];

  const scroll = (direction, categoryName) => {
    const container = document.getElementById(`scroll-${categoryName}`);
    const scrollAmount = 800;
    if (container) {
      const scrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">AIMarket</span>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <Link
                    href="/all-agents"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Browse Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Sell Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Community
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </nav>
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        AI Voice Bots Marketplace
      </h1>

      {categories.map((category) => (
        <div key={category.name} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 px-4">
            {category.name}
          </h2>

          <div className="relative">
            {/* Scroll Left Button */}
            <button
              onClick={() => scroll("left", category.name)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Horizontal Scrolling Container */}
            <div
              id={`scroll-${category.name}`}
              className="flex overflow-x-auto gap-6 px-12 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {category.bots.map((bot) => (
                <div
                  key={bot.id}
                  className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <img
                    src={bot.image}
                    alt={bot.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {bot.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
                      {bot.description}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-gray-800">
                        ${bot.price}
                      </span>
                      <div className="flex gap-2">
                        <Link
                          href={"/ai-details"}
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="View details"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </Link>
                        <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scroll("right", category.name)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBotCatalog;
