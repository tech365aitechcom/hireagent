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
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-indigo-600 font-medium">
          Loading assistant details...
        </span>
      </div>
    );
  }

  if (!assistant) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-indigo-100 max-w-md">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">
            Assistant not found
          </h1>
          <p className="text-indigo-600 mb-6">
            The assistant you're looking for could not be found or may have been
            removed.
          </p>
          <Link
            href="/all-agents"
            className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
      <div className="border-b border-indigo-100 shadow-sm bg-white sticky top-0 z-10 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-indigo-500">
            <Link
              href="/all-agents"
              className="hover:text-indigo-700 flex items-center group transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Marketplace
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-indigo-900 font-medium">
              Assistant Details
            </span>
          </nav>
        </div>
      </div>
      <main className="w-full mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl mb-12 overflow-hidden">
          <div className="p-8 md:p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block backdrop-blur-sm">
                  {assistant.category || "AI Assistant"}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {assistant.name}
                </h1>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {assistant.description}
                </p>
                <Link href={`/chat?assistantId=${assistant._id}`}>
                  <button className="px-8 py-4 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl font-medium flex items-center text-lg">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Try Now — Free
                  </button>
                </Link>
              </div>

              <div className="relative hidden md:block">
                {assistant.image ? (
                  <img
                    src={assistant.image}
                    alt={assistant.name}
                    className="w-full h-auto rounded-xl shadow-2xl transform rotate-2 border-4 border-white/30"
                  />
                ) : (
                  <div className="w-full aspect-video rounded-xl bg-indigo-400/30 flex items-center justify-center border-4 border-white/30 backdrop-blur-sm shadow-2xl">
                    <Shield className="w-24 h-24 text-white/70" />
                  </div>
                )}
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-bold text-indigo-900">
                    {assistant.rating || "5.0"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column - 5/12 width */}
          <div className="lg:col-span-5 space-y-8">
            {/* Video section with improved styling */}
            {assistant.videoLink && (
              <div className="space-y-4">
                <div
                  className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-indigo-100 transition-all hover:border-indigo-200"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={assistant.videoLink}
                    title={assistant.name}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-indigo-500 italic text-center">
                  Watch this video to see {assistant.name} in action
                </p>
              </div>
            )}

            {/* Stats cards with animated hover effects */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:border-indigo-300 group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Star className="w-7 h-7 text-indigo-600" />
                  </div>
                </div>
                <span className="text-2xl font-semibold text-indigo-900 block text-center">
                  {assistant.rating || "5.0"}
                </span>
                <p className="text-sm text-indigo-600 mt-1 text-center">
                  User Rating
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:border-indigo-300 group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Users className="w-7 h-7 text-indigo-600" />
                  </div>
                </div>
                <span className="text-2xl font-semibold text-indigo-900 block text-center">
                  {assistant.activeUsers || "1K+"}
                </span>
                <p className="text-sm text-indigo-600 mt-1 text-center">
                  Active Users
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:border-indigo-300 group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Clock className="w-7 h-7 text-indigo-600" />
                  </div>
                </div>
                <span className="text-2xl font-semibold text-indigo-900 block text-center">
                  {assistant.creator?.stats?.support || "24/7"}
                </span>
                <p className="text-sm text-indigo-600 mt-1 text-center">
                  Support
                </p>
              </div>
            </div>

            {/* Core features with improved card design */}
            {assistant.features && assistant.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-indigo-600" />
                  Core Features
                </h2>
                <div className="space-y-4">
                  {assistant.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all transform hover:-translate-y-1"
                    >
                      <h3 className="font-medium text-indigo-900 mb-2 flex items-center text-lg">
                        <CheckCircle className="w-5 h-5 mr-3 text-indigo-600 flex-shrink-0" />
                        {feature.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - 7/12 width */}
          <div className="lg:col-span-7 space-y-8">
            {/* Pricing section with improved design */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100 overflow-hidden relative">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>

              <div className="flex items-center justify-between mb-6 relative">
                <div>
                  <span className="text-3xl font-bold text-indigo-900 flex items-baseline">
                    Free
                    <span className="ml-2 text-sm text-indigo-500 font-normal">
                      Lifetime access
                    </span>
                  </span>
                  {assistant.creator?.stats?.support && (
                    <p className="text-sm text-indigo-500 mt-2">
                      Includes {assistant.creator.stats.support} support
                    </p>
                  )}
                </div>
                <Link href={`/chat?assistantId=${assistant._id}`}>
                  <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl font-medium flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Try Now
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center border border-indigo-100">
                  <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <div className="text-sm text-indigo-900 font-medium">
                      Secure & Private
                    </div>
                    <div className="text-xs text-indigo-600">
                      End-to-end encryption
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center border border-indigo-100">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <div className="text-sm text-indigo-900 font-medium">
                      Business Ready
                    </div>
                    <div className="text-xs text-indigo-600">
                      Enterprise-grade service
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights with improved design */}
            {Array.isArray(assistant.features) &&
              typeof assistant.features[0] === "string" &&
              assistant.features.length > 0 && (
                <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100">
                  <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-indigo-600" />
                    Key Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {assistant.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <p className="text-indigo-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Integrations with improved visual design */}
            {assistant.integrations && assistant.integrations.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-indigo-600" />
                  Integrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {assistant.integrations.map((integration, index) => {
                    const IntegrationIcon = integration.icon;
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl text-center border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all transform hover:-translate-y-1"
                      >
                        {IntegrationIcon && (
                          <div className="w-14 h-14 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm border border-indigo-100">
                            <IntegrationIcon className="w-7 h-7 text-indigo-600" />
                          </div>
                        )}
                        <h3 className="font-medium text-indigo-900 mb-2 text-lg">
                          {integration.name}
                        </h3>
                        <p className="text-sm text-indigo-600">
                          {integration.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* How to Use with modern timeline design */}
            {assistant.howToUse && assistant.howToUse.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-indigo-600" />
                  How to Use
                </h2>
                <div className="space-y-6 relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-indigo-200"></div>

                  {assistant.howToUse.map((step) => (
                    <div
                      key={step._id}
                      className="flex items-start space-x-6 hover:bg-indigo-50 p-4 rounded-lg transition-colors relative"
                    >
                      <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full flex items-center justify-center font-medium shadow-md z-10">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-bold text-indigo-900 mb-2 text-lg break-words">
                          {step.title}
                        </h3>
                        <p className="text-indigo-600 whitespace-pre-line break-words">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About the Creator with modern card design */}
            {assistant.creator && (
              <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100 overflow-hidden relative">
                <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-indigo-100 rounded-full opacity-30"></div>

                <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center relative">
                  <Users className="w-6 h-6 mr-3 text-indigo-600" />
                  About the Creator
                </h2>
                <div className="flex items-start space-x-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-indigo-900 mb-2 text-xl">
                      {assistant.creator.name}
                    </h3>
                    <p className="text-indigo-600 mb-6 text-lg">
                      {assistant.creator.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center border border-indigo-100">
                        <Users className="w-5 h-5 text-indigo-600 mr-3" />
                        <div>
                          <div className="text-indigo-600 text-sm">
                            Total Clients
                          </div>
                          <div className="text-indigo-900 font-medium">
                            {assistant.creator.stats?.clients || "1,000+"}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg flex items-center border border-indigo-100">
                        <Star className="w-5 h-5 text-indigo-600 mr-3" />
                        <div>
                          <div className="text-indigo-600 text-sm">
                            Creator Rating
                          </div>
                          <div className="text-indigo-900 font-medium">
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

      {/* Modern footer with gradient */}
      <footer className="mt-12 py-8 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm">
              &copy; {new Date().getFullYear()} AI Assistant Marketplace. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/90 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-white/90 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-white/90 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-4 text-indigo-600 font-medium">
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
