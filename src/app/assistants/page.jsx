import WithWithout from "../sections/WithWithout";
import AssistantHero from "../sections/AssistantHero";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";
import GetStarted from "../sections/GetStarted";
import TryAssistant from "../sections/TryAssistant";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <AssistantHero />
      <WithWithout />
      <TryAssistant />
      <Features />
      <Testimonial />
      <GetStarted />
    </div>
  );
};

export default page;
