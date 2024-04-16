import React from "react";
import gridLighter from "../assets/img/bg-grid-lighter.svg";

const GridLight: React.FC = () => {
  return (
    <>
      <img
        alt="background"
        className="absolute sm:-left-[1rem] w-[40rem] xl:w-[40rem] lg:w-[25rem]
         md:w-[15rem]  overflow-x-hidden "
        src={gridLighter}
      />
    </>
  );
};

export default GridLight;
