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
    <div className="max-w-2xl w-full bg-transparent rounded-2xl p-8 text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-20 h-20 text-blue-500" />
      </div>

      <h1 className="text-4xl font-bold text-indigo-900 mb-4">Thank You!</h1>

      <p className="text-xl text-blue-800 leading-relaxed">
        Your submission has been received successfully. We appreciate your time
        and will get back to you shortly.
      </p>
    </div>
  );
};

export default ThankYouPage;
