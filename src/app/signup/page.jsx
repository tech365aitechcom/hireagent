"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { baseURL } from "../urls";
import { useRouter } from "next/navigation";
import { googleLogin, subscribeToAuthState } from "../utils/googleLogin";

const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const unSubscribe = subscribeToAuthState((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // const handleGoogleLogin = async () => {
  //   try {
  //     const result = await googleLogin();
  //     if (result.user) {
  //       const { accessToken } = result.user;
  //       const { displayName, email, phoneNumber, photoURL } = result.user;
  //       localStorage.setItem("authToken", accessToken);
  //       const userProfile = { displayName, email, phoneNumber, photoURL };
  //       localStorage.setItem("userProfile", JSON.stringify(userProfile));
  //       router.push("/real-estate?isModalTrue=true#try-assistant");
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const backendData = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
      };
      delete backendData.firstName;
      delete backendData.lastName;

      const res = await fetch(`${baseURL}/api/users/signUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.error);

      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem("userProfile", JSON.stringify(data.profile));
      router.push("/schedule-meeting?loginSuccess=true");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const evaluatePasswordStrength = (password) => {
    const regexWeak = /[a-zA-Z]/;
    const regexMedium = /(?=.*[a-zA-Z])(?=.*[0-9])/;
    const regexStrong = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (regexStrong.test(password)) {
      setPasswordStrength("Strong");
    } else if (regexMedium.test(password)) {
      setPasswordStrength("Medium");
    } else if (regexWeak.test(password)) {
      setPasswordStrength("Weak");
    } else {
      setPasswordStrength("Very Weak");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="p-8 flex-shrink-0">
          <div className="flex justify-center items-center mb-8">
            <img src="/logo.png" alt="logo" className="h-20" />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto px-8">
          <form onSubmit={handleSignUp} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm animate-shake">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Enter your first name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Enter your last name"
                />
              </div>

              {/* Phone Number and Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Fields */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all pr-20"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      evaluatePasswordStrength(e.target.value);
                    }}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 inset-y-0 flex items-center px-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Strength: {passwordStrength}
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white p-3 rounded-xl font-semibold transition-all transform hover:scale-[0.99] active:scale-[0.97] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing up...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>

            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled={loading}
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 border border-gray-200 p-3 rounded-xl font-semibold transition-all transform hover:scale-[0.99] active:scale-[0.97] disabled:opacity-50 disabled:hover:scale-100"
            >
              <svg width="20" height="20" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"
                />
                <path
                  fill="#34A853"
                  d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"
                />
                <path
                  fill="#FBBC05"
                  d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"
                />
                <path
                  fill="#EA4335"
                  d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 8.98 1a8 8 0 0 0-7.15 4.41l2.67 2.07a4.8 4.8 0 0 1 4.46-3.3z"
                />
              </svg>
              Sign up with Google
            </button> */}
          </form>
        </div>

        <div className="p-8 flex-shrink-0">
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Log in
            </Link>
          </p>
          <p className="text-sm text-gray-500 mt-5 text-center">
            <Link
              href="/real-estate"
              className="text-blue-600 hover:underline font-medium"
            >
              Go Back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
