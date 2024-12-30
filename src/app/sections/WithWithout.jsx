import React from "react";
import { CheckCircle } from "lucide-react";

const ComparisonSection = () => {
  const withoutAI = [
    "Miss leads while with clients or sleeping",
    "Manually schedule and reschedule viewings",
    "Waste time on unqualified leads",
    "Limited to working hours only",
    "Risk losing leads to faster-responding agents",
  ];

  const withAI = [
    "Never miss a lead - 24/7 instant response",
    "Automated scheduling synced to your calendar",
    "Smart lead qualification before your involvement",
    "Work around the clock automatically",
    "Always first to respond to new leads",
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Without vs. With AI Assistant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Without AI Section */}
          <div className="p-6 md:p-8 bg-gray-50 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-500">
              Without AI Assistant
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {withoutAI.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start md:items-center text-gray-500 text-sm md:text-base"
                >
                  <span className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 md:mt-0">
                    ✗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With AI Section */}
          <div className="p-6 md:p-8 bg-blue-50 rounded-lg border-2 border-blue-600">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-blue-900">
              With AI Assistant
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {withAI.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start md:items-center text-blue-900 text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5 md:mt-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
