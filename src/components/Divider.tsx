import { motion } from "framer-motion";
import { VariantsDown } from "../Motions/HomePageMotion";

type dividerProps = {
  borderText: string;
  borderWidth?: string;
  borderColor?: string;
  textColor?: string;
};

const Divider: React.FC<dividerProps> = ({
  borderText,
  borderWidth,
  borderColor,
  textColor,
}) => {
  return (
    <motion.div
    initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsDown}
      className={`relative inline-flex mt-[1rem] lg:mt-[1rem] sm:-mt-10 py-[1.2rem] md:py-[.4rem]  
       items-center w-[60%] xl:w-[55%] md:w-[65%] sm:w-[60%] xs:w-[75%] ${borderWidth} `}
    >
      <div
        className={`flex-grow border-t ${borderColor} border-[.1rem] sm:border-[.08rem] `}
      ></div>
      <span
        className={`flex-shrink mx-4 md:mx-1 text-[#f9c80e] ${textColor} font-bold md:font-semibold
         text-[2.3rem] lg:text-[1.9rem] md:text-[1.6rem] sm:text-[.9rem] `}
      >
        {borderText}
      </span>
      <div
        className={`flex-grow border-t ${borderColor} border-[.1rem]`}
      ></div>
    </motion.div>
  );
};

export default Divider;
