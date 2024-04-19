import { lazy, Suspense, useEffect } from "react";
import { parallaxData } from "../../constants/parallax";
import Spinner from "../Spinner";
import "../../App.css";

const VideoLanding = lazy(() => import("../HomePageSections/VideoLanding"));
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
import { ScrollProgress } from "../ScrollProgress";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page after render the pages
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ScrollProgress position="left" height={6} smoothness={true} />
        <div className="md:hidden">
          <Tools />
        </div>

        <div
          className="sm:bg-gradient-to-b sm:from-teal-600 sm:to-[#114b5f] dark:sm:bg-gradient-to-b
          dark:sm:from-teal-900 dark:sm:to-slate-900"
        >
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
