import React from "react";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    {
      name: "Human-Like AI Conversations",
      callSpot: "Engages with natural, empathetic communication",
      traditional: "Often robotic or overly scripted interactions",
    },
    {
      name: "24/7 Availability",
      callSpot: "Operates round the clock without interruptions",
      traditional: "Limited by working hours and agent availability",
    },
    {
      name: "Scalability",
      callSpot: "Effortlessly handles thousands of calls simultaneously",
      traditional: "Requires significant hiring and resources for scaling",
    },
    {
      name: "Cost Efficiency",
      callSpot: "Reduces costs with AI-driven solutions",
      traditional: "High overhead and operational expenses",
    },
    {
      name: "Personalization",
      callSpot: "Tailored interactions based on customer data",
      traditional: "Limited personalization capabilities",
    },
    {
      name: "Real-Time Insights",
      callSpot: "Provides actionable analytics and feedback",
      traditional: "Limited tracking and reporting features",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 text-center mb-6">
          Compare White Label AI Solutions
        </h1>
        <p className="text-center text-lg text-indigo-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Your clients rely on you to provide innovative solutions, and{" "}
          <span className="font-semibold text-blue-600">HireAgent</span>{" "}
          delivers exactly that. With flexible, AI-powered solutions, built for
          agencies and priced to scale, you can revolutionize customer
          interactions and elevate your business growth.
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
                  <span className="text-blue-900">{feature.callSpot}</span>
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
