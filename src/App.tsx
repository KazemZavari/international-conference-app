import "./App.css";
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./components/News";
import CountDown from "./components/CountDown";
import Sponsors from "./components/Sponsors";
import ParallaxProvider from "./components/ParallaxProvider";
import ParallaxContent1 from "./components/ParallaxContent1";
import ParallaxContent2 from "./components/ParallaxContent2";
import MainTopics from "./components/MainTopics";
import { parallaxData } from "./constants/parallax";
const App = () => {
  return (
    <>
      <div className="background-overlay bg-slate-400">
        <Video />
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
{/* news Section */}
      <News />
      <ParallaxProvider
        backgroundImage={parallaxData.bg[1]}
        height={parallaxData.height[1]}
        // opacity="opacity-70"
      >
        <ParallaxContent2 />
      </ParallaxProvider>

      <Sponsors />
      <Footer />
    </>
  );
};
export default App;
