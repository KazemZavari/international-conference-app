import { motion } from "framer-motion";
import { VariantsDown } from "../assets/Motions/HomePageMotion";
import { menu2Items } from "../constants/menu2Items";
import { NavLink } from "react-router-dom";


const Menuu2: React.FC = () => {
  return (
    <>
      
      <motion.nav
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className="fixed top-8 z-[1500]"
      >
        <div
          className="bg-black/50 hover:bg-white/15 h-20 flex items-center px-28
                      rounded-full border-[1.3px] border-slate-600 duration-700 "
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
        </div>
      </motion.nav>
    </>
  );
};

export default Menuu2;
