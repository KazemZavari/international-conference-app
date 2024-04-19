import React, { useState } from "react";
import { Button, Drawer, ConfigProvider } from "antd";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { createStyles } from "antd-style";
import logo from "../assets/img/sharif-logo-1.png";
import { Link, NavLink } from "react-router-dom";
import RegisterBotton from "./HomePageSections/RegisterBotton";
import { menu2Items } from "../constants/menu2Items";
import Tools from "./Tools";
import type {
  DrawerClassNames,
  DrawerStyles,
} from "antd/es/drawer/DrawerPanel";

const useStyle = createStyles(() => ({
  "my-drawer-header": {
    background: "#114b5f",
  },
  "my-drawer-content": {
    borderLeft: "2px solid #999",
  },
}));

const Drawerm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { styles } = useStyle();
  // const token = useTheme();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const classNames: DrawerClassNames = {
    header: styles["my-drawer-header"],
    content: styles["my-drawer-content"],
  };

  const drawerStyles: DrawerStyles = {
    header: {
      borderBottom: `2px solid #999`,
      color: "#fff",
    },
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        className="fixed right-10 top-12 md:top-5 md:right-5 hidden lg:block p-1 border-none
         dark:bg-black bg-black/70 z-[999] duration-500 group"
      >
        <IoMenu
          className="text-white  dark:text-yellow-400 text-[1.6rem] border-none
         group-hover:text-slate-900"
        />
      </Button>
      <ConfigProvider
        drawer={{
          classNames,
          styles: drawerStyles,
        }}
      >
        <Drawer
          title={
            <>
              <Link to="/" onClick={onClose}>
                <h1
                  className="text-white hover:text-sky-500 ml-20 sm:ml-16 duration-300 py-3 
                z-[99999999999]"
                >
                  conferenceday
                </h1>
              </Link>
              <Link to="/" onClick={onClose}>
                <img src={logo} className="absolute right-5 top-3 w-16 flex" />
              </Link>
            </>
          }
          onClose={onClose}
          closeIcon={
            <IoClose className="text-white text-[1.5rem] mt-1 hover:bg-sky-500 rounded-sm duration-500 " />
          }
          open={open}
          className="bg-red-500 dark:bg-black/80 dark:text-white text-[2rem] "
        >
          <div onClick={onClose} className="relative -mt-12 right-10">
            <RegisterBotton />
          </div>
          <ul className="flex-col list-none duration-300 text-white mt-24">
            {menu2Items.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : " black",
                    fontWeight: isActive ? "600" : " ",
                    fontSize: isActive ? "1.25rem" : "1.1rem ",
                  };
                }}
              >
                <li
                  className="flex hover:text-gray-600 dark:text-gray-300 justify-start duration-500 
                   dark:hover:text-yellow-300 group py-3 mr-1 font-semibold   "
                  onClick={onClose}
                >
                  <FaAngleRight className="mt-2 mr-2 group-hover:pl-2 group-hover:text-[1.2rem] duration-300" />

                  {item.title}
                </li>
              </NavLink>
            ))}
          </ul>

          <Tools />
        </Drawer>
      </ConfigProvider>
    </>
  );
};

export default Drawerm;
