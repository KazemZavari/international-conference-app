import "rc-menu/assets/index.css";
import Logo from "./Logo";
import Menuu from "./Menuu";

const Navbar = () => {
  return (
    <>
      <nav className="h-[100vh] z-1 ">
        <div className="topContent flex justify-start w-[90%] pt-2 ">
          <Logo />
          <div className="content pt-10 text-left text-amber-400 text-[1rem] font-bold pl-[15.7rem] pb-10">
            <h3 className="">
              International Conference on Energy Resilience, and Sustainability
            </h3>
            <h4>Sharif University of Technology, Tehran, Iran</h4>
            <h5>18-19 April 2024</h5>
          </div>
        </div>

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

       
      </nav>

    </>
  );
};

export default Navbar;
