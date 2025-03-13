"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const AllCreators = () => {
  const [creators, setCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:7009/api/creator/getAllCreators"
        );
        if (response.data.success) {
          const sortedCreators = response.data.data.sort(
            (a, b) => b.stats.totalRevenue - a.stats.totalRevenue
          );
          setCreators(sortedCreators);
        } else {
          setError("Failed to fetch creators data");
        }
      } catch (err) {
        setError("Error fetching creators: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreators();
  }, []);

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

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Our Creators
          </h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Meet the brilliant minds behind our AI solutions and custom bots.
            These creators are transforming businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 transform transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="text-blue-800 text-xl font-semibold">
                Total Creators
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-blue-900">
              {creators.length}
            </div>
            <div className="text-blue-500 text-sm">AI developers</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 transform transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="text-blue-800 text-xl font-semibold">
                Active Bots
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-blue-900">
              {creators.reduce(
                (total, creator) => total + (creator.stats?.activeBots || 0),
                0
              )}
            </div>
            <div className="text-blue-500 text-sm">Deployed and running</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 transform transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="text-blue-800 text-xl font-semibold">
                Total Revenue
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-blue-900">
              $
              {creators
                .reduce(
                  (total, creator) =>
                    total + (creator.stats?.totalRevenue || 0),
                  0
                )
                .toLocaleString()}
            </div>
            <div className="text-blue-500 text-sm">Revenue generated</div>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
            <p>{error}</p>
          </div>
        ) : creators.length === 0 ? (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 p-6 rounded-lg text-center">
            <svg
              className="w-12 h-12 text-blue-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2">No Creators Found</h3>
            <p>We don't have any creators in our database yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creators.map((creator, index) => (
              <div
                key={creator._id || index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transform transition-all hover:shadow-xl"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-24 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gray-100 rounded-full border-4 border-white flex items-center justify-center text-blue-800 font-bold text-2xl">
                      {creator.name.charAt(0)}
                    </div>
                    {creator.verificationStatus === "Verified" && (
                      <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1">
                        <svg
                          className="w-4 h-4 text-white"
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
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {creator.name}
                      </h3>
                      <div className="flex mt-1">
                        {renderVerificationBadge(creator.verificationStatus)}
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 px-3 py-1 rounded-lg">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1 text-blue-800 font-semibold">
                        {creator.stats?.rating || "New"}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-600 mb-1">Revenue</p>
                      <p className="text-lg font-bold text-blue-800">
                        ${creator.stats?.totalRevenue?.toLocaleString() || 0}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-600 mb-1">Active Bots</p>
                      <p className="text-lg font-bold text-blue-800">
                        {creator.stats?.activeBots || 0}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-600 mb-1">Clients</p>
                      <p className="text-lg font-bold text-blue-800">
                        {creator.stats?.clients || 0}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-600 mb-1">Support</p>
                      <p className="text-lg font-bold text-blue-800">
                        {creator.stats?.support || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-blue-800 font-medium mb-2">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {creator.expertise && creator.expertise.length > 0 ? (
                        creator.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-xs italic">
                          No expertise listed
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/all-creators/${creator._id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCreators;
