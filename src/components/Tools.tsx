import DarkModeToggle from "../theme/DarkModeToggle";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsFullscreenExit } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import { IoColorFillOutline } from "react-icons/io5";
import { BsX } from "react-icons/bs";

import { useState } from "react";
const Tools: React.FC = () => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <div className="group">
        <div
          onClick={() => {
            setvisible(!visible);
          }}
          className=" flex justify-center items-center z-50 fixed right-6 bottom-6 h-[3rem] cursor-pointer
                    w-[3rem] bg-gray-700 group-hover:bg-yellow-500 rounded-full shadow-2xl duration-1000"
        >
          {visible ? (
            <BsX
              size={36}
              className="text-yellow-400 group-hover:text-[#0d1224] 
              duration-500 hover:rotate-90 "
            />
          ) : (
            <FaWandMagicSparkles
              size={22}
              className="text-yellow-400 group-hover:text-[#0d1224] duration-500"
            />
          )}
        </div>
        {visible && (
          <div
            className="fixed z-50 right-[.5rem] bottom-[4.3rem] bg-transparent h-auto w-20 
            "
          >
            <div className="flex justify-center pb-[2px] animate-in duration-500 slide-in-from-bottom-24">
              <div
                className="h-[3rem] w-[3rem] bg-gray-300 rounded-full flex justify-center items-center 
                    duration-500 "
              >
                <IoColorFillOutline size={20} />
              </div>
            </div>
            <div className="flex justify-center pb-[2px] animate-in duration-500 slide-in-from-bottom-16 ">
              <div
                className="h-[3rem] w-[3rem] bg-gray-300 rounded-full flex justify-center items-center 
               duration-500 "
              >
                {/* <LuMoon size={20} /> */}
                <DarkModeToggle />
              </div>
            </div>
            <div className="flex justify-center pb-[2px] animate-in duration-500 slide-in-from-bottom-12 ">
              <div className="h-[3rem] w-[3rem] bg-gray-300 rounded-full flex justify-center items-center  duration-500 ">
                <BsFullscreenExit size={20} />
              </div>
            </div>
            <div className="flex justify-center pb-[8px] animate-in duration-500 slide-in-from-bottom-8">
              <div className="h-[3rem] w-[3rem] bg-gray-300 rounded-full flex justify-center items-center  duration-500 ">
                <AiOutlineSmile size={20} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tools;
