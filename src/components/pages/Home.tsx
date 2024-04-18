import { lazy, Suspense, useEffect } from "react";
import { parallaxData } from "../../constants/parallax";
import Spinner from "../Spinner";
import "../../App.css";

const VideoLanding = lazy(() => import("../VideoLanding"));
const Navbar = lazy(() => import("../HomePageSections/Navbar"));
const Footer = lazy(() => import("../HomePageSections/Footer"));
const News = lazy(() => import("../HomePageSections/News"));
const CountDown = lazy(() => import("../HomePageSections/CountDown"));
const Sponsors = lazy(() => import("../HomePageSections/Sponsors"));
const ParallaxProvider = lazy(
  () => import("../HomePageSections/ParallaxProvider")
);
const ParallaxContent1 = lazy(
  () => import("../HomePageSections/ParallaxContent1")
);
const ParallaxContent2 = lazy(
  () => import("../HomePageSections/ParallaxContent2")
);
const MainTopics = lazy(() => import("../HomePageSections/MainTopics"));
const Tools = lazy(() => import("../Tools"));
const ProgressBar = lazy(() => import("../ProgressBar"));



const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page after render the pages
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ProgressBar />
        <div className="md:hidden">
          <Tools />
        </div>

        <div className="sm:bg-sky-100 dark:sm:bg-slate-900  ">
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
      </Suspense>
    </>
  );
};
export default App;
