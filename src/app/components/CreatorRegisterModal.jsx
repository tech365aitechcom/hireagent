import React, { useState } from "react";
import axios from "axios";
import {
  X,
  Mail,
  Lock,
  User,
  BookOpen,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { baseURL } from "../urls";

const CreatorRegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    expertise: [],
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const expertiseOptions = [
    "AI Development",
    "Customer Service",
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Marketing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExpertiseChange = (expertise) => {
    setFormData((prev) => {
      if (prev.expertise.includes(expertise)) {
        return {
          ...prev,
          expertise: prev.expertise.filter((item) => item !== expertise),
        };
      } else {
        return { ...prev, expertise: [...prev.expertise, expertise] };
      }
    });
  };

  const nextStep = () => {
    if (step === 1) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError("Please fill all required fields");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      setError("");
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const dataToSubmit = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        expertise: formData.expertise,
        description: formData.description,
        joinDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
      };

      const response = await axios.post(
        `${baseURL}/api/creator/createCreator`,
        dataToSubmit
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            expertise: [],
            description: "",
          });
          setStep(1);
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative">
        <div className="bg-blue-600 px-6 py-4 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">Join Our Creator Network</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        {success && (
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10">
            <CheckCircle size={64} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">
              Registration Successful!
            </h3>
            <p className="text-gray-600 mt-2">
              Welcome to our creator network!
            </p>
          </div>
        )}
        <div className="px-6 pt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: step === 1 ? "50%" : "100%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span className={step >= 1 ? "text-blue-600 font-medium" : ""}>
              Account Details
            </span>
            <span className={step >= 2 ? "text-blue-600 font-medium" : ""}>
              Profile Information
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 ? (
            <>
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="******"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="******"
                      required
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Expertise
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {expertiseOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleExpertiseChange(option)}
                        className={`px-3 py-2 rounded-md cursor-pointer text-sm transition-colors ${
                          formData.expertise.includes(option)
                            ? "bg-blue-100 text-blue-700 border-2 border-blue-400"
                            : "bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    About You
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <BookOpen size={18} className="text-gray-400" />
                    </div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us about yourself, your experience, and what you hope to achieve..."
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
            </>
          )}
          {error && (
            <div className="mt-4 text-sm text-red-600 bg-red-50 p-2 rounded-md">
              {error}
            </div>
          )}
          <div className="mt-6 flex justify-between items-center">
            {step === 2 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                Back
              </button>
            ) : (
              <div className="text-sm text-gray-500">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign in
                </a>
              </div>
            )}

            {step === 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 flex items-center"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            )}
          </div>
          <div className="mt-6 text-xs text-gray-500 text-center">
            By registering, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatorRegisterModal;
