import { NavLink } from "react-router-dom";

const NavlinkCSS = `"font-bold text-[1.5rem] md:text-[1.3rem] sm:text-[1.15rem] text-center text-yellow-500
                 hover:text-white px-5 sm:px-2 hover:bg-red-800/70 py-3 sm:py-2 rounded-lg duration-500 "`;

const FormTabs = () => {
  return (
    <div
      className="flex items-center justify-center absolute -top-20 left-[4.7rem] md:left-[2.9rem] 
      md:-top-16 sm:-top-[3.5rem] sm:left-[3.45rem] xs:left-[2.9rem] bg-black/80 border-[2px]
       border-yellow-400 rounded-lg"
    >
      <NavLink
        to="/loginPage"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "red" : "",
          };
        }}
        className={NavlinkCSS}
      >
        Sign in{" "}
      </NavLink>
      <NavLink
        to="/registerPage"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "red" : "",
          };
        }}
        className={NavlinkCSS}
      >
        Sign up{" "}
      </NavLink>
    </div>
  );
};

export default FormTabs;
