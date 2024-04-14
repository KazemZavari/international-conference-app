import DarkModeToggle from "../theme/DarkModeToggle";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsFullscreenExit } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import { IoColorFillOutline } from "react-icons/io5";
import { BsX } from "react-icons/bs";
import { useContext } from "react";
import { mainContext } from "../provider/MainContext";
const Tools: React.FC = () => {
  const { visible, handleVisible } = useContext(mainContext);
  return (
    <>
      <div className="group cursor-pointer">
        <div
          onClick={handleVisible}
          className="flex justify-center items-center z-50 fixed right-6 bottom-6 lg:right-3 lg:bottom-4 cursor-pointer
          w-[3rem] h-[3rem] lg:h-[2.5rem] lg:w-[2.5rem] bg-gray-800 darK:bg-gray-800 hover:bg-yellow-500
           rounded-full shadow-2xl duration-1000 "
        >
          {visible ? (
            <BsX
              size={36}
              className="text-yellow-400 hover:text-[#0d1224] duration-500 hover:rotate-90 "
            />
          ) : (
            <FaWandMagicSparkles
              size={22}
              className="text-yellow-400 hover:text-[#0d1224] duration-500"
            />
          )}
        </div>
        {visible && (
          <div className="fixed z-50 right-[.5rem] lg:-mr-4 bottom-[4.3rem] lg:bottom-[3.3rem] bg-transparent h-auto w-20 ">
            <div className="flex justify-center pb-[1px] animate-in duration-500 slide-in-from-bottom-32">
              <div
                className="h-[3rem] w-[3rem] lg:h-[2.5rem] lg:w-[2.5rem] dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-gray-400
                 hover:bg-gray-500 rounded-full flex justify-center items-center duration-500
                 text-gray-900 hover:text-gray-200 "
              >
                <IoColorFillOutline size={20} />
              </div>
            </div>

            <div className="flex justify-center pb-[1px] animate-in duration-500 slide-in-from-bottom-24 ">
              <div
                className="h-[3rem] w-[3rem] lg:h-[2.5rem] lg:w-[2.5rem] dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-gray-400
               hover:bg-gray-500  rounded-full flex justify-center items-center duration-500 
               text-gray-900 hover:text-gray-200"
              >
                <BsFullscreenExit size={22} />
              </div>
            </div>
            <div className="flex justify-center pb-[1px] animate-in duration-500 slide-in-from-bottom-12">
              <div
                className="h-[3rem] w-[3rem] lg:h-[2.5rem] lg:w-[2.5rem] dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-gray-400
               hover:bg-gray-500 rounded-full flex justify-center items-center duration-500
               text-gray-900 hover:text-gray-200"
              >
                <AiOutlineSmile size={20} />
              </div>
            </div>
            <div className="flex justify-center pb-[5px] animate-in duration-500 slide-in-from-bottom-8 ">
              <div
                className="h-[3rem] w-[3rem] lg:h-[2.5rem] lg:w-[2.5rem] dark:bg-gray-800
                 dark:text-gray-200 rounded-full flex justify-center items-center 
               duration-500 "
              >
                <DarkModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tools;
