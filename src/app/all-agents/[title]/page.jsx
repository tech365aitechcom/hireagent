"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import {
  Star,
  Users,
  Clock,
  ChevronRight,
  ArrowLeft,
  Calendar,
  MessageSquare,
  Table,
} from "lucide-react";
import Link from "next/link";
import { baseURL } from "@/app/urls";

const AIDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [assistant, setAssistant] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Hardcoded supplementary data
  const supplementaryData = {
    features: [
      {
        title: "Automated Scheduling",
        description:
          "AI-powered scheduling system that coordinates property viewings based on your availability",
      },
      {
        title: "Smart Property Matching",
        description:
          "Advanced algorithm that learns your preferences to suggest relevant properties",
      },
      {
        title: "Follow-up Automation",
        description:
          "Automated follow-ups with clients and property owners to keep deals moving",
      },
      {
        title: "Market Analysis",
        description: "Real-time market analysis and property value predictions",
      },
    ],
    integrations: [
      {
        name: "Google Calendar",
        icon: Calendar,
        description: "Sync appointments and viewings",
      },
      {
        name: "ChatGPT",
        icon: MessageSquare,
        description: "Enhanced property descriptions",
      },
      {
        name: "Google Sheets",
        icon: Table,
        description: "Export property data and analytics",
      },
    ],
  };

  useEffect(() => {
    const fetchAssistant = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/assistants/getAssistantDetailsById?id=${id}`
        );
        // Merge API data with supplementary data
        setAssistant({
          ...response.data,
          features: supplementaryData.features,
          integrations: supplementaryData.integrations,
          // Ensure howToUse has multiple steps if API only provides one
          howToUse:
            response.data.howToUse.length === 1
              ? [
                  response.data.howToUse[0],
                  {
                    step: 2,
                    title: "Property Search",
                    description:
                      "Start searching for properties or let PropertyMate suggest matches",
                    _id: "custom-step-2",
                  },
                  {
                    step: 3,
                    title: "Schedule Viewings",
                    description:
                      "Use the automated scheduling system to book property viewings",
                    _id: "custom-step-3",
                  },
                  {
                    step: 4,
                    title: "Follow-up Management",
                    description:
                      "Let PropertyMate handle follow-ups and keep track of interactions",
                    _id: "custom-step-4",
                  },
                ]
              : response.data.howToUse,
        });
      } catch (error) {
        console.error("Error fetching assistant details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAssistant();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!assistant) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Assistant not found
        </h1>
        <Link
          href="/all-agents"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-light tracking-tight text-slate-900">
                AIMarket
              </span>
              <div className="hidden md:block ml-12">
                <div className="flex space-x-8">
                  {["Browse Agents", "Sell Agents", "Community"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide">
                Sign In
              </button>
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors text-sm tracking-wide">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/all-agents" className="hover:text-gray-900">
              Marketplace
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">Assistant Details</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={assistant.image}
                alt={assistant.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-5 h-5 text-gray-900" />
                  <span className="text-xl font-semibold">
                    {assistant.rating || 0}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Users className="w-5 h-5 text-gray-900" />
                  <span className="text-xl font-semibold">
                    {assistant.activeUsers || 0}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Active Users</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="w-5 h-5 text-gray-900" />
                  <span className="text-xl font-semibold">
                    {assistant.creator.stats.support}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Support</p>
              </div>
            </div>

            {/* Core Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Core Features
              </h2>
              <div className="space-y-4">
                {assistant.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {assistant.name}
              </h1>
              <p className="text-lg text-gray-600">{assistant.description}</p>
            </div>

            {/* Pricing */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${assistant.price}
                </span>
                <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Purchase Now
                </button>
              </div>
              <p className="text-sm text-gray-500">
                * Price includes lifetime access and{" "}
                {assistant.creator.stats.support} support
              </p>
            </div>

            {/* Integrations */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Integrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {assistant.integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center"
                  >
                    <integration.icon className="w-8 h-8 mx-auto mb-3 text-gray-900" />
                    <h3 className="font-medium text-gray-900 mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {integration.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How to Use
              </h2>
              <div className="space-y-4">
                {assistant.howToUse.map((step) => (
                  <div key={step._id} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-medium">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About the Creator
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-medium text-gray-900 mb-2">
                  {assistant.creator.name}
                </h3>
                <p className="text-gray-600">{assistant.creator.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p>Total Clients: {assistant.creator.stats.clients}</p>
                  <p>Creator Rating: {assistant.creator.stats.rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIDetailsPage;
