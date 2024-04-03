import { useState, useEffect, MouseEventHandler } from "react";
// import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
type toggleProps = {
  toggleDarkMode: MouseEventHandler;
};
const DarkModeToggle: React.FC<toggleProps> = ({ toggleDarkMode }) => {
  // const [darkMode, setDarkMode] = useState<boolean>(false);

  // useEffect(() => {
  //   const isDarkMode = localStorage.getItem("darkMode") === "true";
  //   setDarkMode(isDarkMode);

  //   document.documentElement.classList.toggle("dark", isDarkMode);
  // }, []);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);

  //   localStorage.setItem("darkMode", (!darkMode).toString());

  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <div>
      {/* <button
        className="delay-100 duration-300 rounded-full w-[3.7rem] h-8 border-2 dark:border-gray-400 border-gray-100
        dark:bg-gray-800 bg-sky-400 z-[1000000]"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FaMoon className="text-[1.6rem] py-[1.7px] ml-1 transition-all animate-in slide-in-from-right-3 
          duration-300 text-gray-100" />
        ) : (
          <FaSun className="text-[1.6rem] text-yellow-400 py-[1.7px] ml-7 transition-all animate-in
           slide-in-from-left-3 duration-300 " />
        )}
      </button> */}
      <button
        className="delay-100 duration-300 rounded-full h-[3rem] w-[3rem]
        dark:bg-gray-800 dark:hover:bg-gray-800/95 bg-gray-200 hover:bg-gray-300 z-[1000000]"
        onClick={toggleDarkMode}
      >
        <IoMoonOutline
          className="text-[1.6rem] py-[1.7px] mx-auto transition-all animate-in fade-in-100
          duration-500 text-gray-800 dark:text-gray-200 dark:rotate-180"
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
