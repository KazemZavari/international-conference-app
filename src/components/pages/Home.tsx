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
import { useState, useEffect } from "react";
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);

    localStorage.setItem("darkMode", (!darkMode).toString());

    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      
        <ProgressBar />
        <Tools toggleDarkMode={toggleDarkMode}   />
        <div className="background-overlay bg-slate-400">
          <Video darkMode={darkMode} />
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
