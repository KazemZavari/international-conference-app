import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../theme/DarkModeToggle";
import { Fragment, MouseEventHandler } from "react";
import { Popover, Transition } from "@headlessui/react";

import { FaWandMagicSparkles } from "react-icons/fa6";
import { LuMoon } from "react-icons/lu";
import { BsFullscreenExit } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import { IoColorFillOutline } from "react-icons/io5";
type toggleProps={
  toggleDarkMode:MouseEventHandler
}
const Tools: React.FC<toggleProps> = ({toggleDarkMode}) => {
  return (
    <>
      <div className="group">
        <div
          className=" flex justify-center items-center z-50 fixed right-6 bottom-6 h-[3rem] 
                    w-[3rem] bg-gray-700 group-hover:bg-yellow-500 rounded-full
                     shadow-2xl duration-1000 "
        >
          <FaWandMagicSparkles
            size={22}
            className="text-yellow-400 group-hover:text-[#0d1224]"
          />
        </div>
   
        <div
          className="fixed z-50 right-[.5rem] bottom-[4.3rem] bg-transparent h-auto w-20 hidden group-hover:block
                        "
        >

            <div className="flex justify-center pb-[2px] animate-in duration-500 slide-in-from-bottom-24">
              <div className="h-[3rem] w-[3rem] bg-gray-300 rounded-full flex justify-center items-center  duration-500 ">
                <IoColorFillOutline size={20} />
              </div>
            </div>
            <div className="flex justify-center pb-[2px] animate-in duration-500 slide-in-from-bottom-16 ">
              <div className="h-[3rem] w-[3rem] bg-gray-300 rounded-full flex justify-center items-center  duration-500 ">
                {/* <LuMoon size={20} /> */}
                <DarkModeToggle toggleDarkMode={toggleDarkMode}/>
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
 
      </div>
    </>
  );
};

export default Tools;
