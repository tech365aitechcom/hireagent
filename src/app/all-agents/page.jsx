"use client";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Search, Layout, Boxes, Robot, Zap } from "lucide-react";
import { baseURL } from "../urls";
import { useSearchParams, useRouter } from "next/navigation";
import { ScheduleMeetingModal } from "../components/ScheduleMeeting";
import AssisstantCard from "../components/AssisstantCard";

const HeroBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-blue-600" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  </div>
);

const AICatalog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [assistants, setAssistants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState(searchQuery || "");
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assistantsRes, categoriesRes] = await Promise.all([
          axios.get(
            searchQuery
              ? `${baseURL}/api/assistants/getAssistantDetails?search=${searchQuery}`
              : `${baseURL}/api/assistants/getAssistantDetails`
          ),
          axios.get(`${baseURL}/api/assistants/getCategoryCounts`),
        ]);
        setAssistants(assistantsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`?search=${searchTerm}`);
  };

  const filteredAssistants = assistants.filter(
    (assistant) =>
      selectedCategory === "All Categories" ||
      assistant.category === selectedCategory
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-blue-600">
        <HeroBackground />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                AI Assistant Marketplace
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-12">
                Discover and integrate powerful AI assistants to streamline your
                workflow. Choose from our curated collection of specialized AI
                tools designed to enhance productivity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">
                    {assistants.length}+
                  </div>
                  <div className="text-blue-100">AI Assistants</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">
                    {categories.length}
                  </div>
                  <div className="text-blue-100">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-blue-100">Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              className="fill-gray-50 w-full h-24 block"
              preserveAspectRatio="none"
            >
              <path d="M600,112C268.6,112,0,65.8,0,7.2V120H1200V7.2C1200,65.8,931.4,112,600,112z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search assistants..."
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </form>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-blue-500" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("All Categories")}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === "All Categories"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.category}
                      onClick={() => setSelectedCategory(cat.category)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === cat.category
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {cat.category} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssistants.map((assistant) => (
                <AssisstantCard
                  assistant={assistant}
                  key={assistant._id}
                  setScheduleModalOpen={() => setScheduleModalOpen(true)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isScheduleModalOpen && (
        <ScheduleMeetingModal
          isOpen={"schedule"}
          onClose={() => setScheduleModalOpen(false)}
          mode="schedule"
        />
      )}
    </div>
  );
};

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AICatalog />
    </Suspense>
  );
};

export default page;
