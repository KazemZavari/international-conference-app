import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { VariantsDown } from "../assets/Motions/HomePageMotion";
const ScrollDown = () => {
  return (
    <motion.a
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={VariantsDown}
      className="group text-white hover:text-yellow-500 font-semibold text-[1.2rem] 
                    inline-flex group mt-10 mx-auto items-center bg-black/70 rounded-md px-6 py-3
                    hover:bg-transparent border-[1px] border-yellow-500 pb-3 hover:border-white
                     duration-300 "
      href="#start"
    >
      Let's go
      <FaAnglesDown className="text-white group-hover:text-orange-500 animate-bounce ml-2 mt-2 " />
    </motion.a>
  );
};

export default ScrollDown;
