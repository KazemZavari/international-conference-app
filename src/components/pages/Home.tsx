import "../../App.css";
import Video from "../Video";
import Navbar from "../Navbar";
import Footer from "../Footer";
import News from "../News";
import CountDown from "../CountDown";
import Sponsors from "../Sponsors";
import ParallaxProvider from "../ParallaxProvider";
import ParallaxContent1 from "../ParallaxContent1";
import ParallaxContent2 from "../ParallaxContent2";
import MainTopics from "../MainTopics";
import { parallaxData } from "../../constants/parallax";
import Tools from "../Tools";
import ProgressBar from "../ProgressBar";
const App: React.FC = () => {
  return (
    <>
      
        <ProgressBar />
        <Tools />
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
