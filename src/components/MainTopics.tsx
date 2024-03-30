import Divider from "./Divider";
import ColorDiv from "./ColorDiv";
import { mainTopicsItems } from "../constants/mainTopics";
import { motion } from "framer-motion";
import { VariantsUp } from "../assets/Motions/HomePageMotion";

const MainTopics = () => {
  return (
    <div className="bg-[#114b5f] pb-10 inlin-flex justify-center relative overflow-hidden">
      <ColorDiv />
      <Divider borderText="Main Topics of The Conference" />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsUp}
        className="mt-[0.5rem] grid grid-cols-4 justify-evenly gap-5 mx-28  "
      >
        {mainTopicsItems.map((item) => (
          <>
            <div className="col-span-1 bg-white h-[26rem] w-[100%] rounded-3xl mt-8 relative overflow-hidden ">
              <img className="h-[16.5rem] rounded-t-2xl " src={item.img} />
              <div className="" />
              <div className="group">
                <div
                  className="group-hover:-translate-y-[3.6rem] group-hover:translate-x-[17rem] 
                group-hover:duration-1500 transition"
                >
                  <div
                    className=" group-hover:bg-white/30 w-[100%] hidden group-hover:block group-hover:absolute
                    h-[18rem] -mt-52 -ml-[17rem] rounded-3xl "
                  >
                    <h3 className="font-semibold text-[2rem] mt-2 ">
                      {" "}
                      {item.title}{" "}
                    </h3>
                    {item.content}
                  </div>
                </div>

                <h3 className="font-semibold text-[2rem] group-hover:opacity-0 ">
                  {" "}
                  {item.title}
                </h3>
              </div>
              <button
                className="bg-teal-600 hover:bg-cyan-900 hover:mt-9 hover:ml-1 px-4 pt-2 pb-3 rounded-3xl mt-10 text-white 
                       font-semibold transition-all duration-300 "
              >
                Reade more
              </button>
            </div>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default MainTopics;
