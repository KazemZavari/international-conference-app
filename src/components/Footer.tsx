import logo from "../assets/img/sharif-logo-1.png";

const Footer = () => {
  return (
    <div className="h-[21rem] bg-[#114b5f] grid grid-cols-7 pt-16 px-10 gap-2 relative">
      <div className="col-span-2">
        <div className="logo">
          <img className="w-44 mx-auto" src={logo} alt="logo" />
          <h3 className="mx-auto text-white text-[1.4rem] font-semibold">
            Sharif University of Technology
          </h3>
        </div>
        <span className="absolute left-3 bottom-5 text-white opacity-80 text-[.9rem]">
          © 2024 All Rights Reserved{" "}
        </span>
      </div>

      <div className="col-span-3 text-left ml-10 text-white">
        <h3 className="text-[1.5rem]">
          <strong>ICERS</strong>2024
        </h3>
        <p className="mt-3 text-[1.1rem] tracking-wider mb-6 ">
          Unit 320, 3rd Floor, No.180, Sharif Energy, Water and Environment
          Institute (SEWEI), Teymouri Blvd, North Tarasht, TEHRAN, IRAN.
        </p>
        <span className=" text-[1.1rem] mt-2">
          Email:
          <a href="#" className="text-amber-500">
            {" "}
            icers2024@sharif.edu
          </a>
        </span>
      </div>
      <div className="col-span-2">jj</div>
    </div>
  );
};

export default Footer;
