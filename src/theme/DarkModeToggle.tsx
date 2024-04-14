import { useContext } from "react";
import { mainContext } from "../provider/MainContext";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle: React.FC = () => {
  const { toggleDarkMode } = useContext(mainContext);
  return (
    <div>
      <button
        className="delay-100 duration-300 rounded-full h-[3rem] w-[3rem] 
         dark:hover:bg-gray-700 bg-gray-400 hover:bg-gray-500 dark:bg-gray-800 
          dark:text-gray-200 *:z-[1000000] "
        onClick={toggleDarkMode}
      >
        <IoMoonOutline
          className="text-[1.6rem] py-[1.7px] mx-auto transition-all animate-in fade-in-100
          duration-300 text-gray-900 hover:text-gray-200 dark:text-gray-200 dark:-rotate-180"
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
