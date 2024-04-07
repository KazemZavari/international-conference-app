import "rc-menu/assets/index.css";
import Logo from "../Logo";
import Menuu from "./Menuu";
import { motion } from "framer-motion";
import ScrollDown from "../ScrollDown";
import { VariantsDown, VariantsUp } from "../../assets/Motions/HomePageMotion";
import RegisterBotton from "../RegisterBotton";


// import DarkModeToggle from "../../theme/DarkModeToggle";

const Navbar = () => {
  return (
    <>

      <nav className=" 2xl:overflow-hidden z-1 lg:h-[27rem] md:h-[22rem]">
        <div className="flex justify-start w-[90%] sm:w-[95%] pt-2 overflow-hidden">
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
          className="mt-[3rem] 2xl:mt-[4rem] sm:mt-[1.5rem] mx-auto text-slate-950 py-3 px-2 rounded-3xl
           bg-green-400/60 dark:bg-black/30 w-[52rem] xl:w-[63%] lg:w-[79%] sm:w-[88%] dark:text-amber-400
            backdrop-blur-[50px] shadow-slate-100 dark:shadow-yellow-300 shadow-sm md:mt-10 mb-16
             sm:mb-8"
        >
          <h1 className=" text-[1.7rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1rem] font-bold 
          sm:font-semibold mb-4 md:mb-2">
            International Conference on Energy Resilience, and Sustainability
          </h1>
          <h2 className="text-[1.2rem] font-bold lg:text-[1.1rem] md:text-[.9rem] sm:font-[.8rem] leading-6">
            Sharif University of Technology, TEHRAN, IRAN
          </h2>
          <h3 className=" text-[1.2rem] font-bold pt-1 lg:text-[1.1rem] md:text-[.9rem] sm:font-semibold">18-19 April 2024</h3>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
