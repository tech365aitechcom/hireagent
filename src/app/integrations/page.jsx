"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChevronRight,
  Grid2X2,
  Box,
  Calendar,
  Mail,
  Brain,
  Workflow,
  Users,
  MessageSquare,
  Database,
  Phone,
} from "lucide-react";

const IntegrationCatalog = () => {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/f3e25c97923d55318c5a"
        );
        setIntegrations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupedIntegrations = integrations.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  const typeIcons = {
    All: <Grid2X2 size={20} />,
    Connectors: <Grid2X2 size={20} />,
    Productivity: <Box size={20} />,
    Scheduling: <Calendar size={20} />,
    Email: <Mail size={20} />,
    AI: <Brain size={20} />,
    "AI & Voice": <Brain size={20} />,
    Automation: <Workflow size={20} />,
    CRM: <Users size={20} />,
    "Business Tools": <Box size={20} />,
    Communication: <MessageSquare size={20} />,
    Messaging: <MessageSquare size={20} />,
    Database: <Database size={20} />,
    Voice: <Phone size={20} />,
  };

  const HeroBackground = () => (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 0h40v40H0z" fill="none" />
            <path
              d="M0 20h40M20 0v40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-400/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_40%)]" />
    </div>
  );

  const TechPattern = () => (
    <div className="absolute inset-0 -z-10">
      <svg
        className="absolute h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M100 0H0V100"
            fill="none"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="0.5"
          />
          <circle
            cx="0"
            cy="0"
            r="2"
            fill="currentColor"
            className="text-blue-500"
          />
          <circle
            cx="100"
            cy="0"
            r="2"
            fill="currentColor"
            className="text-blue-500"
          />
          <circle
            cx="0"
            cy="100"
            r="2"
            fill="currentColor"
            className="text-blue-500"
          />
          <circle
            cx="50"
            cy="50"
            r="4"
            fill="currentColor"
            className="text-blue-500"
          />
          <path
            d="M50 0v50M0 50h50"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );

  const displayedIntegrations =
    activeType === "All" ? integrations : groupedIntegrations[activeType] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TechPattern />
      <div className="relative overflow-hidden bg-blue-600">
        <HeroBackground />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Integration Platform
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-12">
                Connect and automate your workflow with our powerful
                integrations. Build seamless connections between your favorite
                tools and services.
              </p>
              <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">
                    {integrations.length}
                  </div>
                  <div className="text-blue-100">Integrations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">
                    {Object.keys(groupedIntegrations).length}
                  </div>
                  <div className="text-blue-100">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-blue-100">Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              className="fill-gray-50 w-full h-24 block"
              preserveAspectRatio="none"
            >
              <path d="M600,112C268.6,112,0,65.8,0,7.2V120H1200V7.2C1200,65.8,931.4,112,600,112z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 p-4 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h2>
              <nav className="space-y-1">
                <button
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                    activeType === "All"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setActiveType("All")}
                >
                  <Grid2X2 size={20} />
                  <span>All Integrations</span>
                  <span className="ml-auto bg-white/20 text-xs py-0.5 px-2 rounded-full">
                    {integrations.length}
                  </span>
                </button>
                {Object.keys(groupedIntegrations).map((type) => (
                  <button
                    key={type}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                      activeType === type
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setActiveType(type)}
                  >
                    {typeIcons[type]}
                    <span>{type}</span>
                    <span className="ml-auto bg-white/20 text-xs py-0.5 px-2 rounded-full">
                      {groupedIntegrations[type].length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    {typeIcons[activeType]}
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {activeType === "All" ? "All Integrations" : activeType}
                    </h2>
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {displayedIntegrations.length} integrations
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayedIntegrations.map((integration) => (
                      <div
                        key={integration.name}
                        className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                              <img
                                src="/api/placeholder/48/48"
                                alt={integration.name}
                                className="w-8 h-8"
                              />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {integration.name}
                              </h3>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {integration.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            {integration.description}
                          </p>
                        </div>
                        <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-transparent border-t border-gray-100">
                          <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors flex items-center gap-1">
                            Learn more <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCatalog;
