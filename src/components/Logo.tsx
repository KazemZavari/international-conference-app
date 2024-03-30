import logo from "../assets/img/sharif-logo-1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {  VariantsLogo } from "../assets/Motions/HomePageMotion";
const Logo: React.FC = () => {
  return (
    <Link to="/">
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={VariantsLogo}
      className="absolute pr-4 ml-10  ">
        <img className="w-44 2xl:w-[13.5rem]" src={logo} alt="logo" />
      </motion.div>
    </Link>
  );
};

export default Logo;
