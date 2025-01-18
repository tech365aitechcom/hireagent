"use client";
import axios from "axios";
import { baseURL } from "../urls";

const VideoPlayer = () => {
  const trackVideoClick = async (videoName) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/traction/create-video-imperssion`,
        {
          video: videoName,
        }
      );
      console.log("Impression tracked:", response.data);
    } catch (error) {
      console.error("Error tracking impression:", error);
    }
  };

  const handleVideoPlay = () => {
    trackVideoClick("Real Estate Video");
  };

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
          className="lg:max-w-4xl w-full mx-auto h-full object-cover rounded-lg"
          controls
          onPlay={handleVideoPlay}
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
