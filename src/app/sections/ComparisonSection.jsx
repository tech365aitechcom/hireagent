import React from "react";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    {
      name: "24/7 Customer Support",
      hireAgent: "Instant responses to inquiries, anytime",
      traditional: "Limited to office hours",
    },
    {
      name: "AI-Powered Matching",
      hireAgent: "Tailored matches based on client preferences",
      traditional: "Manual search required",
    },
    {
      name: "Automated Scheduling",
      hireAgent: "Integrated calendar with instant booking capabilities",
      traditional: "Time-consuming coordination",
    },
    {
      name: "Multi-Channel Follow-Ups",
      hireAgent: "Seamless follow-ups via email and SMS",
      traditional: "Inconsistent or manual processes",
    },
    {
      name: "Advanced Lead Tracking",
      hireAgent: "Smart lead capture with detailed preference insights",
      traditional: "Basic data collection",
    },
    {
      name: "Unlimited Scalability",
      hireAgent: "Handles simultaneous inquiries without delays",
      traditional: "Restricted by staff availability",
    },
    {
      name: "Cost-Effective Operations",
      hireAgent: "Predictable pricing with no extra costs",
      traditional: "Expensive with high staffing needs",
    },
    {
      name: "Integrated Data Management",
      hireAgent: "Automatic sync with CRM and spreadsheets",
      traditional: "Manual data input required",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 text-center mb-6">
          Your AI-Powered Real Estate Partner
        </h1>
        <p className="text-center text-lg text-indigo-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transform how you handle property inquiries, scheduling, and client
          follow-ups with our intelligent real estate assistant. Built
          specifically for real estate professionals, by real estate
          experts.Transform how you handle property inquiries, scheduling, and
          client follow-ups with our intelligent real estate assistant. Built
          specifically for real estate professionals, by real estate experts.
        </p>

        <div className="overflow-hidden rounded-2xl border border-indigo-100 shadow-xl bg-white">
          <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
            <div className="p-6 font-semibold text-lg">Feature</div>
            <div className="p-6 font-semibold text-lg border-l border-indigo-700">
              HireAgent
            </div>
            <div className="p-6 font-semibold text-lg border-l border-indigo-700">
              Traditional Call Services
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-t border-indigo-100 hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="p-6 font-semibold text-indigo-900">
                {feature.name}
              </div>
              <div className="p-6 border-l border-indigo-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-blue-900">{feature.hireAgent}</span>
                </div>
              </div>
              <div className="p-6 border-l border-indigo-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <X className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-indigo-600">{feature.traditional}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
