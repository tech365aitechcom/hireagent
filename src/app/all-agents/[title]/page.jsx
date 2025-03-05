"use client";
import React, { useState, useEffect, Suspense } from "react";
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
  Mail,
  FileSpreadsheet,
  CalendarDays,
  UserPlus,
  Phone,
  CheckCircle,
  Briefcase,
  Award,
  Shield,
  Search,
} from "lucide-react";
import Link from "next/link";
import { baseURL } from "@/app/urls";
import {
  SiGooglecalendar,
  SiN8N,
  SiGmail,
  SiCalendly,
  SiGooglesheets,
  SiMake,
  SiZoho,
  SiTwilio,
  SiAirtable,
} from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiClaudeFill } from "react-icons/ri";
import { FaHubspot } from "react-icons/fa";
import { FaSlack, FaTelegramPlane } from "react-icons/fa";
import { PiWaveformBold } from "react-icons/pi";

const AIDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [assistant, setAssistant] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const getIntegrationIcon = (name) => {
    const iconMap = {
      n8n: SiN8N,
      "Google Calendar": SiGooglecalendar,
      Calendly: SiCalendly,
      Gmail: SiGmail,
      "Google Sheets": SiGooglesheets,
      OpenAI: AiOutlineOpenAI,
      DeepSeek: Search,
      Claude: RiClaudeFill,
      "Make.com": SiMake,
      HubSpot: FaHubspot,
      Zoho: SiZoho,
      Slack: FaSlack,
      Telegram: FaTelegramPlane,
      Twilio: SiTwilio,
      Airtable: SiAirtable,
      VAPI: PiWaveformBold,
    };

    return iconMap[name] || MessageSquare;
  };

  useEffect(() => {
    const fetchAssistant = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/assistants/getAssistantDetailsById?id=${id}`
        );
        let processedIntegrations = [];

        if (
          !response.data.integrations ||
          response.data.integrations.length === 0
        ) {
          if (response.data.category === "Dentistry") {
            processedIntegrations = [
              {
                name: "Google Calendar",
                icon: CalendarDays,
                description: "Real-time appointment scheduling",
              },
              {
                name: "Google Sheets",
                icon: FileSpreadsheet,
                description: "Lead management and organization",
              },
              {
                name: "Email Service",
                icon: Mail,
                description: "Automated confirmation emails",
              },
            ];
          }
        } else {
          processedIntegrations = (response.data.integrations || []).map(
            (integration) => {
              if (typeof integration === "string") {
                return {
                  name: integration,
                  icon: getIntegrationIcon(integration),
                  description: `Integration with ${integration}`,
                };
              } else if (typeof integration === "object") {
                return {
                  ...integration,
                  icon:
                    integration.icon || getIntegrationIcon(integration.name),
                };
              }
              return integration;
            }
          );
        }

        let processedFeatures = [];

        if (response.data.features && response.data.features.length > 0) {
          if (typeof response.data.features[0] === "string") {
            processedFeatures = response.data.features.map((feature) => ({
              title: feature,
              description: feature,
            }));
          } else if (typeof response.data.features[0] === "object") {
            processedFeatures = response.data.features;
          }
        } else if (response.data.category === "Real Estate Industry") {
          processedFeatures = [
            {
              title: "Property Search Assistance",
              description:
                "Find your perfect property based on your preferences and requirements",
            },
            {
              title: "Appointment Scheduling",
              description:
                "Book property viewings and consultations with real estate agents",
            },
            {
              title: "Email Notifications",
              description:
                "Receive property recommendations and appointment confirmations via email",
            },
            {
              title: "Property Matching",
              description:
                "AI-powered matching of your preferences with available properties",
            },
          ];
        } else if (response.data.category === "Dentistry") {
          processedFeatures = [
            {
              title: "Appointment Scheduling",
              description:
                "AI-powered scheduling system for dental appointments",
            },
            {
              title: "Lead Management",
              description: "Capture and organize patient leads efficiently",
            },
            {
              title: "Email Automation",
              description: "Automatic confirmation and follow-up emails",
            },
            {
              title: "Real-time Availability",
              description: "Check and book available time slots instantly",
            },
          ];
        }

        setAssistant({
          ...response.data,
          features: processedFeatures,
          integrations: processedIntegrations,
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-blue-600 font-medium">
          Loading assistant details...
        </span>
      </div>
    );
  }

  if (!assistant) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-blue-100 max-w-md">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            Assistant not found
          </h1>
          <p className="text-blue-600 mb-6">
            The assistant you're looking for could not be found or may have been
            removed.
          </p>
          <Link
            href="/all-agents"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="border-b border-blue-100 shadow-sm bg-white sticky top-0 z-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-blue-500">
            <Link
              href="/all-agents"
              className="hover:text-blue-700 flex items-center group transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Marketplace
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-blue-900 font-medium">Assistant Details</span>
          </nav>
        </div>
      </div>
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - 5/12 width */}
          <div className="lg:col-span-5 space-y-8">
            {assistant.videoLink && (
              <div className="space-y-4">
                <div
                  className="relative w-full rounded-xl overflow-hidden shadow-lg border border-blue-100"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={assistant.videoLink}
                    title={assistant.name}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-blue-500 italic text-center">
                  Watch this video to see {assistant.name} in action
                </p>
              </div>
            )}
            {!assistant.videoLink && assistant.image && (
              <div className="space-y-4">
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all hover:shadow-xl">
                  <img
                    src={assistant.image}
                    alt={assistant.name}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl shadow-md border border-blue-100">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <span className="text-xl font-semibold text-blue-900 block">
                  {assistant.rating || "5.0"}
                </span>
                <p className="text-sm text-blue-600 mt-1">User Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <span className="text-xl font-semibold text-blue-900 block">
                  {assistant.activeUsers || "1K+"}
                </span>
                <p className="text-sm text-blue-600 mt-1">Active Users</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <span className="text-xl font-semibold text-blue-900 block">
                  {assistant.creator?.stats?.support || "24/7"}
                </span>
                <p className="text-sm text-blue-600 mt-1">Support</p>
              </div>
            </div>
            {assistant.features && assistant.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Core Features
                </h2>
                <div className="space-y-4">
                  {assistant.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <h3 className="font-medium text-blue-900 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                        {feature.title}
                      </h3>
                      {/* <p className="text-blue-600 pl-7">
                        {feature.description}
                      </p> */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - 7/12 width */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full mb-3 inline-block">
                    {assistant.category || "AI Assistant"}
                  </span>
                  <h1 className="text-3xl font-bold text-blue-900 mb-4">
                    {assistant.name}
                  </h1>
                </div>
                {assistant.creator && (
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <div className="text-xs text-blue-600 font-medium">
                      CREATED BY
                    </div>
                    <div className="text-sm text-blue-900 font-semibold">
                      {assistant.creator.name}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-lg text-blue-600 leading-relaxed">
                {assistant.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-blue-900">Free</span>
                  {assistant.creator?.stats?.support && (
                    <p className="text-sm text-blue-500 mt-1">
                      Includes lifetime access and{" "}
                      {assistant.creator.stats.support} support
                    </p>
                  )}
                </div>
                <Link href={`/chat?assistantId=${assistant._id}`}>
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Try Now
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-blue-50 rounded-lg flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="text-sm text-blue-900 font-medium">
                      Secure & Private
                    </div>
                    <div className="text-xs text-blue-600">
                      End-to-end encryption
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg flex items-center">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="text-sm text-blue-900 font-medium">
                      Business Ready
                    </div>
                    <div className="text-xs text-blue-600">
                      Enterprise-grade service
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {Array.isArray(assistant.features) &&
              typeof assistant.features[0] === "string" &&
              assistant.features.length > 0 && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Key Highlights
                  </h2>
                  <div className="space-y-3">
                    {assistant.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-blue-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {assistant.integrations && assistant.integrations.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  Integrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {assistant.integrations.map((integration, index) => {
                    const IntegrationIcon = integration.icon;
                    return (
                      <div
                        key={index}
                        className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        {IntegrationIcon && (
                          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm">
                            <IntegrationIcon className="w-6 h-6 text-blue-600" />
                          </div>
                        )}
                        <h3 className="font-medium text-blue-900 mb-1">
                          {integration.name}
                        </h3>
                        <p className="text-sm text-blue-600">
                          {integration.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {assistant.howToUse && assistant.howToUse.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  How to Use
                </h2>
                <div className="space-y-6">
                  {assistant.howToUse.map((step) => (
                    <div
                      key={step._id}
                      className="flex items-start space-x-4 hover:bg-blue-50 p-4 rounded-lg transition-colors"
                    >
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium shadow-md">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-medium text-blue-900 mb-2 text-lg break-words">
                          {step.title}
                        </h3>
                        <p className="text-blue-600 whitespace-pre-line break-words">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {assistant.creator && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  About the Creator
                </h2>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-900 mb-2 text-lg">
                      {assistant.creator.name}
                    </h3>
                    <p className="text-blue-600 mb-4">
                      {assistant.creator.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                      <div className="p-3 bg-blue-50 rounded-lg flex items-center">
                        <Users className="w-5 h-5 text-blue-600 mr-2" />
                        <div>
                          <div className="text-blue-600">Total Clients</div>
                          <div className="text-blue-900 font-medium">
                            {assistant.creator.stats?.clients || "1,000+"}
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg flex items-center">
                        <Star className="w-5 h-5 text-blue-600 mr-2" />
                        <div>
                          <div className="text-blue-600">Creator Rating</div>
                          <div className="text-blue-900 font-medium">
                            {assistant.creator.stats?.rating || "5.0"}/5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-blue-100 mt-12 py-8">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-500 text-sm">
            &copy; {new Date().getFullYear()} AI Assistant Marketplace. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-4 text-blue-600 font-medium">
            Loading assistant details...
          </span>
        </div>
      }
    >
      <AIDetailsPage />
    </Suspense>
  );
};

export default page;
