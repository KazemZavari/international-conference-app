import Divider from "../Divider";
import NewsSwiper from "./NewsSwiper";
import { motion } from "framer-motion";
import { VariantsUp } from "../../assets/Motions/HomePageMotion";
const News = () => {
  return (
    <div className="bg-[#114b5f] dark:bg-[#0d1224] h-[33rem]">
      <Divider borderText="News" borderColor="border-white" />
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={VariantsUp}
       className="flex justify-center bg-gradient-to-t from-gray-200 dark:from-gray-800 to-[#114b5f]
        dark:to-[#0d1224]
                    h-[25rem] mt-[3rem]">
        <NewsSwiper />
      </motion.div>
    </div>
  );
};

export default News;
