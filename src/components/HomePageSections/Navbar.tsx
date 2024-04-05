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
      <nav className="h-[100vh] z-1">
        <div className="flex justify-start w-[90%] pt-2 ">
          <div className="fixed top-10 right-20 w-10 h-10 z-[100000] ">
            {" "}
            {/* <DarkModeToggle /> */}
          </div>
          <RegisterBotton />
          <Logo />
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={VariantsDown}
            className="pt-10 text-left text-slate-950 dark:text-amber-400 text-[1rem] font-bold
             pl-[22%] pb-10   "
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
          className="mt-[3rem] 2xl:mt-[4rem] mx-auto text-slate-950 py-3 px-2 rounded-3xl
           bg-white/20 dark:bg-black/30 w-[52rem] dark:text-amber-400 backdrop-blur-[50px]
            shadow-slate-100 dark:shadow-slate-400 shadow-sm  "
        >
          <h1 className=" text-[1.7rem] font-bold mb-4">
            International Conference on Energy Resilience, and Sustainability
          </h1>
          <h2 className="text-[1.2rem] font-bold">
            Sharif University of Technology, TEHRAN, IRAN
          </h2>
          <h3 className=" text-[1.2rem] font-bold pt-1">18-19 April 2024</h3>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
