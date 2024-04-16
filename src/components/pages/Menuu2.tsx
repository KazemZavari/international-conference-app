import { motion } from "framer-motion";
import { VariantsDown } from "../../assets/Motions/HomePageMotion";
import { menu2Items } from "../../constants/menu2Items";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { mainContext } from "../../provider/MainContext";
const Menuu2: React.FC = () => {
  const {showSearch}= useContext(mainContext)
  return (

    <>
      
      <motion.nav
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className="z-[1500] lg:hidden transition-all duration-700 ease-in"
      >
        <div
          className="bg-black/70 hover:bg-black/65 dark:bg-black/50 dark:hover:bg-black/45
           h-16 flex items-center px-10 rounded-full border-[1.3px] border-black dark:border-slate-600
            duration-700 "
        >
          <ul className="inline-flex justify-center list-none duration-300 text-white">
            {menu2Items.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "yellow" : " ",
                    fontWeight: isActive ? "600" : " ",
                    fontSize: isActive ? "1.25rem" : "1.1rem ",

                  };
                }}
              >
                <li className="px-5 hover:text-yellow-300 duration-700">{item.title}</li>
              </NavLink>
            ))}

          </ul>

           {/* searchBox */}
          <input className={`${showSearch} ml-3 text-white `}/>

        </div>
      </motion.nav>
    </>
  );
};

export default Menuu2;
