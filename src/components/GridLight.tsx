import React from "react";
import gridLighter from "../assets/img/bg-grid-lighter.svg";

const GridLight: React.FC = () => {
  return (
    <>
      <img
        alt="background"
        className="absolute left-[5rem] w-[75rem] 
        overflow-x-hidden"
        src={gridLighter}
      />
    </>
  );
};

export default GridLight;
