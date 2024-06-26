import { ParallaxItems } from "../../constants/parallax";
import { VariantsUp } from "../../Motions/HomePageMotion";
import { motion } from "framer-motion";
const ParallaxContent1 = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={VariantsUp}
      className="mt-[4.2rem] sm:mt-[3.5rem] xs:mt-[2.5rem] grid grid-cols-2 justify-items-center 
      gap-8 sm:gap-5 lg:gap-x-2 sm:gap-x-0 px-28
       lg:px-10 sm:px-1  xs:px-10  sm:gap-y-4 "
    >
      {ParallaxItems.map((item) => (
        <div
          key={item.title}
          className="w-[90%] rounded-[20px] py-3 backdrop-blur-[10px] shadow-sm cursor-pointer 
           bg-white/10 col-span-1 xs:col-span-2 shadow-slate-300 dark:bg-black/40 dark:shadow-yellow-400
          text-slate-950 dark:text-yellow-400"
        >
          <h3 className="font-bold text-[2rem] xl:text-[1.5rem] sm:text-[1.2rem] ">{item.title}</h3>
          <h4 className="font text-[1.5rem] xl:text-[1.2rem] sm:text-[1rem]">{item.date}</h4>
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxContent1;
