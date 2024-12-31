"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SoundWave from "./SoundWave";
import { Mic, MicOff, MoreVertical, PhoneOff, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { ASSISTANT_SERVER_URL } from "../urls";
import { RealTimeAudioPlayer } from "../services/RealTimeAudioPlayer";

const Assistant = ({ id }) => {
  const router = useRouter();
  const websocketRef = useRef();
  const soundBufferRef = useRef(null);
  const streamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    setUser(JSON.parse(storedUser));
  }, []);

  const toggleMute = useCallback(() => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        if (isMuted) {
          audioTrack.enabled = true;
          setIsMuted(false);
        } else {
          audioTrack.enabled = false;
          setIsMuted(true);
        }
      }
    }
  }, [isMuted]);

  const endCall = useCallback(() => {
    websocketRef.current?.close();
    soundBufferRef.current.clearQueChunks();
    setShowModal(true);
  }, []);

  const onConnect = useCallback(() => {
    console.log("connected");
    const data = {
      event: "start",
      start: {
        user: {
          name: user.name,
        },
      },
    };
    websocketRef.current.send(JSON.stringify(data));
    setTimeout(() => sendStream(), 4000);
  }, []);

  useEffect(() => {
    if (!user) return;

    const ws = new WebSocket(`${ASSISTANT_SERVER_URL}?agent_id=${`${id}`}`);
    websocketRef.current = ws;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    soundBufferRef.current = new RealTimeAudioPlayer(setIsAISpeaking);

    ws.onopen = onConnect;
    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data); // Fix: Use `event.data` here.
      switch (data.event) {
        case "media":
          const base64Audio = data.media.payload;
          soundBufferRef.current.addAudioChunk(base64Audio);
          break;
        case "clear":
          soundBufferRef.current.clearQueChunks();
          break;
        case "limit_reached":
          alert("5 Limit Reached!");
          endCall();
          break;
      }
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      ws.close();
    };
  }, [user, onConnect, endCall]);

  const sendStream = async () => {
    console.log("start voice stream");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support audio recording.");
      return;
    }

    streamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        autoGainControl: true,
        noiseSuppression: true,
      },
    });

    mediaRecorderRef.current = new MediaRecorder(streamRef.current);
    mediaRecorderRef.current.ondataavailable = async (event) => {
      if (
        websocketRef.current &&
        websocketRef.current.readyState === WebSocket.OPEN
      ) {
        const blob = event.data;
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            const data = {
              event: "media",
              media: {
                payload: reader?.result?.split("base64,")[1],
              },
            };

            websocketRef.current.send(JSON.stringify(data));
          }
        };
        reader.readAsDataURL(blob);
      }
    };

    mediaRecorderRef.current.start(100);
  };

  const handleRating = (value) => {
    setRating(value);
    console.log(`User rated: ${value} stars`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="flex flex-col md:w-[500px] h-fit bg-gradient-to-br from-indigo-200 via-blue-200 to-indigo-300 rounded-3xl shadow-2xl backdrop-blur-lg">
        {/* Header */}
        <header className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-md shadow-md p-4 rounded-t-3xl">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-700 tracking-wide">
              Play <span className="text-indigo-500">AI</span>
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto p-6 flex flex-col items-center justify-center space-y-6">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center space-y-6 w-full max-w-2xl">
            {/* AI Icon */}
            <div
              className={`relative w-48 h-48 transition-all duration-500 ${
                isAISpeaking ? "animate-pulse" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full opacity-60"></div>
              <div className="absolute inset-2 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/bot-icon.webp"
                  alt="AI Assistant"
                  className="w-32 h-32 rounded-full"
                />
              </div>
            </div>
            {/* AI Title */}
            <h2 className="text-3xl font-semibold text-indigo-800">
              Your AI Assistant
            </h2>
            {/* Sound Wave */}
            <div className="w-full h-24 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl overflow-hidden grid place-items-center shadow-inner">
              <SoundWave isAnimating={isAISpeaking} />
            </div>
          </div>
        </main>

        {/* Footer Buttons */}
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md shadow-lg p-4 rounded-b-3xl">
          <div className="container mx-auto flex justify-center items-center space-x-6">
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className={`p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 ${
                isMuted
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gradient-to-br from-blue-200 to-indigo-300 text-gray-700"
              }`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            {/* End Call Button */}
            <button
              onClick={endCall}
              className="p-4 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-transform transform hover:scale-110"
            >
              <PhoneOff size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Feedback */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-2xl shadow-xl p-8 w-96">
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Thanks for the call! How did it go?
            </h2>

            <div className="flex justify-center items-center space-x-2 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`transition-transform transform hover:scale-125 ${
                    rating >= star ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  <Star size={32} />
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setShowModal(false);
                window.location.reload();
              }}
              className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-700 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
