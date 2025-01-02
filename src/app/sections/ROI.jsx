"use client";
import React, { useState } from "react";

const ROI = () => {
  const [missedCalls, setMissedCalls] = useState(20);
  const [dealValue, setDealValue] = useState(10000);
  const dealConversionRate = 0.015;
  const aiAssistantCost = 500;

  const additionalRevenue = Math.round(
    missedCalls * dealConversionRate * dealValue
  );

  const roi = Math.round(
    ((additionalRevenue - aiAssistantCost) / aiAssistantCost) * 100
  );

  return (
    <div className="py-8 md:py-20 bg-gray-50 border-y">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
            Calculate Your Revenue Potential
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            See how much more you could earn by never missing a lead
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="font-semibold mb-4">Your Current Numbers</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Average Monthly Missed Calls
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="20"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Average Deal Value
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="$10,000"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 md:p-6">
              <h3 className="font-semibold mb-4">
                Your Potential with AI Assistant
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <span className="text-sm md:text-base mb-1 md:mb-0">
                    Additional Monthly Revenue
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-blue-600">
                    ${additionalRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <span className="text-sm md:text-base mb-1 md:mb-0">ROI</span>
                  <span className="text-xl md:text-2xl font-bold text-green-600">
                    {roi.toLocaleString()}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROI;
