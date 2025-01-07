import WithWithout from "../sections/WithWithout";
import AssistantHero from "../sections/AssistantHero";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";
import GetStarted from "../sections/GetStarted";
import TryAssistant from "../sections/TryAssistant";
import ROI from "../sections/ROI";

const page = () => {
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
