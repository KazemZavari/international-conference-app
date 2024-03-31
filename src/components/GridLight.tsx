import React from "react";
import gridLighter from "../assets/img/bg-grid-lighter.svg";

const GridLight: React.FC = () => {
  return (
    <>
      <img
        alt="background"
        className="absolute left-[5rem] sm:-left-[5rem] w-[75rem] xl:w-[55rem] lg:w-[40rem] md:w-[25rem] sm:w-[25rem] xs:w-[15rem]
        overflow-x-hidden "
        src={gridLighter}
      />
    </>
  );
};

export default GridLight;
