import React from "react";
import Tools from "../components/Tools";
import Footer from "../components/HomeSections/Footer";
import GridLight from "../components/GridLight";
import Menuu2 from "../components/pages/Menuu2";

type SinglePageLayoutProps = {
  children: React.ReactNode;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({ children }) => {
  return (
    <>
      <Tools />
      <GridLight />
      <div className="bg-[#0d1224] w-[100%] mx-auto pt-2 ">
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
