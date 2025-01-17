"use client";
import { ArrowRight, Star, Users, Calendar, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import Assistant from "../components/Assistant";
import { existingCard } from "../page";
import AssistantDescriptionModal2 from "../components/AssistantDescriptionModal2";

const TryAssistantComp2 = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("aiId");
  const [activeCard, setActiveCard] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const [aiId, setAIId] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser || {});
      } catch (error) {
        console.error("Failed to parse user profile from localStorage:", error);
        setUser({});
      }
    } else {
      setUser({});
    }
  }, []);

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    setAuthToken(storedAuthToken);
  }, []);

  useEffect(() => {
    if (id !== "null") {
      setAIId(id);
      setActiveCard(id);
    }
  }, [id]);

  return (
    <div className="bg-gray-50 py-16" id="try-assistant">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Assistants
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our range of AI-powered assistants designed to streamline
          your workflow
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(existingCard).map(
            ([name, { id, features, desc, testStep }]) => (
              <div
                key={id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-[200px] relative flex items-center justify-center flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1498373419901-52eba931dc4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={name}
                    className="w-full h-full object-cover opacity-75 mix-blend-overlay"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">4.8</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {name}
                    </h3>
                    <p className="text-gray-600">
                      Automated listing inquiries and property details
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Monthly Leads</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        300+
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Best For</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        Brokerages
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer section - fixed height */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-6">
                    {/* <div className="flex items-baseline">
                      <span className="text-sm text-gray-500">From</span>
                      <span className="text-2xl font-bold text-gray-900 ml-2">
                        $20
                      </span>
                      <span className="text-gray-500 ml-1">/mo</span>
                    </div> */}
                    <button
                      onClick={() =>
                        (window.location.href = `/schedule-meeting?aiId=${id}#try-assistant`)
                      }
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
                    >
                      Try Free
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {activeCard === id && (
                  <AssistantDescriptionModal2
                    setActiveCard={() => setActiveCard(null)}
                    setShowAssistant={() => setShowAssistant(true)}
                    name={name}
                    authToken={authToken}
                    desc={desc}
                    testStep={testStep}
                    aiId={aiId}
                    user={user}
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>

      {showAssistant && <Assistant id={aiId} authToken={authToken} />}
    </div>
  );
};

const TryAssistant2 = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TryAssistantComp2 />
    </Suspense>
  );
};

export default TryAssistant2;
