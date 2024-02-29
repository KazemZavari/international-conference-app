import "./App.css";
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import ColorDiv from "./components/ColorDiv";
import CountDown from "./components/CountDown";
import Sponsors from "./components/Sponsors";
import ParallaxSection from "./components/ParallaxSection";
// import img1 from "./assets/img/18.jpg"

const App = () => {
  return (
    <>
      <div className=" background-overlay bg-slate-400">
        <Video />
        <Navbar />
      </div>
      <CountDown />
      <ParallaxSection
        backgroundImage="bg-[url('./assets/img/pic-9.jpg')]"
        height="h-[65vh]"
        opacity="opacity-70"
      >
        <div className=""></div>
      </ParallaxSection>

      <div className="bg-[#114b5f] h-[150vh] inlin-flex justify-center relative overflow-hidden">
        <ColorDiv />
        <Divider borderText="Main Topics of The Conference" />
        <div className="content"></div>
      </div>
      <div className="bg-[#114b5f] bg-gradient-to-t from-gray-200 to-[#114b5f] h-[50vh]"></div>

      <ParallaxSection
        backgroundImage="bg-[url('./assets/img/pic-10.jpg')]"
        height="h-[100vh]"
      >
        <p>rt</p>
      </ParallaxSection>

      <Sponsors />
      <Footer />
    </>
  );
};
export default App;
