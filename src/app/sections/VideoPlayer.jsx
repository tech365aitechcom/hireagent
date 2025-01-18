"use client";
import React, { useState } from "react";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-blue-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-blue-100">
            Watch how our AI Assistant transforms your workflow
          </p>
        </div>
        <video
          className={`max-w-4xl mx-auto h-full object-cover ${
            isLoading ? "hidden" : "block"
          }`}
          controls
          onLoadedData={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        >
          <source src="/dummy.mp4" type="video/mp4" />
          <source src="/dummy.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
