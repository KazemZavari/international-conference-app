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
      <div className=" bg-black h-[100vh] w-[100%] mx-auto pt-2 ">
        <Logo />
        <div className="pt-16">
          <Menuu />
        </div>

        {children}
        <Footer />
      </div>
    </>
  );
};

export default SinglePageLayout;
