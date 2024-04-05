import React from "react";
import Tools from "../components/Tools";
import Footer from "../components/HomePageSections/Footer";
import GridLight from "../components/GridLight";
import Menuu2 from "../components/pages/Menuu2";

type SinglePageLayoutProps = {
  children: React.ReactNode;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> =
 ({ children }) => {
  return (
    <>
      <Tools />
      <div className="opacity-0 dark:opacity-100">
      <GridLight />
      </div>
     
      <div className="dark:bg-[#0d1224] bg-gray-200 w-[100%] mx-auto pt-2 ">
        <div className="mt-20 flex justify-center">
          <Menuu2 />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SinglePageLayout;
