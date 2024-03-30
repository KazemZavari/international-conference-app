import {
  ParallaxItemsImportantDates,
  ParallaxItemsDownloadCenter,
} from "../constants/parallax";
import Divider from "./Divider";
import { motion } from "framer-motion";
import { VariantsDown } from "../assets/Motions/HomePageMotion";

const ParallaxContent1 = () => {
  return (
    <>
      {/* Download Center Section */}
      <Divider borderText="Download Center" />
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={VariantsDown}
      className="mt-[1rem] grid grid-cols-3 mb-5 px-32 justify-items-center">
        {ParallaxItemsDownloadCenter.map((item) => (
          <div className="col-span-1 ">
          <a href={item.href} target="_self" className="text-amber-300" >{item.icon}</a>
            <h3 className="font-bold text-[1.6rem]">{item.title}</h3>
          </div>
        ))}
      </motion.div>

      {/* Important Dates Section */}
      <Divider borderText="Important Dates" />
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={VariantsDown}
      className="mt-[2rem] grid grid-cols-2 justify-items-center gap-8 px-20">
        {ParallaxItemsImportantDates.map((item) => (
          <div
            className="w-[60%] rounded-[20px] shadow-slate-100 shadow-sm
           py-3 backdrop-blur-[50px] bg-white/15 col-span-1"
          >
            <h3 className="font-bold text-[2rem] leading-8 px-2 ">
              {item.title}
            </h3>
            <h4 className="font text-[1.5rem] mt-5">{item.date}</h4>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ParallaxContent1;
