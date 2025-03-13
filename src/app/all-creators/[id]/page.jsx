"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const CreatorDetailsPage = () => {
  const params = useParams();
  const creatorId = params?.id || "";

  const [creator, setCreator] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(creatorId, "raju");

  useEffect(() => {
    const fetchCreatorDetails = async () => {
      if (!creatorId) {
        setError("Creator ID not found");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:7009/api/creator/getCreator?id=${creatorId}`
        );

        if (response.data.success) {
          setCreator(response.data.data);
        } else {
          setError("Failed to fetch creator details");
        }
      } catch (err) {
        setError("Error fetching creator: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreatorDetails();
  }, [creatorId]);

  // Function to render verification badge
  const renderVerificationBadge = (status) => {
    if (status === "Verified") {
      return (
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
          <svg
            className="w-3 h-3 mr-1 text-blue-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          Verified
        </span>
      );
    } else {
      return (
        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {status}
        </span>
      );
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 flex justify-center items-center">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded max-w-xl w-full">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 flex justify-center items-center">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-6 rounded max-w-xl w-full">
          <h2 className="text-xl font-bold mb-2">Creator Not Found</h2>
          <p>
            We couldn't find the creator you're looking for. Please check the
            URL and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with profile info */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 md:w-1/3 p-8 text-center">
              <div className="inline-block relative">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-blue-800 font-bold text-5xl mx-auto">
                  {creator.name.charAt(0)}
                </div>
                {creator.verificationStatus === "Verified" && (
                  <div className="absolute bottom-0 right-8 bg-blue-600 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
              <h1 className="text-white text-3xl font-bold mt-4">
                {creator.name}
              </h1>
              <div className="inline-block mt-2 bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                {renderVerificationBadge(creator.verificationStatus)}
              </div>
              <div className="mt-4 text-white/80">
                Member since {formatDate(creator.joinDate)}
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <div className="md:flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Creator Profile
                  </h2>
                  <p className="text-blue-600">{creator.email}</p>
                </div>

                <div className="mt-4 md:mt-0 flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="ml-1 text-blue-800 font-semibold text-lg">
                    {creator.stats?.rating || "New"}
                  </span>
                </div>
              </div>

              {creator.description ? (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    About
                  </h3>
                  <p className="text-gray-700">{creator.description}</p>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-700 italic">
                    No description available
                  </p>
                </div>
              )}

              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-blue-600 mb-1">Total Sales</p>
                    <p className="text-xl font-bold text-blue-800">
                      {creator.stats?.totalSales || 0}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-blue-600 mb-1">Revenue</p>
                    <p className="text-xl font-bold text-blue-800">
                      ${creator.stats?.totalRevenue?.toLocaleString() || 0}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-blue-600 mb-1">Active Bots</p>
                    <p className="text-xl font-bold text-blue-800">
                      {creator.stats?.activeBots || 0}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-blue-600 mb-1">Clients</p>
                    <p className="text-xl font-bold text-blue-800">
                      {creator.stats?.clients || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Expertise</h2>

          {creator.expertise && creator.expertise.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {creator.expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700 italic">No expertise listed</p>
            </div>
          )}
        </div>

        {/* Products */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Products</h2>

          {creator.products && creator.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creator.products.map((product, idx) => (
                <div
                  key={idx}
                  className="border border-blue-100 rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="bg-blue-600 h-40 flex items-center justify-center">
                    <span className="text-white text-6xl opacity-30">AI</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">
                      {product.description || "No description available"}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold text-blue-900">
                        ${product.price}
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700 italic">No products available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorDetailsPage;
