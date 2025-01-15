"use client";
import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/real-estate");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-blue-500" />
        </div>

        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Thank You!</h1>

        <p className="text-xl text-blue-800 leading-relaxed">
          Your submission has been received successfully. We appreciate your
          time and will get back to you shortly.
        </p>

        <div className="pt-6">
          <Link
            href="/real-estate"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-100">
          <p className="text-indigo-400">
            © 2025 HireAgent. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
