import logo from "../../assets/img/sharif-logo-1.png";
import { GoArrowRight } from "react-icons/go";
import Social from "./Social";
import { motion } from "framer-motion";
import {
  VariantsUp,
  VariantsLeft,
  VariantsRight,
} from "../../assets/Motions/HomePageMotion";
const Footer = () => {
  return (
    <>
      <div
        className="h-[21rem] md:h-[31rem] xs:h-[31rem] w-[100%] bg-cyan-800 dark:bg-cyan-950 grid 
      grid-cols-7 pt-16 px-10 lg:px-5 gap-2 xs:gap-0 overflow-hidden relative"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={VariantsLeft}
          className="col-span-2 lg:hidden"
        >
          <div className="logo">
            <img className="w-44 xl:w-36 mx-auto" src={logo} alt="logo" />
            <h3
              className="mx-auto text-white dark:text-yellow-300 text-[1.4rem] xl:text-[1.2rem] 
          font-semibold"
            >
              Sharif University of Technology
            </h3>
          </div>
          <span
            className="absolute left-3 bottom-5 text-white dark:text-yellow-400 opacity-80
         text-[.9rem]"
          >
            © 2024 All Rights Reserved{" "}
          </span>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={VariantsUp}
          className="col-span-3 lg:col-span-4 md:col-span-full text-left ml-12 md:ml-5 text-white
         dark:text-yellow-300"
        >
          <h3 className="text-[1.5rem] sm:text-[1.2rem]">
            <strong>ICERS</strong>2024
          </h3>
          <p className="mt-3 text-[1.1rem] sm:text-[1rem] tracking-wider mb-6  ">
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
          className="col-span-2 sm:col-span-full ml-3  sm:ml-5 text-left text-white
         dark:text-yellow-300"
        >
          <h3 className="text-[1.2rem] font-bold sm:font-light ">
            Stay in Touch
          </h3>
          <form method="post" className="mt-5 sm:mt-2">
            <input
              type="text"
              placeholder="Enter Your Email To Join Our Team"
              className="bg-transparent border-b-[1px] p-2 w-[16rem] sm:w-[20rem] xs:w-[14rem] "
            />
            <div
              className="group duration-500 text-right 3xl:mr-[10.7rem] 2xl:mr-[3.2rem]
             xl:mr-[5.2rem] lg:mr-[1rem] md:-mr-[4.2rem] sm:mr-[12.7rem] xs:mr-[4.8rem] align-middle"
            >
              <button
                className=" px-4 md:px-2 md:py-2 py-3 text-[1rem] md:text-[.8rem] text-white rounded-s-[2rem]
              rounded-b-[2rem] hover:bg-white bg-teal-600 dark:bg-yellow-600 hover:text-teal-800
               dark:hover:text-black mt-2 duration-1000 "
              >
                subscribe
                <GoArrowRight
                  className="inline-block ml-3 md:ml-1 group-hover:-rotate-45 group-hover:-mt-5 text-[1.5rem] md:text-[1rem]
                group-hover:ml-1 duration-500"
                />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <div className="hidden sm:block w-[100%] bg-slate-900 py-3 text-[.9rem] text-gray-400 font-semibold">
        {" "}
        © 2024 All Rights Reserved{" "}
      </div>
    </>
  );
};

export default Footer;
