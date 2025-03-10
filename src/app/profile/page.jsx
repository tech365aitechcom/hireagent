"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart2,
  Users,
  Box,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Clock,
  User,
  Mail,
  Star,
  Briefcase,
  Calendar,
  Award,
  PlusCircle,
  Filter,
  Download,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import Cookies from "js-cookie";
import Link from "next/link";

const SellerDashboard = () => {
  const [activeBot, setActiveBot] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [creatorData, setCreatorData] = useState(null);

  useEffect(() => {
    const creator = Cookies.get("creator");
    if (creator) {
      setCreatorData(JSON.parse(creator));
    }
  }, []);

  console.log(creatorData, "raju");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigateTo = (page) => {
    setActivePage(page);
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    const day = date.getDate();
    const suffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return `${day}${suffix(day)} ${
      date.toLocaleDateString("en-US", options).split(" ")[1]
    } ${date.getFullYear()}`;
  };

  const dashboardData = {
    creator: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      joinDate: "Jan 2023",
      expertise: ["AI Development", "Customer Service", "Healthcare"],
      rating: 4.9,
      totalSales: 78,
      verificationStatus: "Verified",
    },
    overview: {
      totalRevenue: 150000,
      totalBuyers: 45,
      activeBots: 8,
      activeImplementations: 32,
    },
    bots: [
      {
        id: 1,
        name: "CustomerService Pro",
        status: "active",
        totalBuyers: 15,
        revenue: 45000,
        rating: 4.8,
        buyers: [
          {
            id: 1,
            name: "Tech Corp",
            status: "Active",
            implementationStatus: "Complete",
            monthlyUsage: 5000,
            lastPayment: "2024-03-15",
          },
          {
            id: 2,
            name: "Global Services",
            status: "Active",
            implementationStatus: "In Progress",
            monthlyUsage: 3200,
            lastPayment: "2024-03-10",
          },
        ],
      },
      {
        id: 2,
        name: "HealthcareBot Plus",
        status: "active",
        totalBuyers: 12,
        revenue: 36000,
        rating: 4.6,
        buyers: [
          {
            id: 3,
            name: "City Hospital",
            status: "Active",
            implementationStatus: "Complete",
            monthlyUsage: 4500,
            lastPayment: "2024-03-12",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-slate-200 z-20 shadow-sm transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">Creator Hub</h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-slate-500 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            <button
              onClick={() => navigateTo("dashboard")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activePage === "dashboard"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Dashboard
            </button>
            <button
              onClick={() => navigateTo("assistants")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activePage === "assistants"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Box className="mr-2 h-4 w-4" />
              My Assistants
            </button>
            <button
              onClick={() => navigateTo("buyers")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activePage === "buyers"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Users className="mr-2 h-4 w-4" />
              Buyers
            </button>
            <button
              onClick={() => navigateTo("feedback")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activePage === "feedback"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Feedback
            </button>
            <button
              onClick={() => navigateTo("analytics")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activePage === "analytics"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </button>
            <button
              onClick={() => navigateTo("settings")}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activePage === "settings"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </button>
          </div>
        </div>

        {/* Profile Section in Sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg mr-3">
              {dashboardData.creator.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                {dashboardData.creator.name}
              </p>
              <p className="text-xs text-slate-500">Creator</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          sidebarOpen ? "lg:pl-64" : "pl-0"
        } transition-all duration-300`}
      >
        {/* Top Navigation */}
        <nav className="sticky top-0 z-10 bg-white border-b border-slate-200 h-16">
          <div className="px-6 flex items-center justify-between h-full">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="mr-4 text-slate-500 hover:text-slate-700 lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-lg font-semibold text-slate-900">
                {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md">
                <Download className="w-5 h-5" />
              </button>
              <Link
                href={"/add-assistant"}
                className="ml-2 text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
              >
                <PlusCircle className="w-4 h-4 mr-1" />
                New Assistant
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-6">
          {activePage === "dashboard" && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Total Revenue</p>
                      <p className="text-2xl font-bold text-slate-900">
                        ${dashboardData.overview.totalRevenue.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        +12% from last month
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <BarChart2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Total Buyers</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {dashboardData.overview.totalBuyers}
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        +5 new this month
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">
                        Active Assistants
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {dashboardData.overview.activeBots}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        All performing well
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Box className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Implementations</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {dashboardData.overview.activeImplementations}
                      </p>
                      <p className="text-xs text-orange-600 mt-1">
                        3 pending completion
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Column Layout for Creator Profile and Achievements */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Creator Profile Card */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                      {creatorData?.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {creatorData?.name}
                        </h3>
                        <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {creatorData?.verificationStatus}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="#EAB308"
                        />
                        <span className="text-slate-700">
                          {dashboardData.creator.rating} rating
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-slate-600">
                        {creatorData?.email}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-slate-600">
                        Joined {formatDate(creatorData?.createdAt)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-slate-600">
                        {dashboardData.creator.totalSales} Total Sales
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dashboardData.creator.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">
                    Creator Achievements
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Award className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900">
                            Top Seller
                          </h3>
                          <p className="text-sm text-slate-500">
                            Healthcare Category
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Star className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900">
                            5-Star Rating
                          </h3>
                          <p className="text-sm text-slate-500">
                            15 Consecutive Months
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900">
                            10,000+ Users
                          </h3>
                          <p className="text-sm text-slate-500">
                            Served Worldwide
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900">
                            Featured Creator
                          </h3>
                          <p className="text-sm text-slate-500">March 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bot List */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Your AI Assistants
                  </h2>
                  <button
                    onClick={() => navigateTo("assistants")}
                    className="text-sm px-3 py-1 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50"
                  >
                    View All
                  </button>
                </div>

                {dashboardData.bots.map((bot) => (
                  <div
                    key={bot.id}
                    className="border-b border-slate-200 last:border-b-0"
                  >
                    {/* Bot Header */}
                    <div
                      className="px-6 py-4 hover:bg-slate-50 cursor-pointer transition-colors"
                      onClick={() =>
                        setActiveBot(activeBot === bot.id ? null : bot.id)
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {activeBot === bot.id ? (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                          )}
                          <span className="font-medium text-slate-800">
                            {bot.name}
                          </span>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {bot.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-8">
                          <div className="text-sm text-slate-600">
                            <span className="font-medium">
                              {bot.totalBuyers}
                            </span>{" "}
                            buyers
                          </div>
                          <div className="text-sm text-slate-600">
                            <span className="font-medium">
                              ${bot.revenue.toLocaleString()}
                            </span>{" "}
                            revenue
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <Star
                              className="w-4 h-4 text-yellow-500 mr-1"
                              fill="#EAB308"
                            />
                            <span className="font-medium">{bot.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buyer List */}
                    {activeBot === bot.id && (
                      <div className="bg-slate-50 px-6 py-4">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="text-left text-sm text-slate-500 border-b border-slate-200">
                                <th className="pb-3 font-medium">Buyer</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 font-medium">
                                  Implementation
                                </th>
                                <th className="pb-3 font-medium">
                                  Monthly Usage
                                </th>
                                <th className="pb-3 font-medium">
                                  Last Payment
                                </th>
                                <th className="pb-3 font-medium">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {bot.buyers.map((buyer) => (
                                <tr
                                  key={buyer.id}
                                  className="border-b border-slate-200 last:border-b-0 hover:bg-white"
                                >
                                  <td className="py-3">
                                    <span className="font-medium text-slate-800">
                                      {buyer.name}
                                    </span>
                                  </td>
                                  <td className="py-3">
                                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                      {buyer.status}
                                    </span>
                                  </td>
                                  <td className="py-3">
                                    {buyer.implementationStatus ===
                                    "Complete" ? (
                                      <span className="flex items-center text-green-600 text-sm">
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Complete
                                      </span>
                                    ) : (
                                      <span className="flex items-center text-orange-600 text-sm">
                                        <Clock className="w-4 h-4 mr-1" />
                                        In Progress
                                      </span>
                                    )}
                                  </td>
                                  <td className="py-3 text-sm text-slate-700">
                                    {buyer.monthlyUsage.toLocaleString()} calls
                                  </td>
                                  <td className="py-3 text-sm text-slate-700">
                                    {buyer.lastPayment}
                                  </td>
                                  <td className="py-3">
                                    <button className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-slate-200 transition-colors">
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {activePage !== "dashboard" && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {activePage.charAt(0).toUpperCase() + activePage.slice(1)} Page
              </h2>
              <p className="text-slate-600 mb-6">
                This page is under construction
              </p>
              <button
                onClick={() => navigateTo("dashboard")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-10 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default SellerDashboard;
