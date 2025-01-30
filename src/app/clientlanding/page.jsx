"use client";
import React, { useEffect, useState } from "react";
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
  description: `
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

const FloatingBlob = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={`absolute ${className}`}
    style={{ filter: "blur(30px)" }}
  >
    <path
      fill="rgba(59, 130, 246, 0.15)"
      d="M41.2,-70.7C54.8,-64.6,68,-55.5,76.3,-42.7C84.6,-30,88,-13.5,86.6,2.3C85.2,18,79,33,69.7,45.3C60.4,57.6,48,67.2,34.1,73.7C20.2,80.2,4.8,83.6,-10.2,81.8C-25.2,80,-39.8,73,-52.1,63.1C-64.4,53.2,-74.4,40.4,-79.7,25.8C-85,11.2,-85.6,-5.2,-81.7,-20.1C-77.8,-35,-69.4,-48.4,-57.4,-55.4C-45.4,-62.5,-29.9,-63.2,-15.9,-64.7C-1.9,-66.2,10.5,-68.5,22.9,-69.8C35.3,-71.1,47.7,-71.4,41.2,-70.7Z"
      transform="translate(100 100)"
    />
  </svg>
);

const page = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  //   const [activeSection, setActiveSection] = useState("description");

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    setAuthToken(storedAuthToken);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <FloatingBlob className="top-0 left-0 w-96 h-96 animate-pulse" />
      <FloatingBlob className="bottom-0 right-0 w-96 h-96 animate-pulse delay-1000" />
      <FloatingBlob className="top-1/2 right-1/4 w-72 h-72 animate-pulse delay-500" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            <span className="text-blue-600">{aiBot.name}</span>
          </h1>
          <button
            onClick={() => setShowAssistant(true)}
            className="px-8 py-4 text-lg font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 mb-12"
          >
            Call Our Assistant
          </button>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {aiBot.features.map((feature) => (
              <div
                key={feature}
                className="px-6 py-2 text-sm text-blue-600 bg-blue-50 rounded-full"
              >
                {feature}
              </div>
            ))}
          </div>
          {/* <div className="mb-8 flex justify-center gap-4">
            {["Description", "Features", "Test Steps"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveSection(tab.toLowerCase().replace(" ", ""))
                }
                className={`px-6 py-2 rounded-full transition-all ${
                  activeSection === tab.toLowerCase().replace(" ", "")
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            {activeSection === "description" && (
              <div dangerouslySetInnerHTML={{ __html: aiBot.description }} />
            )}
            {activeSection === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiBot.features.map((feature) => (
                  <div key={feature} className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            )}
            {activeSection === "teststeps" && (
              <div dangerouslySetInnerHTML={{ __html: aiBot.testStep }} />
            )}
          </div> */}
        </div>
      </div>
      {showAssistant && <Assistant id={aiBot.id} authToken={authToken} />}
    </div>
  );
};

export default page;
