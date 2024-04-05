import logo from "../assets/img/sharif-logo-1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {  VariantsLogo } from "../assets/Motions/HomePageMotion";
const Logo: React.FC = () => {
  return (
    <Link to="/" className=" mt-5">
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={VariantsLogo}
      className="absolute ml-7 bg-black/50 dark:bg-white/10 hover:bg-black/60
      dark:hover:bg-white/15 rounded-full duration-700 ">
        <img className="2xl:w-[12rem] xl:w-[10rem] lg:w-[8rem] w-[14rem] z-50" src={logo} alt="logo" />
      </motion.div>
    </Link>
  );
};

export default Logo;
