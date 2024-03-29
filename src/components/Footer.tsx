import logo from "../assets/img/sharif-logo-1.png";
import { GoArrowRight } from "react-icons/go";
import Social from "./Social";
import { motion } from "framer-motion";
import {
  VariantsUp,
  VariantsLeft,
  VariantsRight,
} from "../assets/Motions/HomePageMotion";
const Footer = () => {
  return (
    <div
      className="h-[21rem] w-[100%] bg-[#114b5f] grid grid-cols-7 pt-16 px-10 gap-2
                    overflow-hidden relative"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsLeft}
        className="col-span-2"
      >
        <div className="logo">
          <img className="w-44 mx-auto" src={logo} alt="logo" />
          <h3 className="mx-auto text-white text-[1.4rem] font-semibold">
            Sharif University of Technology
          </h3>
        </div>
        <span className="absolute left-3 bottom-5 text-white opacity-80 text-[.9rem]">
          © 2024 All Rights Reserved{" "}
        </span>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsUp}
        className="col-span-3 text-left ml-12 text-white"
      >
        <h3 className="text-[1.5rem]">
          <strong>ICERS</strong>2024
        </h3>
        <p className="mt-3 text-[1.1rem] tracking-wider mb-6 ">
          Unit 320, 3rd Floor, No.180, Sharif Energy, Water and Environment
          Institute (SEWEI), Teymouri Blvd, North Tarasht, TEHRAN, IRAN.
        </p>

        <Social />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsRight}
        className="col-span-2  text-left text-white"
      >
        <h3 className="text-[1.2rem] font-bold">Stay in Touch</h3>
        <form method="post" className="mt-5">
          <input
            type="text"
            placeholder="Enter Your Email To Join Our Mai"
            className="bg-transparent border-b-[1px] p-2 w-[16rem] active:border-none focus:border-none
                        focus:shadow-md"
          />
          <div
            className="group hover:-mt-[.8rem] duration-500 text-right mr-[6.6rem] 2xl:mr-[10.7rem]
                         align-middle"
          >
            <button
              className=" px-8 py-4 text-[1rem] bg-teal-600 rounded-s-[2rem] rounded-b-[2rem]
               hover:bg-white hover:text-teal-800 mt-5 duration-500 "
            >
              SUBSCRIBE
              <GoArrowRight
                size={23}
                className="inline-block ml-3 group-hover:-rotate-45 group-hover:-mt-5 group-hover:ml-1 duration-500"
              />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Footer;
