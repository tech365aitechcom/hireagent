"use client";
import { AudioLinesIcon, Calendar, CheckCircle, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import AssistantDescriptionModal2 from "../components/AssistantDescriptionModal2";
import Assistant from "../components/Assistant";

const aiBot = {
  name: "PropertyMate: Your Personalized Assistant for Scheduling, Follow-Ups, and Property Matchmaking.",
  id: "Space-Real-Esta-rDUob67dmzxq-xZ8sBR90",
  features: [
    "Verify Availability",
    "Schedule an Appointment",
    "Send a Follow-Up Email",
    "Send a Follow-Up SMS",
    "Capture User Information",
    "Filter Preferred Properties",
  ],
  desc: `
<div style="line-height: 1.8; font-family: Arial, sans-serif; color: #333;">
  <h2 style="color: #007BFF; margin-bottom: 10px; display: flex; align-items: center;">
    <img src="https://img.icons8.com/fluency/24/real-estate.png" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
    Real Estate Product Search and Appointment Scheduling Assistant
  </h2>
  
  <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
    <img src="https://img.icons8.com/?size=100&id=63765&format=png&color=000000" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
    Purpose:
  </h3>
  <p>
    The Real Estate Product Search and Appointment Scheduling Assistant is an AI-powered solution designed to streamline property searches and appointment bookings for potential buyers, sellers, or renters. 
    It simplifies lead capture and scheduling while integrating seamlessly with tools like Google Calendar, email, SMS, and Google Sheet or CRM. 
    This assistant enhances efficiency for real estate agents and improves the customer experience by providing quick, accurate, and tailored responses.
  </p>
  
  <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
    <img src="https://img.icons8.com/?size=100&id=20523&format=png&color=000000" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
    How It Works:
  </h3>
  <ul style="margin-left: 20px; list-style: none; padding: 0;">
    <li>
      <strong style="color: #007BFF;">Lead Capture:</strong> Extracts user information (name, contact details, preferences) during the interaction. Logs these details into the integrated Google Sheet or CRM for tracking and follow-up. Sends a confirmation email to the user with details of their lead registration.
    </li>
    <li>
      <strong style="color: #007BFF;">Availability Check and Appointment Scheduling:</strong> Checks property or agent availability in real time. Schedules viewings or consultations via Google Calendar, with reminders sent through email and SMS.
    </li>
    <li>
      <strong style="color: #007BFF;">Follow-Up Communication:</strong> Sends personalized follow-up emails or SMS to confirm bookings or share updates.
    </li>
    <li>
      <strong style="color: #007BFF;">Data Logging:</strong> Captures and organizes user data into Google Sheet for easy reference and lead management.
    </li>
  </ul>
  
  <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
    <img src="https://img.icons8.com/?size=100&id=13108&format=png&color=000000" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
    Key Features:
  </h3>
  <ul style="margin-left: 20px; list-style: none; padding: 0;">
    <li>
      <strong style="color: #007BFF;">Integrated Scheduling:</strong> Real-time appointment booking with Google Calendar, including reminders.
    </li>
    <li>
      <strong style="color: #007BFF;">Multi-Channel Communication:</strong> Engages users via email, SMS, and CRM updates.
    </li>
    <li>
      <strong style="color: #007BFF;">Smart Property Filtering:</strong> Filters properties based on user-provided criteria for a personalized experience.
    </li>
    <li>
      <strong style="color: #007BFF;">Lead Management:</strong> Captures and organizes leads efficiently in Google Sheet or CRM.
    </li>
  </ul>
  
  <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
    <img src="https://img.icons8.com/?size=100&id=kHG4p2DyB85t&format=png&color=000000" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
    Sample Questions Users Can Ask the Bot:
  </h3>
  <ul style="margin-left: 20px; list-style: disc;">
    <li>Do you have any 2-bedroom apartments available?</li>
    <li>Do any units have washers and dryers?</li>
    <li>What’s the price range for your 1-bedroom apartments?</li>
    <li>What are your office hours?</li>
  </ul>
  
  <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
    <img src="https://img.icons8.com/?size=100&id=13826&format=png&color=000000" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
    Demo Call and Email Confirmation:
  </h3>
  <p>
    After having a demo call with the assistant, you will receive an email with a detailed demo lead registration flow. 
    This email will summarize the details of your conversation and confirm that a lead has been registered based on your input.
  </p>
</div>
`,

  testStep: `
    <div style="line-height: 1.8; font-family: Arial, sans-serif; color: #333;">
      <h3 style="color: #007BFF; margin-bottom: 10px; display: flex; align-items: center;">
        <img src="https://img.icons8.com/?size=100&id=DUhyONw6epif&format=png&color=3955E8" style="margin-right: 8px; width: 24px; height: 24px;" alt="Icon"/> 
        Testing Steps:
      </h3>
      <ol style="margin-left: 20px;">
        <li>
          Click the <strong>"Try Now"</strong> button to start a conversation with the assistant.
          <ul style="margin-left: 20px; list-style: disc;">
            <li>Schedule property viewings or consultation appointments.</li>
            <li>Register your lead to the CRM.</li>
            <li>Get assistance with queries.</li>
          </ul>
        </li>
        <li>Provide your preferences and schedule an appointment for property viewing or meeting with staff.</li>
        <li>
          When scheduling, if the preferred time slot is booked, the assistant will notify you: 
          <em style="color: #007BFF;">"The preferred time slot is already booked. Please provide another."</em>
        </li>
        <li>
          Once confirmed, you’ll see: 
          <em style="color: #007BFF;">"Your appointment has been scheduled."</em>
        </li>
        <li>
          <strong style="color: #007BFF;">Lead Registration:</strong> Check the attached Google Sheet: 
          <a href="https://docs.google.com/spreadsheets/d/1fRpAK0FmI11qhBlaiVzG5zb-NcwwESb266pi_pvpheM/edit?usp=sharing" target="_blank" style="color: #007BFF;">Lead Registration Sheet</a>
        </li>
        <li>Receive an email with appointment confirmation and lead details.</li>
      </ol>
    </div>
  `,
};

const CalendlyComp = () => {
  const searchParams = useSearchParams();
  const scheduleSuccess = searchParams.get("scheduleSuccess");
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser || {});
      } catch (error) {
        console.error("Failed to parse user profile from localStorage:", error);
        setUser({});
      }
    } else {
      setUser({});
    }
  }, []);

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    setAuthToken(storedAuthToken);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 flex flex-col lg:flex-row items-center justify-center py-16 max-md:mt-6">
      <div className="w-full max-w-6xl px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600 leading-tight">
              Transform Your Real Estate Business with AI-Powered Assistance
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-600/90">
              Revolutionize Property Matching & Client Engagement
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setActiveCard(aiBot.id)}
              className="gap-2 font-medium text-lg w-fit px-8 py-4 bg-blue-600 text-white rounded-lg hover:text-blue-600 border-2 border-blue-600 hover:bg-white flex items-center justify-center sm:justify-start transition-colors"
            >
              Try AI Assistant for free
              <AudioLinesIcon className="animate-[wave_1s_ease-in-out_infinite] hover:animate-[wave_1s_ease-in-out_infinite]" />
            </button>
          </div>
          {scheduleSuccess ? (
            <div className="flex justify-center">
              <div className="max-w-2xl w-full bg-transparent rounded-2xl p-8 text-center space-y-6">
                <div className="flex justify-center">
                  <CheckCircle className="w-20 h-20 text-blue-500" />
                </div>

                <h1 className="text-4xl font-bold text-indigo-900 mb-4">
                  Thank You!
                </h1>

                <p className="text-xl text-blue-800 leading-relaxed">
                  Your meeting has been setup successfully. We appreciate your
                  time and will get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => setScheduleModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl border-2 border-gray-200 
                        hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-100 
                        transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <span className="flex items-center font-medium text-lg">
                  Schedule Meeting
                  <Calendar className="ml-3 w-5 h-5 group-hover:text-indigo-600 transition-colors" />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {isScheduleModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setScheduleModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            <iframe
              src="https://calendly.com/hireagent/30min?back=1&month=2025-01"
              className="w-full h-full rounded-2xl border-0"
              title="Calendly Scheduling Page"
              loading="lazy"
            />
          </div>
        </div>
      )}
      {activeCard === aiBot.id && (
        <AssistantDescriptionModal2
          setActiveCard={() => setActiveCard(null)}
          setShowAssistant={() => setShowAssistant(true)}
          name={aiBot.name}
          authToken={authToken}
          desc={aiBot.desc}
          testStep={aiBot.testStep}
          aiId={aiBot.id}
          user={user}
        />
      )}
      {showAssistant && <Assistant id={aiBot.id} authToken={authToken} />}
    </div>
  );
};

const CalendlySection = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CalendlyComp />
    </Suspense>
  );
};

export default CalendlySection;
