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

const MarketStats = () => {
  const stats = [
    {
      value: "1,000+",
      label: "AI Agents",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
    {
      value: "50K+",
      label: "Active Users",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      value: "$2M+",
      label: "Creator Earnings",
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden border border-blue-100"
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id={`grid-${index}`}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-blue-200"
                />
              </pattern>
              <rect width="100" height="100" fill={`url(#grid-${index})`} />
            </svg>
          </div>

          <div className="flex items-center space-x-6 relative">
            <div className="bg-white rounded-lg p-4 shadow-sm transform group-hover:scale-105 transition-transform duration-300 border border-blue-50">
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-light tracking-tight text-blue-900 mb-1">
                {stat.value}
              </p>
              <p className="text-blue-600 tracking-wide text-sm font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CategoryCard = ({ title, count, icon: Icon }) => (
  <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg border border-blue-100 p-6 hover:shadow-lg transition-all duration-300 group flex items-center space-x-4">
    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-300 shadow-sm">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 rounded-lg opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="gridPattern"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-white"
            />
          </pattern>
          <rect width="40" height="40" fill="url(#gridPattern)" />
        </svg>
      </div>
      <Icon className="h-6 w-6 text-white relative" />
    </div>

    <div className="space-y-1">
      <h3 className="font-light text-lg tracking-tight text-blue-900">
        {title}
      </h3>
      <p className="text-sm text-blue-600 tracking-wide font-medium">
        {count.toLocaleString()} agents
      </p>
    </div>
  </div>
);

const CreatorCard = ({ name, expertise, image, rating, agents }) => (
  <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg border border-blue-100 p-8 hover:shadow-lg transition-all duration-300 group">
    <div className="flex items-center space-x-6 mb-6">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover relative border-2 border-white shadow-sm"
        />
      </div>
      <div>
        <h3 className="font-light text-xl tracking-tight text-blue-900 mb-1">
          {name}
        </h3>
        <p className="text-blue-600 text-sm tracking-wide font-medium">
          {expertise}
        </p>
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex items-center space-x-2 pb-4 border-b border-blue-100">
        <Star className="h-4 w-4 text-blue-600 fill-current" />
        <span className="text-sm text-blue-600 tracking-wide font-medium">
          {rating} creator rating
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-blue-600 tracking-wide font-medium">
          {agents} published agents
        </span>
        <button className="text-sm text-blue-900 font-medium hover:text-blue-700 transition-colors">
          View Profile →
        </button>
      </div>
    </div>
  </div>
);

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Build Once. Earn Forever.",
      subtitle:
        "Join the leading marketplace for AI agents. Turn your expertise into recurring revenue.",
      cta: "Start Creating Today",
      ctaLink: "#",
    },
    {
      title: "Transform Your Business with AI",
      subtitle:
        "Access premium AI agents built by experts. Automate and scale with verified solutions.",
      cta: "Explore Agents",
      ctaLink: "#",
    },
    {
      title: "Join Our Creator Community",
      subtitle:
        "Connect with AI experts, share knowledge, and build the future together.",
      cta: "Join Community",
      ctaLink: "#",
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
    <div className="relative min-h-[600px] bg-gradient-to-br from-white to-blue-50 flex items-center justify-center overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-48 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Elegant Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-blue-200"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Subtle Animated Lines */}
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="15"
            x2="100"
            y2="15"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-blue-400"
          >
            <animate
              attributeName="y1"
              from="15"
              to="16"
              dur="3s"
              repeatCount="indefinite"
              values="15; 16; 15"
            />
            <animate
              attributeName="y2"
              from="15"
              to="14"
              dur="3s"
              repeatCount="indefinite"
              values="15; 14; 15"
            />
          </line>
        </svg>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-10">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm shadow-sm transition-all hover:shadow-md"
        >
          <ArrowLeft className="h-5 w-5 text-blue-600" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm shadow-sm transition-all hover:shadow-md"
        >
          <ArrowRight className="h-5 w-5 text-blue-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-light text-blue-900 mb-6 transition-all duration-500 tracking-tight">
            {slide.title}
          </h1>
          <p className="text-lg text-blue-600 mb-8 transition-all duration-500 leading-relaxed font-medium">
            {slide.subtitle}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md text-sm font-medium tracking-wide">
            {slide.cta}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-1 bg-blue-600"
                : "w-2 h-1 bg-blue-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const categories = [
    {
      title: "Customer Service",
      count: "150+",
      icon: Users,
    },
    {
      title: "Data Analysis",
      count: "200+",
      icon: Zap,
    },
    {
      title: "Content Creation",
      count: "180+",
      icon: Star,
    },
    {
      title: "Sales & Marketing",
      count: "120+",
      icon: Award,
    },
  ];

  const creators = [
    {
      name: "Sarah Chen",
      expertise: "ML/AI Specialist",
      image:
        "https://unsplash.com/photos/a-man-with-a-bald-head-wearing-glasses-paYQUpAiBqs",
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
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-light tracking-tight text-blue-900">
                AIMarket
              </span>
              <div className="hidden md:block ml-12">
                <div className="flex space-x-8">
                  <Link
                    href="/all-agents"
                    className="text-blue-600 hover:text-blue-900 transition-colors text-sm tracking-wide font-medium"
                  >
                    Browse Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-900 transition-colors text-sm tracking-wide font-medium"
                  >
                    Sell Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-900 transition-colors text-sm tracking-wide font-medium"
                  >
                    Community
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-blue-600 hover:text-blue-900 transition-colors text-sm tracking-wide font-medium">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md text-sm tracking-wide">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </nav>
      <HeroSlider />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 border border-blue-100">
          <div className="flex">
            <button className="flex items-center space-x-2 bg-blue-50 border border-r-0 border-blue-100 rounded-l-lg px-4 py-3 text-sm tracking-wide text-blue-600 font-medium">
              <span>All Categories</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search AI agents..."
                className="w-full px-4 py-3 border border-blue-100 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MarketStats />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-light text-blue-900 mb-8 tracking-tight">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-blue-900 mb-4 tracking-tight">
              Meet Our Top Creators
            </h2>
            <p className="text-blue-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Learn from the best in the industry. Our top creators are building
              the future of AI automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creators.map((creator, index) => (
              <CreatorCard key={index} {...creator} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-light text-blue-900 mb-4 tracking-tight">
          Ready to Start?
        </h2>
        <p className="text-blue-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-medium">
          Whether you're building or buying, join our community today.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md text-sm tracking-wide">
            Become a Creator
          </button>
          <button className="bg-blue-50 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors text-sm tracking-wide border border-blue-100">
            Browse Agents
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
