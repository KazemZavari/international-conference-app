import logo from "../assets/img/sharif-logo-1.png";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
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
        <div className="w-[69%] 2xl:w-[70%] border-b-[2px] border-yellow-300 pb-[1rem] block mx-auto "></div>
        <div className="nav-menu pt-3">
          <ul className="flex justify-center divide-x-[1px] text-[16px] font-bold text-amber-400">
            <li className=" px-[10px]">
              <a href="#">Home</a>{" "}
            </li>
            <li className=" px-[8px]"> General Information</li>
            <li className=" px-[8px]">Organization</li>
            <li className=" px-[8px]">Paper Submission</li>
            <li className=" px-[8px]">Registration</li>
            <li className=" px-[8px]">Venue</li>
            <li className=" px-[8px]">News</li>
            <li className=" px-[8px]">Contact us</li>
          </ul>
        </div>

        <div className="mt-[4rem] 2xl:mt-[11rem] rounded-3xl mx-auto w-[80%] text-amber-400">
          <h1 className=" text-[1.7rem] font-bold mb-4">
            International Conference on Energy Resilience, and Sustainability
          </h1>
          <h2 className="text-[1.2rem] font-bold">
            Sharif University of Technology, TEHRAN, IRAN
          </h2>
          <h3 className=" text-[1.2rem] font-bold pb-">18-19 April 2024</h3>
        </div>
        <div>
          <Menu className="text-red-700">
            <SubMenu title="sub menu" key="1">
              <MenuItem key="1-1">0-1</MenuItem>
              <MenuItem key="1-2">0-2</MenuItem>
            </SubMenu>
            <MenuItem key="2">Menu Item</MenuItem>
            <MenuItem key="3">outer</MenuItem>
            <>
              <SubMenu key="4" title="sub menu">
                <MenuItem key="4-1">inner inner</MenuItem>
                <Divider />
                <SubMenu key="4-2" title="sub menu">
                  <MenuItem key="4-2-1">inn</MenuItem>
                  <SubMenu title="sub menu" key="4-2-2">
                    <MenuItem key="4-2-2-1">inner inner</MenuItem>
                    <MenuItem key="4-2-2-2">inner inner2</MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
              <MenuItem disabled>disabled</MenuItem>
              <MenuItem key="4-3">outer3</MenuItem>
            </>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
