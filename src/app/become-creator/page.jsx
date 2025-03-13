"use client";
import React, { useEffect, useState } from "react";
import EnquiryFormModal from "../components/EnquiryForm";
import CreatorRegisterModal from "../components/CreatorRegisterModal";
import { baseURL } from "../urls";
import axios from "axios";
import { UserCircle, Trophy, Star, Package } from "lucide-react";
import Link from "next/link";

const CreatorLandingPage = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseURL}/api/assistants/getTopCreators`
        );
        setCreators(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load creators data");
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const stats = [
    { value: "10,000+", label: "Active Creators" },
    { value: "5M+", label: "End Users Reached" },
    { value: "$12M", label: "Creator Earnings" },
    { value: "93%", label: "Satisfaction Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "AI Developer",
      company: "TechInnovate",
      content:
        "This platform transformed my career. I built my first AI assistant in under a week and now have over 50,000 active users generating consistent revenue.",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Michael Chen",
      role: "Content Creator",
      company: "Digital Minds",
      content:
        "The tools are intuitive yet powerful. I had no coding experience, but I was able to create an AI assistant that perfectly complements my online courses.",
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Priya Sharma",
      role: "Entrepreneur",
      company: "AI Solutions",
      content:
        "I've tried other platforms, but nothing compares. The monetization options are flexible, and the community support is incredible. My AI assistants now generate 40% of my business revenue.",
      avatar: "/api/placeholder/64/64",
    },
  ];

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-16">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-red-50 text-red-500 p-4 rounded-lg text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full px-4 py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Become an AI <span className="text-blue-200">Creator</span>
              <br />
              <span className="text-blue-200">Shape</span> the Future
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Join our elite community of innovators who are building the next
              generation of AI assistants and transforming industries worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-lg"
              >
                Start Creating Now
              </button>
              {/* <button className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
                Watch Demo
              </button> */}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-400 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-300 rounded-full opacity-30 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl p-8">
                <div className="w-full h-72 bg-gradient-to-br from-blue-400/80 to-blue-600/80 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-40 w-40 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    <path d="M12 2a2 2 0 0 1 2 2"></path>
                    <path d="M19.9 7.8A8.8 8.8 0 0 1 12 20.8"></path>
                    <path d="M4.1 7.8A8.8 8.8 0 0 0 12 20.8"></path>
                  </svg>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-5 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="flex justify-end mt-4">
                    <div className="h-8 w-24 bg-blue-200/30 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Your Creator Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to profit, we provide everything you need to build
              successful AI assistants
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">
                  1
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Build
                </h3>
                <p className="text-gray-600">
                  Use our intuitive platform to create your AI assistant with no
                  coding required.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">
                  2
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Launch
                </h3>
                <p className="text-gray-600">
                  Deploy your AI assistant to our marketplace or integrate it
                  with your existing platforms.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">
                  3
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Grow
                </h3>
                <p className="text-gray-600">
                  Leverage our marketing tools and analytics to expand your user
                  base.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">
                  4
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Profit
                </h3>
                <p className="text-gray-600">
                  Earn revenue through subscriptions, usage-based pricing, or
                  custom enterprise deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Powerful Creator Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, deploy, and monetize sophisticated
              AI assistants
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                AI Studio
              </h3>
              <p className="text-gray-600">
                Our drag-and-drop interface lets you build complex AI workflows
                without writing a single line of code.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                Revenue Engine
              </h3>
              <p className="text-gray-600">
                Multiple monetization options including subscriptions,
                pay-per-use, and enterprise licensing with built-in payment
                processing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Comprehensive metrics on usage, user engagement, and revenue to
                help you optimize your AI assistants.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Elite Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the brilliant minds behind our most impressive products and
              services, consistently delivering excellence to our clients.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {creators.map((creator, index) => (
                <div
                  key={creator._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="bg-blue-600 h-3 w-full"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <UserCircle className="h-10 w-10 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                          {creator._id}
                        </h3>
                        <p className="text-blue-500 text-sm">
                          {index === 0 ? "Lead Creator" : "Featured Creator"}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <Package className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-blue-700 font-medium">
                          Products
                        </p>
                        <p className="text-lg font-bold text-blue-900">
                          {creator.productsCount}
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <Star className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-blue-700 font-medium">
                          Rating
                        </p>
                        <p className="text-lg font-bold text-blue-900">
                          {creator.avgRating || "New"}
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <Trophy className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-blue-700 font-medium">
                          Clients
                        </p>
                        <p className="text-lg font-bold text-blue-900">
                          {creator.totalClients}
                        </p>
                      </div>
                    </div>
                    <button className="w-full py-2 px-4 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-colors duration-300 font-medium text-sm flex items-center justify-center">
                      View Profile
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={"/all-creators"}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Explore All Creators
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from creators who have transformed their ideas into thriving
              AI businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-blue-50"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400 inline"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Ideas into AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of creators who are already building the future of AI
            assistants. Get started today with our 14-day free trial and see
            your vision come to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-lg"
            >
              Become a Creator
            </button>
            <button
              onClick={() => setIsModalOpen1(true)}
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 text-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <EnquiryFormModal
        isOpen={isModalOpen1}
        onClose={() => setIsModalOpen1(false)}
      />
      <CreatorRegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CreatorLandingPage;
