"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import EnquiryFormModal from "./EnquiryForm";
import { usePathname } from "next/navigation";
import LoginModal from "./LoginModal";
import Cookies from "js-cookie";

const NavBar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const creator = Cookies.get("creator");
    if (creator) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("creator");
    setIsLoggedIn(false);
  };

  if (pathname.includes("profile")) {
    return null;
  }

  return (
    <>
      <nav className="bg-white backdrop-blur-sm border-b border-blue-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link
                href={"/"}
                className="flex-shrink-0 transition-transform hover:scale-105"
              >
                <img src="/logo.png" alt="logo" className="w-auto h-12" />
              </Link>
              <div className="hidden md:block ml-12">
                <div className="flex space-x-8">
                  {[
                    "Browse Agents",
                    "Integrations",
                    "Sell Agents",
                    "Community",
                  ].map((item, index) => (
                    <Link
                      key={item}
                      href={
                        index === 0
                          ? "all-agents"
                          : index === 1
                          ? "integrations"
                          : index === 2
                          ? "become-creator"
                          : "#"
                      }
                      className="text-blue-600 hover:text-blue-900 transition-colors text-sm tracking-wide font-medium"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              )}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md text-sm tracking-wide"
              >
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </nav>
      <EnquiryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavBar;
