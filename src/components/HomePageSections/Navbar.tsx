import "rc-menu/assets/index.css";
import Logo from "../Logo";
import Menuu from "./Menuu";
import { motion } from "framer-motion";
import ScrollDown from "../ScrollDown";
import { VariantsDown, VariantsUp } from "../../assets/Motions/HomePageMotion";
import RegisterBotton from "../RegisterBotton";
import Drawer from "../Drawer"

// import DarkModeToggle from "../../theme/DarkModeToggle";

const Navbar = () => {
  return (
    <>
     <Drawer />
      <nav className=" 2xl:overflow-hidden z-1">
        <div className="flex justify-start w-[90%] pt-2 overflow-hidden">
          <RegisterBotton />

          <Logo />
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={VariantsDown}
            className="pt-10 text-left text-slate-950 dark:text-amber-400 text-[1rem] font-bold
             pl-[22%] lg:pl-[16%] pb-10 md:hidden  "
          >
            <h3>
              International Conference on Energy Resilience, and Sustainability
            </h3>
            <h4>Sharif University of Technology, Tehran, Iran</h4>
            <h5>18-19 April 2024</h5>
          </motion.div>
        </div>

        <Menuu />
        <ScrollDown />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={VariantsUp}
          className=" mt-[3rem] 2xl:mt-[4rem] mx-auto text-slate-950 py-3 px-2 rounded-3xl
           bg-white/20 dark:bg-black/30 w-[52rem] lg:w-[79%] dark:text-amber-400 backdrop-blur-[50px]
            shadow-slate-100 dark:shadow-slate-400 shadow-sm md:mt-10  mb-20"
        >
          <h1 className=" text-[1.7rem] lg:text-[1.3rem] md:text-[1rem] font-bold mb-4 md:mb-2">
            International Conference on Energy Resilience, and Sustainability
          </h1>
          <h2 className="text-[1.2rem] font-bold  lg:text-[1.1rem] md:text-[.9rem]">
            Sharif University of Technology, TEHRAN, IRAN
          </h2>
          <h3 className=" text-[1.2rem] font-bold pt-1 lg:text-[1.1rem] md:text-[.9rem] ">18-19 April 2024</h3>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
