"use client";
import React from "react";
import {
  Star,
  Play,
  Phone,
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PropertyMateLanding = () => {
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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                PropertyMate AI Assistant Pro
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your 24/7 digital partner for lead capture, scheduling, and
                customer service
              </p>

              <div className="flex items-center mb-6">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <span className="ml-2 text-gray-700">4.9 (128 reviews)</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-700">500+ active users</span>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  $499
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-3">
                  Start Free Trial
                </button>
                <p className="text-sm text-gray-600 text-center">
                  30-day free trial • No credit card required
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Unlimited calls & inquiries",
                  "Property details automation",
                  "24/7 availability",
                  "Multi-language support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-gray-900 rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white opacity-80" />
                </div>
                <img
                  src="/api/placeholder/800/450"
                  alt="Demo video placeholder"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Core Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Lead Management",
                features: [
                  "Instant call response",
                  "Lead qualification",
                  "Contact information capture",
                  "Priority scoring",
                ],
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Smart Scheduling",
                features: [
                  "Automated booking",
                  "Calendar integration",
                  "Reminder system",
                  "Conflict prevention",
                ],
              },
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Property Details",
                features: [
                  "Instant information",
                  "Photo sharing",
                  "Price negotiations",
                  "Feature highlights",
                ],
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-600"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Integrations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Salesforce", "Google Calendar", "Gmail", "MLS Listing"].map(
              (integration) => (
                <div
                  key={integration}
                  className="bg-gray-100 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg"></div>
                  <h3 className="font-medium text-gray-900">{integration}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Use</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your account and start free trial",
              },
              {
                step: "2",
                title: "Connect",
                desc: "Integrate with your systems",
              },
              {
                step: "3",
                title: "Customize",
                desc: "Set up your preferences",
              },
              { step: "4", title: "Launch", desc: "Go live in minutes" },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-semibold">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Creator */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            About the Creator
          </h2>

          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h3 className="font-bold text-lg">AI Solutions Ltd</h3>
              <p className="text-gray-600">
                Leading provider of AI solutions for real estate professionals.
                Created by a team of AI experts and real estate veterans.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyMateLanding;
