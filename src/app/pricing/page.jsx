"use client";
import React, { useState, useEffect } from "react";
import { baseURL } from "../urls";

const Check = () => (
  <svg
    className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PricingCards = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [user, setUser] = useState(null);

  const userId = user?._id || "User ID not available";

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();

    const userPaymentDetails = JSON.parse(
      localStorage.getItem("paymentDetails")
    );
    const storedUser = localStorage.getItem("userProfile");
    setUser(JSON.parse(storedUser));

    if (userPaymentDetails && userPaymentDetails.hasPaid) {
      setHasPaid(true);
    }
  }, []);

  const handlePayment = async (price, planId) => {
    const amount = price;

    const response = await fetch(`${baseURL}/api/plans/createOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount, planId }),
    });

    const data = await response.json();
    if (!data.success) {
      return alert("Failed to create Razorpay order");
    }

    const { order } = data;

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      amount: order.amount,
      currency: "USD",
      name: "HireAgent",
      description: "Transaction",
      image: "/logo.png",
      order_id: order.id,
      handler: async (response) => {
        const verifyResponse = await fetch(
          `${baseURL}/api/plans/verifyPayment`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId,
              amount,
            }),
          }
        );

        const verifyData = await verifyResponse.json();
        if (verifyData.success) {
          alert("Payment Successful!");
          localStorage.setItem(
            "paymentDetails",
            JSON.stringify({ hasPaid: true })
          );
          router.push("/");
        } else {
          alert("Payment verification failed. Please try again.");
        }
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
      theme: {
        color: "#1D4ED8",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${baseURL}/api/plans/getAllPlans`);
        const result = await response.json();
        setPlans(result.data.sort((a, b) => a.price - b.price));
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center w-full py-14">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Select the plan that best fits your needs. Upgrade or downgrade at
            any time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isFreePlan = plan.id === "free";
            return (
              <div
                key={plan._id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-2xl bg-white transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? "ring-4 ring-blue-500 shadow-xl"
                    : "ring-1 ring-gray-200 shadow-lg hover:shadow-xl"
                } ${isFreePlan ? "ring-4 ring-blue-500" : ""}`}
              >
                {isFreePlan && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
                      Default Plan
                    </span>
                  </div>
                )}
                <div className="text-center p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-gray-500 text-base sm:text-lg">
                      /month
                    </span>
                  </div>

                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-start">
                      <Check />
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold">{plan.credits}</span>{" "}
                        credits included
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check />
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold">
                          {plan.callDuration}
                        </span>{" "}
                        minutes call duration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check />
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold">
                          {plan.creditsUsedPerMin}
                        </span>{" "}
                        credits per minute
                      </span>
                    </li>
                  </ul>
                  <button
                    onClick={() => handlePayment(plan.price, plan.price)}
                    className={`w-full rounded-xl py-3 sm:py-4 px-4 sm:px-6 font-semibold text-base sm:text-lg transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-700 hover:bg-blue-800 text-white shadow-lg"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                    } ${isFreePlan ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isFreePlan}
                  >
                    {isSelected
                      ? "Selected Plan"
                      : isFreePlan
                      ? "Default Plan"
                      : "Select Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
