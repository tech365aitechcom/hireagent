"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Star,
  Award,
  Users,
  Zap,
  ArrowLeft,
  ArrowRight,
  BarChart,
} from "lucide-react";
import Link from "next/link";

// MarketStats Component
const MarketStats = () => {
  const stats = [
    {
      value: "1,000+",
      label: "AI Agents",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
    },
    {
      value: "50K+",
      label: "Active Users",
      icon: <Users className="h-5 w-5 text-green-500" />,
    },
    {
      value: "$2M+",
      label: "Creator Earnings",
      icon: <BarChart className="h-5 w-5 text-purple-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-gray-50 rounded-lg p-3">{stat.icon}</div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// CategoryCard Component
const CategoryCard = ({ title, count, color, icon: Icon }) => (
  <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 flex items-center space-x-3">
    <div
      className={`${color} w-10 h-10 rounded-lg flex items-center justify-center`}
    >
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{count} agents</p>
    </div>
  </div>
);

// CreatorCard Component
const CreatorCard = ({ name, expertise, image, rating, agents }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{expertise}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2 mb-3">
      <Star className="h-4 w-4 text-yellow-400 fill-current" />
      <span className="text-sm text-gray-600">{rating} rating</span>
    </div>
    <p className="text-sm text-gray-600">{agents} published agents</p>
  </div>
);

// HeroSlider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Build Once. Earn Forever.",
      subtitle:
        "Join the leading marketplace for AI agents. Turn your expertise into recurring revenue.",
      cta: "Start Creating Today",
      ctaLink: "#",
      alignment: "center",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      title: "Transform Your Business with AI",
      subtitle:
        "Access premium AI agents built by experts. Automate and scale with verified solutions.",
      cta: "Explore Agents",
      ctaLink: "#",
      alignment: "left",
      gradient: "from-green-50 to-teal-50",
    },
    {
      title: "Join Our Creator Community",
      subtitle:
        "Connect with AI experts, share knowledge, and build the future together.",
      cta: "Join Community",
      ctaLink: "#",
      alignment: "right",
      gradient: "from-purple-50 to-pink-50",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className={`relative min-h-[600px] bg-gradient-to-br ${slide.gradient}`}
    >
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-${slide.alignment} max-w-3xl mx-auto`}>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 transition-all duration-500">
            {slide.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 transition-all duration-500">
            {slide.subtitle}
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            {slide.cta}
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-blue-600 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  const categories = [
    {
      title: "Customer Service",
      count: "150+",
      color: "bg-blue-500",
      icon: Users,
    },
    {
      title: "Data Analysis",
      count: "200+",
      color: "bg-purple-500",
      icon: Zap,
    },
    {
      title: "Content Creation",
      count: "180+",
      color: "bg-green-500",
      icon: Star,
    },
    {
      title: "Sales & Marketing",
      count: "120+",
      color: "bg-red-500",
      icon: Award,
    },
  ];

  const creators = [
    {
      name: "Sarah Chen",
      expertise: "ML/AI Specialist",
      image: "/api/placeholder/150/150",
      rating: 4.9,
      agents: "12",
    },
    {
      name: "Michael Ross",
      expertise: "NLP Expert",
      image: "/api/placeholder/150/150",
      rating: 4.8,
      agents: "8",
    },
    {
      name: "Lisa Kumar",
      expertise: "Automation Engineer",
      image: "/api/placeholder/150/150",
      rating: 4.9,
      agents: "15",
    },
    {
      name: "David Wilson",
      expertise: "AI Solutions Architect",
      image: "/api/placeholder/150/150",
      rating: 4.7,
      agents: "10",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">AIMarket</span>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <Link
                    href="/all-agents"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Browse Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Sell Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2"
                  >
                    Community
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Search Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex">
            <button className="flex items-center space-x-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg px-4 py-3">
              <span>All Categories</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search AI agents..."
                className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Market Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MarketStats />
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>

      {/* Featured Creators */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Top Creators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from the best in the industry. Our top creators are building
              the future of AI automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((creator, index) => (
              <CreatorCard key={index} {...creator} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you're building or buying, join our community today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            Become a Creator
          </button>
          <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg">
            Browse Agents
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
