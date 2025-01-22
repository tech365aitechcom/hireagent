"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { baseURL } from "../urls";
import { useRouter } from "next/navigation";

import { googleLogin, subscribeToAuthState } from "../utils/googleLogin";


const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Goggle login related function start here
  useEffect(() => {
    const unSubscribe = subscribeToAuthState((currentUser) => {
      console.log("current user", currentUser)
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      console.log("result.user",result.user);
      if (result.user) {
        // Extracting necessary user details
        const { accessToken } = result.user;
        const { displayName, email, phoneNumber, photoURL } = result.user;

         // Create the user data object to send to the backend
      const userData = {
        name: displayName,
        email,
        phoneNumber: phoneNumber || null, // Handle cases where phoneNumber might be null
        photo: photoURL || null, // Handle cases where photoURL might be null
        roleId: "674ebf13a09352dfb54b2942", // Mandatory role ID
      };

       // Send user data to the backend
       const res = await fetch(`${baseURL}/api/users/googleUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log('data from be', data)
      if (!res.ok) throw new Error(data.message || "Failed to login");
        // Storing accessToken in localStorage
        localStorage.setItem("authToken", accessToken);
  
        // Creating user profile object and storing it in localStorage
        const userProfile = { displayName, email, phoneNumber, photoURL };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        router.push("/assistants?isModalTrue=true#try-assistant");
        
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Goggle login related function end here


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${baseURL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || data.error);

      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem("userProfile", JSON.stringify(data.profile));
      router.push("/assistants?isModalTrue=true#try-assistant");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex justify-center items-center mb-6">
          <img src="/logo.png" alt="logo" className="h-20" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="py-2">
        <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
            onClick={handleGoogleLogin}
          >
            {loading ? "Logging in..." : "Google Login"}
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          By signing in, you agree to our{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Privacy Policy
          </a>
        </p>
        <Link
          href={"/assistants"}
          className="text-blue-600 hover:text-blue-700 text-sm underline"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default page;
