import Divider from "../Divider";
import ColorDiv from "../ColorDiv";
import { mainTopicsItems } from "../../constants/mainTopics";
import { motion } from "framer-motion";
import { VariantsUp } from "../../assets/Motions/HomePageMotion";
import { Link } from "react-router-dom";

const MainTopics = () => {
  return (
    <div className="bg-[#114b5f] dark:bg-[#0d1224] pb-12 inlin-flex justify-center relative overflow-hidden ">
      <ColorDiv />
      <Divider borderText="Main Topics of The Conference" />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsUp}
        className="mt-[0.5rem] grid grid-cols-4 justify-evenly gap-5 mx-40  3xl:px-20  "
      >
        {mainTopicsItems.map((item) => (
          <>
            <div
              className="col-span-1 bg-gray-300 dark:bg-slate-800 w-[100%] rounded-3xl 
            mt-4 relative overflow-hidden max-w-[1500px]"
            >
              <img className="h-[10rem] rounded-t-2xl " src={item.img} />
              <div className="group">
                <div
                  className="group-hover:-translate-y-[3.6rem] group-hover:translate-x-[17rem] 
                group-hover:duration-1000 transition"
                >
                  <div
                    className=" group-hover:bg-white/30 w-[100%] hidden group-hover:block group-hover:absolute
                    h-[12rem] 3xl:h-[10.7rem] 3xl -mt-28 -ml-[17rem] rounded-t-3xl "
                  >
                    <h3 className="font-semibold  text-[2rem] mt-2 ">
                      {" "}
                      {item.title}{" "}
                    </h3>
                    {item.content}
                  </div>
                </div>

                <h3 className="font-semibold text-[1.5rem] group-hover:opacity-0 dark:text-yellow-400 ">
                  {" "}
                  {item.title}
                </h3>
              </div>
              <Link to="/newsSinglePage">
                <button
                  className="bg-teal-800 dark:bg-teal-700 hover:bg-cyan-900 dark:hover:bg-cyan-900 
                  px-4 hover:px-6 pt-2 pb-3 rounded-3xl mt-4 mb-3 text-gray-200 hover:text-gray-400 
                       font-semibold transition-all duration-300 "
                >
                  Reade more
                </button>
              </Link>
            </div>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default MainTopics;