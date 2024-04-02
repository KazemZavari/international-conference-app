import "../../App.css";
import Video from "../Video";
import Navbar from "../HomeSections/Navbar";
import Footer from "../HomeSections/Footer";
import News from "../HomeSections/News";
import CountDown from "../HomeSections/CountDown";
import Sponsors from "../HomeSections/Sponsors";
import ParallaxProvider from "../HomeSections/ParallaxProvider";
import ParallaxContent1 from "../HomeSections/ParallaxContent1";
import ParallaxContent2 from "../HomeSections/ParallaxContent2";
import MainTopics from "../HomeSections/MainTopics";
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
