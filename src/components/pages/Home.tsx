import "../../App.css";
import VideoLanding from "../VideoLanding";
import Navbar from "../HomePageSections/Navbar";
import Footer from "../HomePageSections/Footer";
import News from "../HomePageSections/News";
import CountDown from "../HomePageSections/CountDown";
import Sponsors from "../HomePageSections/Sponsors";
import ParallaxProvider from "../HomePageSections/ParallaxProvider";
import ParallaxContent1 from "../HomePageSections/ParallaxContent1";
import ParallaxContent2 from "../HomePageSections/ParallaxContent2";
import MainTopics from "../HomePageSections/MainTopics";
import { parallaxData } from "../../constants/parallax";
import Tools from "../Tools";
import ProgressBar from "../ProgressBar";

const App: React.FC = () => {
  return (
    <>
      <ProgressBar />
      <Tools />
      <div className="background-overlay bg-slate-400">
        <VideoLanding />
        <Navbar />
      </div>
      <CountDown />
      <ParallaxProvider
        backgroundImage={parallaxData.bg[0]}
        height={parallaxData.height[0]}
      >
        <ParallaxContent1 />
      </ParallaxProvider>
      <MainTopics />
      <News />
      <ParallaxProvider
        backgroundImage={parallaxData.bg[1]}
        height={parallaxData.height[1]}
      >
        <ParallaxContent2 />
      </ParallaxProvider>
      <Sponsors />
      <Footer />
    </>
  );
};
export default App;
