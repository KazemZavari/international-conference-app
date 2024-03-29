import React from "react";
import Menuu from "../components/Menuu";
import Tools from "../components/Tools";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
type SinglePageLayoutProps = {
  children: React.ReactNode;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({ children }) => {
  return (
    <>
      <Tools />
      <div className="bg-[#0d1224] w-[100%] mx-auto pt-2 ">
        <Logo />
        <div className="mt-20">
          <Menuu />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SinglePageLayout;
