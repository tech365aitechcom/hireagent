import { Calendar, MessageCircle, Phone } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Everything You Need to Automate Your Real Estate Business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <Phone className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              24/7 Lead Response
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Never miss an inquiry. Instant response to property questions, any
              time of day.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <Calendar className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Automated Scheduling
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Let buyers book viewings directly into your calendar without your
              intervention.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Lead Qualification
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Pre-qualify leads by asking the right questions before they reach
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
