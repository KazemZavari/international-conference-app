import logo from "../assets/img/sharif-logo-1.png";
import "rc-menu/assets/index.css";
import { HiChevronDown } from "react-icons/hi";
// import "css-animation";
import Menuu from "./Menuu";

const Navbar = () => {
  return (
    <>
      <nav className="h-[100vh] px-10 z-1 position-absolute">
        <div className="topContent flex justify-start w-[90%] pt-2 ">
          <div className="logo pr-4 -mt-1 ">
            <img className="w-44 2xl:w-[13.5rem]" src={logo} alt="logo" />
          </div>
          <div className="content pt-10 text-left text-amber-400 text-[1rem] font-bold">
            <h3 className="">
              International Conference on Energy Resilience, and Sustainability
            </h3>
            <h4>Sharif University of Technology, Tehran, Iran</h4>
            <h5>18-19 April 2024</h5>
          </div>
        </div>
        <div className="w-[62%] 2xl:w-[70%] border-b-[2px] border-yellow-300 pb-[1rem] block mx-auto "></div>
        {/* <div className="nav-menu pt-3 relative">
          <ul className="flex justify-center divide-x-[1px] text-[16px] font-bold text-amber-400 cursor-pointer">
            <li className=" px-[10px]">
              <a href="#">Home</a>{" "}
            </li>
            <li className=" px-[8px] group flex ">
              {" "}
              General Information 
              <HiChevronDown className="mt-2 ml-1 group-hover:rotate-180 duration-500 " />
              <ul className=" hidden absolute top-9 group-hover:block pt-2 pb-3 bg-slate-500 bg-opacity-50
              w-[9.6rem] hover:block z-[1000] transition-all animate-in slide-in-from-bottom-2 cursor-pointer duration-300
                 shadow-slate-100 shadow-md rounded-b-lg ">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
              </ul>
            </li>

            <li className=" px-[8px]">Organization</li>
            <li className=" px-[8px]">Paper Submission</li>
            <li className=" px-[8px]">Registration</li>
            <li className=" px-[8px]">Venue</li>
            <li className=" px-[8px]">News</li>
            <li className=" px-[8px]">Contact us</li>
          </ul>
        </div>  */}
        <Menuu />
 
        <div className="mt-[4rem] 2xl:mt-[11rem] rounded-3xl mx-auto w-[80%] text-amber-400">
          <h1 className=" text-[1.7rem] font-bold mb-4">
            International Conference on Energy Resilience, and Sustainability
          </h1>
          <h2 className="text-[1.2rem] font-bold">
            Sharif University of Technology, TEHRAN, IRAN
          </h2>
          <h3 className=" text-[1.2rem] font-bold pb-">18-19 April 2024</h3>
        </div>

        <div className="w-[50vw] text-red-500  "></div>
      </nav>
    </>
  );
};

export default Navbar;
