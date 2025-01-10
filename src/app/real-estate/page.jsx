"use client";
import WithWithout from "../sections/WithWithout";
import AssistantHero from "../sections/AssistantHero";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";
import GetStarted from "../sections/GetStarted";
import TryAssistant from "../sections/TryAssistant";
import ROI from "../sections/ROI";
import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../urls";

const page = () => {
  useEffect(() => {
    const trackImpression = async () => {
      try {
        const response = await axios.post(
          `${baseURL}/api/traction/create-traction`,
          {
            page: "Real Estate Landing",
          }
        );
        console.log("Impression tracked:", response.data);
      } catch (error) {
        console.error("Error tracking impression:", error);
      }
    };

    trackImpression();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AssistantHero />
      <ROI />
      <WithWithout />
      <Features />
      <TryAssistant />
      <Testimonial />
      <GetStarted />
    </div>
  );
};

export default page;
