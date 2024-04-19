import {
  ParallaxItemsImportantDates,
  ParallaxItemsDownloadCenter,
} from "../../constants/parallax";
import Divider from "../Divider";
import { motion } from "framer-motion";
import { VariantsDown } from "../../Motions/HomePageMotion";

const ParallaxContent1 = () => {
  return (
    <>
      {/* Download Center Section */}
      <div className="mt-5">
        <Divider borderText="Download Center" borderColor="border-white" />
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className="mt-[1rem] grid grid-cols-3 mb-5 px-32 lg:px-20 md:px-10 xs:px-3 justify-items-center"
      >
        {ParallaxItemsDownloadCenter.map((item) => (
          <div className="col-span-1 ">
            <a
              href={item.href}
              target="_self"
              className="dark:text-amber-600 dark:hover:text-white
            hover:text-amber-400  "
            >
              {item.icon}
            </a>
            <h3 className="font-bold text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-slate-300 sm:mb-10">
              {item.title}
            </h3>
          </div>
        ))}
      </motion.div>

      {/* Important Dates Section */}
      <div className="mt-5">
        <Divider borderText="Important Dates" borderColor="border-white" />
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className="mt-[2rem] grid grid-cols-2 justify-items-center gap-5 md:gap-y-12 px-20 lg:px-12
       sm:px-8 xs:px-2 xs:gap-y-8 "
      >
        {ParallaxItemsImportantDates.map((item) => (
          <div key={item.title}
            className="w-[100%] rounded-[20px] shadow-sm col-span-1 md:col-span-full 
           py-3 backdrop-blur-[50px] bg-white/30 shadow-slate-300 dark:bg-black/40
            dark:shadow-yellow-400 text-slate-950 dark:text-yellow-500"
          >
            <h3 className="font-bold text-[1.6rem] lg:text-[1.4rem] sm:text-[1.1rem] leading-8 px-2 ">
              {item.title}
            </h3>
            <h4 className="font text-[1.5rem] lg:text-[1.2rem] sm:text-[.95rem] mt-5 lg:mt-3">{item.date}</h4>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ParallaxContent1;
