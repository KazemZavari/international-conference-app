import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { VariantsUp } from "../assets/Motions/HomePageMotion";
import { Link } from "react-router-dom";
const RegisterBotton = () => {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsUp}
        className=" group text-blue-950 hover:text-white font-Roboto text-[1.1rem] 
                      absolute right-72 top-[10rem] mx-auto px-3 py-1 hover:bg-transparent
                     items-center bg-amber-500 rounded-t-full rounded-r-full  
                     border-[1px] border-yellow-100  hover:border-white
                     duration-300 "
      >
        <Link to="/loginPage" className="flex">
          {/* <FaAnglesDown className="text-white group-hover:text-orange-500 animate- " /> */}
          <div className="h-3 w-3 bg-red-600 rounded-full absolute -top-[2px] right-1
          duration-1000 animate-ping " />
          <span className=" mr-3">Register</span>
          
        </Link>
      </motion.div>
    </>
  );
};

export default RegisterBotton;
