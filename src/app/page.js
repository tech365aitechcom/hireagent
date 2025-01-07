"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { ScheduleMeetingModal } from "./sections/SheduleMeetingModal";
import Link from "next/link";

export const upcomingCard = {
  "Skills Evaluator AI": [
    "Conduct interviews",
    "Analyze skills",
    "Share detailed results",
    "Track performance",
    "Integrate with Google Sheets",
    "Automated assessment",
  ],
  "Smart Receptionist AI": [
    "Handle inquiries",
    "Book appointments",
    "Send follow-ups",
    "Forward calls",
    "Manage calendar",
    "Personalized communication",
  ],
  "Realty Scheduler AI": [
    "Manage appointments",
    "Send follow-ups",
    "Extract user details",
    "Track scheduling",
    "Integrate with calendars",
    "Communication management",
  ],
  "SolarSync Scheduler AI": [
    "Schedule site visits",
    "Send follow-ups",
    "Provide product info",
    "Organize user information",
    "Calendar integration",
    "Efficient booking",
  ],
  "PlaySchool Scheduler AI": [
    "Handle inquiries",
    "Book appointments",
    "Manage scheduling",
    "Parent communication",
    "Follow-up management",
    "Easy booking",
  ],
  "Hospital Scheduler AI": [
    "Book appointments",
    "Send follow-ups",
    "Provide general info",
    "Patient communication",
    "Calendar management",
    "Efficient scheduling",
  ],
  "Education Scheduler AI": [
    "Schedule demo classes",
    "Manage follow-ups",
    "Student communication",
    "Class scheduling",
    "Engagement tracking",
    "Smooth coordination",
  ],
  "CarLead Qualifier AI": [
    "Qualify leads",
    "Schedule appointments",
    "Answer FAQs",
    "Escalate complex issues",
    "Lead management",
    "Automated follow-ups",
  ],
  "CarSales Recommender AI": [
    "Schedule appointments",
    "Real-time recommendations",
    "Manage lead collection",
    "Car matching",
    "Inquiry handling",
    "Preference-based suggestions",
  ],
  "HR Scheduler AI": [
    "Schedule interviews",
    "Send reminders",
    "Organize candidate data",
    "Interview coordination",
    "Communication tracking",
    "Candidate management",
  ],
  "Interview Insights AI": [
    "Conduct interviews",
    "Analyze responses",
    "Generate detailed reports",
    "Automated assessment",
    "Insights generation",
    "Decision support",
  ],
};

export const existingCard = {
  "PropertyMate: Your Personalized Assistant for Scheduling, Follow-Ups, and Property Matchmaking.":
    {
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
    },
  "PropConnect: Your Smart Assistant for Scheduling property consultation, and Follow-Up.":
    {
      id: "Domus-NY-cJXPHulKHcOrm7kIZ-YaC",
      features: [
        "Verify Availability",
        "Schedule an Appointment",
        "Send Follow-Up Email",
        "Send Follow-Up Text Message",
        "Capture User Information and Property Preferences",
      ],
      desc: `
  <div style="line-height: 1.8; font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #007BFF; margin-bottom: 10px; display: flex; align-items: center;">
      <img src="https://img.icons8.com/fluency/24/real-estate.png" style="margin-right: 8px;" alt="Icon"/> 
      Real Estate Product Search and Appointment Scheduling Assistant
    </h2>

    <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
      <img src="https://img.icons8.com/?size=100&id=63765&format=png&color=000000" style="width: 24px; height: 24px; margin-right: 8px;" alt="Icon"/> 
      Purpose:
    </h3>
    <p>
      The Real Estate Product Search and Appointment Scheduling Assistant is an AI-powered solution designed to streamline property searches and appointment bookings for potential buyers, sellers, or renters. 
      It simplifies lead capture, property filtering, and scheduling while integrating seamlessly with tools like Google Calendar, email, SMS, and Airtable CRM. 
      This assistant enhances efficiency for real estate agents and improves the customer experience by providing quick, accurate, and tailored responses.
    </p>

    <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
      <img src="https://img.icons8.com/?size=100&id=20523&format=png&color=000000" style="width: 24px; height: 24px; margin-right: 8px;" alt="Icon"/> 
      How It Works:
    </h3>
    <ul style="margin-left: 20px; list-style: none; padding: 0;">
      <li>
        <strong style="color: #007BFF;">Property Search:</strong> The assistant gathers user preferences, such as budget, location, property type, and amenities. It filters the properties based on these inputs and suggests the most relevant options.
      </li>
      <li>
        <strong style="color: #007BFF;">Lead Capture:</strong> Extracts user information (name, contact details, preferences) during the interaction. Logs these details into the integrated Airtable CRM for tracking and follow-up. Sends a confirmation email to the user with details of their lead registration.
      </li>
      <li>
        <strong style="color: #007BFF;">Availability Check and Appointment Scheduling:</strong> Checks property or agent availability in real time. Schedules viewings or consultations via Google Calendar, with reminders sent through email and SMS.
      </li>
      <li>
        <strong style="color: #007BFF;">Follow-Up Communication:</strong> Sends personalized follow-up emails or SMS to confirm bookings or share updates.
      </li>
      <li>
        <strong style="color: #007BFF;">Data Logging:</strong> Captures and organizes user data into Airtable for easy reference and lead management.
      </li>
    </ul>

    <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
      <img src="https://img.icons8.com/?size=100&id=13108&format=png&color=000000" style="width: 24px; height: 24px; margin-right: 8px;" alt="Icon"/> 
      Key Features:
    </h3>
    <ul style="margin-left: 20px; list-style: none; padding: 0;">
      <li><strong style="color: #007BFF;">Integrated Scheduling:</strong> Real-time appointment booking with Google Calendar, including reminders.</li>
      <li><strong style="color: #007BFF;">Multi-Channel Communication:</strong> Engages users via email, SMS, and CRM updates.</li>
      <li><strong style="color: #007BFF;">Smart Property Filtering:</strong> Filters properties based on user-provided criteria for a personalized experience.</li>
      <li><strong style="color: #007BFF;">Lead Management:</strong> Captures and organizes leads efficiently in Airtable CRM.</li>
      <li><strong style="color: #007BFF;">Follow-Ups:</strong> Automated follow-up messages to maintain engagement and confirm appointments.</li>
      <li><strong style="color: #007BFF;">Availability Checks:</strong> Instant updates on property or agent availability to save time.</li>
      <li><strong style="color: #007BFF;">Email Confirmation:</strong> Sends an email summarizing the conversation with a link to view the lead registration flow, ensuring transparency and accuracy.</li>
    </ul>

    <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
      <img src="https://img.icons8.com/?size=100&id=kHG4p2DyB85t&format=png&color=000000" style="width: 24px; height: 24px; margin-right: 8px;" alt="Icon"/> 
      Sample Questions Users Can Ask the Bot:
    </h3>
    <ul style="margin-left: 20px; list-style: disc;">
      <li>Property Search: "Can you find a 2-bedroom apartment in downtown Raleigh under $2,000/month?"</li>
      <li>Appointment Scheduling: "Can I book a viewing for the property on Elm Street this weekend?"</li>
      <li>Follow-Up and Updates: "Can you confirm my appointment for tomorrow at 10 AM?"</li>
      <li>General Assistance: "What amenities does the property on Oak Avenue include?"</li>
    </ul>

    <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
      <img src="https://img.icons8.com/?size=100&id=13826&format=png&color=000000" style="width: 24px; height: 24px; margin-right: 8px;" alt="Icon"/> 
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
      <img src="https://img.icons8.com/?size=100&id=DUhyONw6epif&format=png&color=3955E8" style="width: 24px; height: 24px; margin-right: 8px;" alt="Icon"/> 
      Testing Steps:
    </h3>
    <ol style="margin-left: 20px;">
      <li>
        Click the <strong>"Try Now"</strong> button to start a conversation with the assistant.
        <ul style="margin-left: 20px; list-style: disc;">
          <li>Find the best property match based on your preferences.</li>
          <li>Schedule property viewings or consultation appointments.</li>
        </ul>
      </li>
      <li>Use property preferences from the provided Airtable link: 
        <a href="https://airtable.com/invite/l?inviteId=invH9FxSqX1SUCtmT&inviteToken=786dca6ac8733c0c79b6d86eae9d71a28f16de17f2012fe59f0099facfa7b808&utm_medium=email&utm_source=product_team&utm_content=transactional-alerts" target="_blank" style="color: #007BFF;">Airtable Link</a>
      </li>
      <li>When scheduling, provide your name, contact information, and preferred time slot. If the time slot is taken, the assistant will ask you to provide another slot.</li>
      <li>Once the time slot is confirmed, you’ll receive a message saying: 
        <em style="color: #007BFF;">"Your appointment has been scheduled."</em>
      </li>
      <li>
        <strong style="color: #007BFF;">Lead Registration:</strong> After the conversation, you can check the attached lead registration in Airtable.
      </li>
      <li>Two confirmation emails will be sent after the conversation: 
        <ul style="margin-left: 20px; list-style: disc;">
          <li>Appointment Confirmation</li>
          <li>Property Recommendations</li>
        </ul>
      </li>
    </ol>
  </div>
  `,
    },
  "SmartSchedule Assistant: Seamlessly manage property availability, appointments booking, follow-ups, and personalized property recommendations with user-specific details about a property.":
    {
      id: "Real-estate-New-iSKHignjLL9LrPsz-8Ajb",
      features: [
        "Verify Schedule Availability",
        "Schedule an Appointment",
        "Send Follow-Up Email",
        "Send Follow-Up SMS",
        "Capture User Information and Property Preferences",
        "Provide Property Matches and Share Preferred Property Information",
      ],
      desc: `
    <div style="line-height: 1.8; font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #007BFF; margin-bottom: 10px; display: flex; align-items: center;">
        <img
          src="https://img.icons8.com/fluency/24/real-estate.png"
          style="margin-right: 8px; width: 24px; height: 24px;"
          alt="Icon"
        />
        Real Estate Product Search and Appointment Scheduling Assistant
      </h2>

      <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
        <img
          src="https://img.icons8.com/?size=100&id=63765&format=png&color=000000"
          style="margin-right: 8px; width: 24px; height: 24px;"
          alt="Icon"
        />
        Purpose:
      </h3>
      <p>
        The Real Estate Product Search and Appointment Scheduling Assistant is
        an AI-powered solution designed to streamline property searches and
        appointment bookings for potential buyers, sellers, or renters. It
        simplifies lead capture, property filtering, and scheduling while
        integrating seamlessly with tools like Google Calendar, email, SMS,
        and Google Sheets or CRM. This assistant enhances efficiency for real
        estate agents and improves the customer experience by providing quick,
        accurate, and tailored responses.
      </p>

      <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
        <img
          src="https://img.icons8.com/?size=100&id=20523&format=png&color=000000"
          style="margin-right: 8px; width: 24px; height: 24px;"
          alt="Icon"
        />
        How It Works:
      </h3>
      <ul style="margin-left: 20px; list-style: none; padding: 0;">
        <li>
          <strong style="color: #007BFF;">Property Search:</strong> The
          assistant gathers user preferences, such as budget, plan to move-in
          date, property type, and specific features. It filters the
          properties based on these inputs and suggests the most relevant
          options.
        </li>
        <li>
          <strong style="color: #007BFF;">Property Information:</strong> The
          assistant searches the user’s preferred resultant property and
          assists with any queries regarding that property, providing detailed
          information.
        </li>
        <li>
          <strong style="color: #007BFF;">Lead Capture:</strong> Extracts user
          information (name, contact details, preferences) during the
          interaction. Logs these details into Google Sheets or CRM for
          tracking and follow-up. Sends a confirmation email to the user with
          details of their lead registration.
        </li>
        <li>
          <strong style="color: #007BFF;">Availability Check and Appointment Scheduling:</strong> Checks property or agent availability in real time. Schedules
          viewings or consultations via Google Calendar, with reminders sent
          through email and SMS.
        </li>
        <li>
          <strong style="color: #007BFF;">Follow-Up Communication:</strong>
          Sends personalized follow-up emails or SMS to confirm bookings or
          share updates.
        </li>
        <li>
          <strong style="color: #007BFF;">Data Logging:</strong> Captures and
          organizes user data into Google Sheets for easy reference and lead
          management.
        </li>
      </ul>

      <h3 style="color: #007BFF; margin-top: 20px; display: flex; align-items: center;">
        <img
          src="https://img.icons8.com/?size=100&id=13108&format=png&color=000000"
          style="margin-right: 8px; width: 24px; height: 24px;"
          alt="Icon"
        />
        Key Features:
      </h3>
      <ul style="margin-left: 20px; list-style: none; padding: 0;">
        <li><strong style="color: #007BFF;">Integrated Scheduling:</strong> Real-time appointment booking with Google Calendar, including reminders.</li>
        <li><strong style="color: #007BFF;">Multi-Channel Communication:</strong> Engages users via email, SMS, and CRM updates.</li>
        <li><strong style="color: #007BFF;">Smart Property Filtering:</strong> Filters properties based on user-provided criteria for a personalized experience.</li>
        <li><strong style="color: #007BFF;">Lead Management:</strong> Captures and organizes leads efficiently in Google Sheets or CRM.</li>
        <li><strong style="color: #007BFF;">Follow-Ups:</strong> Automated follow-up messages to maintain engagement and confirm appointments.</li>
        <li><strong style="color: #007BFF;">Availability Checks:</strong> Instant updates on property or agent availability to save time.</li>
        <li><strong style="color: #007BFF;">Email Confirmation:</strong> Sends an email summarizing the conversation with a link to view the lead registration flow, ensuring transparency and accuracy.</li>
      </ul>
    </div>
  `,
      testStep: `
    <div style="line-height: 1.8; font-family: Arial, sans-serif; color: #333;">
      <h3 style="color: #007BFF; margin-bottom: 10px; display: flex; align-items: center;">
        <img
          src="https://img.icons8.com/?size=100&id=DUhyONw6epif&format=png&color=3955E8"
          style="margin-right: 8px; width: 24px; height: 24px;"
          alt="Icon"
        />
        Testing Steps:
      </h3>
      <ol style="margin-left: 20px;">
        <li>
          Click the <strong>"Try Now"</strong> button to start a conversation
          with the assistant.
          <ul style="margin-left: 20px; list-style: disc;">
            <li>Find the best property match based on your preferences.</li>
            <li>Schedule property viewings or consultation appointments.</li>
          </ul>
        </li>
        <li>
          Use property preferences from the provided Airtable link:
          <a
            href="https://airtable.com/invite/l?inviteId=invH9FxSqX1SUCtmT&inviteToken=786dca6ac8733c0c79b6d86eae9d71a28f16de17f2012fe59f0099facfa7b808&utm_medium=email&utm_source=product_team&utm_content=transactional-alerts"
            target="_blank"
            style="color: #007BFF;"
          >
            Airtable Link
          </a>
        </li>
      </ol>
    </div>
  `,
    },
};

const LandingPage = () => {
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleScheduleMeeting = () => {
    setScheduleModalOpen(true);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    setUser(JSON.parse(storedUser));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M0 0 L1200 0 L1200 600 L0 600 Z" fill="#f8fafc" />
            <circle
              cx="1100"
              cy="100"
              r="300"
              fill="url(#gradient1)"
              opacity="0.1"
            />
            <circle
              cx="100"
              cy="500"
              r="400"
              fill="url(#gradient2)"
              opacity="0.1"
            />
            <path
              d="M600 100 Q 800 300 600 500 T 600 700"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient
                id="gradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                AI Bots
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover our collection of intelligent AI assistants designed to
              streamline your operations and enhance customer experience with
              cutting-edge technology.
            </p>
            <div className="flex gap-6">
              <Link
                href={"#available-now"}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl"
              >
                <span className="relative z-10 flex items-center font-medium">
                  Get Started{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              {/* <button
                onClick={handleScheduleMeeting}
                className="group px-8 py-4 bg-white text-gray-900 rounded-xl border-2 border-gray-200 
                      hover:border-indigo-600 transition-colors"
              >
                <span className="flex items-center font-medium">
                  Schedule Demo <Calendar className="ml-2 w-5 h-5" />
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-24 bg-gradient-to-b from-white to-blue-50"
        id="available-now"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-20 text-center">
            Available{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Now
            </span>
          </h2>

          {Object.entries(existingCard).map(([name, { id, features }]) => (
            <div key={id} className="max-w-5xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600" />
                <div className="bg-white md:rounded-r-3xl rounded-lg p-6 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        {name}
                      </h3>
                      <div className="space-y-4">
                        <button
                          onClick={() => (window.location.href = "/pricing")}
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
                      flex items-center justify-center group"
                        >
                          Subscribe{" "}
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                          onClick={handleScheduleMeeting}
                          className="w-full py-3 bg-gray-50 text-gray-900 rounded-xl hover:bg-gray-100 
                      transition-colors flex items-center justify-center"
                        >
                          Schedule Demo <Calendar className="ml-2 w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = `/real-estate?aiId=${id}#try-assistant`)
                          }
                          className="w-full py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 
                      transition-colors flex items-center justify-center"
                        >
                          Try Now <Play className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="group bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
                              <p className="font-medium text-gray-900 text-sm md:text-base">
                                {feature}
                              </p>
                            </div>
                            <p className="text-gray-500 ml-5 text-sm md:text-base">
                              Streamline your workflow with automated{" "}
                              {feature.toLowerCase()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-20 text-center">
            Coming{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Soon
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(upcomingCard).map(([name, features]) => (
              <div key={name} className="relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl 
                              transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
                />
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full opacity-10"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient1)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        d="M30 50 L45 65 L70 35"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {name}
                  </h3>
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => (window.location.href = "/pricing")}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
                                flex items-center justify-center group"
                    >
                      Subscribe{" "}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      onClick={handleScheduleMeeting}
                      className="w-full py-3 bg-gray-50 text-gray-900 rounded-xl hover:bg-gray-100 
                                transition-colors flex items-center justify-center"
                    >
                      Schedule Demo <Calendar className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isScheduleModalOpen && (
        <ScheduleMeetingModal
          isOpen={"schedule"}
          onClose={() => setScheduleModalOpen(false)}
          bot={existingCard}
          mode="schedule"
          user={user}
        />
      )}
    </div>
  );
};

export default LandingPage;
