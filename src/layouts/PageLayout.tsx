import Tools from "../components/Tools";
import Footer from "../components/HomePageSections/Footer";

import StickyNavbar from "../components/StickyNavbar";
import { useEffect } from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import Metors from "../components/Metors";
import { useContext } from "react";
import { mainContext } from "../provider/MainContext";


type SinglePageLayoutProps = {
  children: React.ReactNode;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({ children }) => {
  const { darkMode } = useContext(mainContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page after render the pages
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Tools />
      </div>

      <div className="dark:bg-[#0d1224] bg-gray-200 w-[100%] mx-auto pt-2 relative ">
        {darkMode && (
          <>
            <BackgroundGradient />
            <div className="lg:w-[20%]">
            <Metors />
            </div>
            
          </>
        )}

        <div className="mt-16 flex justify-center  ">
          <StickyNavbar />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SinglePageLayout;
