import { motion } from "framer-motion";
import { VariantsDown } from "../assets/Motions/HomePageMotion";
import { Link } from "react-router-dom";
const RegisterBotton = () => {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className="group text-gray-700 hover:text-white font-Roboto text-[1.1rem] md:text-[.9rem]
         absolute right-[20%] top-[10rem] lg:right-[4.7rem] lg:top-[3rem] md:right-[4.2rem] 
         sm:right-12 mx-auto px-3 py-1 hover:bg-black/60 items-center bg-amber-500 rounded-t-full 
         rounded-r-full border-[1px] border-yellow-100 hover:border-white duration-300  "
      >
        <Link to="/loginPage" className="flex">
          <div
            className="h-3 w-3 bg-red-600 rounded-full absolute -top-[2px] right-1
          duration-1000 animate-ping "
          />
          <span className=" mr-3">Register</span>
        </Link>
      </motion.div>
    </>
  );
};

export default RegisterBotton;
