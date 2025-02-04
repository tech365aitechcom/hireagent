import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("a276ca5f-59fd-489e-af17-e79d12b6d391");

const VapiAssistant = () => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);
    });

    vapi.on("error", (error) => {
      console.error(error);
      setConnecting(false);
    });

    return () => {
      vapi.off("call-start");
      vapi.off("call-end");
      vapi.off("error");
    };
  }, []);

  const startCall = () => {
    setConnecting(true);
    vapi.start("1e78b3a4-0014-47b7-9e28-9dfce3f4c18d");
  };

  const endCall = () => {
    vapi.stop();
  };

  return (
    <div>
      {!connected ? (
        <button
          onClick={startCall}
          disabled={connecting}
          className="px-6 md:px-10 py-2 md:py-4 text-base md:text-lg font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:shadow-lg hover:scale-105"
        >
          {connecting ? "Connecting..." : "Try Inbound Call"}
        </button>
      ) : (
        <button
          onClick={endCall}
          disabled={connecting}
          className="px-6 md:px-10 py-2 md:py-4 text-base md:text-lg font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:shadow-lg hover:scale-105"
        >
          End Call
        </button>
      )}
    </div>
  );
};

export default VapiAssistant;
