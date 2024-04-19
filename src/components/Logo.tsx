import logo from "../assets/img/sharif-logo-1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VariantsDown } from "../Motions/HomePageMotion";
const Logo: React.FC = () => {
  return (
    <Link to="/" className=" mt-5 lg:mt-3 sm:mt-0">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={VariantsDown}
        className="absolute ml-8 lg:ml-4 sm:ml-1 bg-black/50 dark:bg-white/10 hover:bg-black/60
      dark:hover:bg-white/15 rounded-full duration-500"
      >
        <img
          className="2xl:w-[12rem] xl:w-[10rem] lg:w-[5.5rem] w-[14rem] sm:w-16 z-50"
          src={logo}
          alt="logo"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
