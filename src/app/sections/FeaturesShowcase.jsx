import React from "react";
import { Check, Home, Calendar, MessageCircle } from "lucide-react";

const FeaturesShowcase = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
            All-in-One AI-Powered Call and Customer Engagement Solution
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative z-10">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg opacity-50"></div>
              <Home className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                Smart Property Matching
              </h2>
              <div className="text-lg text-indigo-700 leading-relaxed">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Capture detailed property preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Instant property recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Detailed property information sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Real-time availability updates</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-sm mx-auto group">
              <div className="absolute inset-0 bg-indigo-900 rounded-2xl rotate-3 opacity-10 transition-transform duration-500 group-hover:rotate-180"></div>
              <img
                src="/property.jpg"
                alt="Support Dashboard"
                className="relative rounded-2xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-sm mx-auto group">
              <div className="absolute inset-0 bg-blue-900 rounded-2xl -rotate-3 opacity-10 transition-transform duration-500 group-hover:rotate-180"></div>
              <img
                src="/schedule.jpg"
                alt="Marketing Dashboard"
                className="relative rounded-2xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative z-10">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg opacity-50"></div>
              <Calendar className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                Seamless Scheduling
              </h2>
              <div className="text-lg text-indigo-700 leading-relaxed">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Google Calendar integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Real-time availability checks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Automated appointment confirmation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Reminder system for viewings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative z-10">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-lg opacity-50"></div>
              <MessageCircle className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                Multi-Channel Communication
              </h2>
              <div className="text-lg text-indigo-700 leading-relaxed">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Automated email follow-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>SMS confirmations and reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Lead capture in CRM/Google Sheets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Personalized communication</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-sm mx-auto group">
              <div className="absolute inset-0 bg-indigo-900 rounded-2xl rotate-3 opacity-10 transition-transform duration-500 group-hover:rotate-180"></div>
              <img
                src="/comms.jpg"
                alt="Sales Dashboard"
                className="relative rounded-2xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
