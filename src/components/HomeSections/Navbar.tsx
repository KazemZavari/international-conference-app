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
      <nav className="h-[100vh] z-1   ">
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
            className="pt-10 text-left text-amber-400 dark:text-amber-50 text-[1rem] font-bold pl-[15.7rem]
                     pb-10 xl:ml-20 2xl:ml-32  "
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
          className="mt-[3rem] 2xl:mt-[4rem]  mx-auto text-amber-500 "
        >
          <h1 className=" text-[1.7rem] font-bold mb-4">
            International Conference on Energy Resilience, and Sustainability
          </h1>
          <h2 className="text-[1.2rem] font-bold">
            Sharif University of Technology, TEHRAN, IRAN
          </h2>
          <h3 className=" text-[1.2rem] font-bold pb-">18-19 April 2024</h3>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
