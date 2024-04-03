import { MailOutlined } from "@ant-design/icons";
import { FaHome } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import type { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    label: (
      <NavLink to="http://localhost:3000/" target="_self">
        Home
      </NavLink>
    ),
    key: "Home",
    icon: <FaHome />,
  },
  {
    label: (
      <NavLink
        to="/news"
        className="flex items-center"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " ",
          };
        }}
      >
        <IoNewspaper className="mr-1" />
        News
      </NavLink>
    ),
    key: "news",
    icon: "",
  },
  {
    label: (
      <div className="inline-flex group ">
        {" "}
        Libraray{" "}
        <HiChevronDown
          size={20}
          className="mt-4 ml-1 group-hover:rotate-180 duration-500 "
        />
      </div>
    ),
    key: "SubMenu",
    icon: <IoLibrary />,
    children: [
      {
        type: "group",
        children: [
          {
            label: (
              <a
                href="https://tailwindcss.com/"
                rel="noopener noreferrer"
                target="_Blank"
              >
                TailwindCss
              </a>
            ),
            key: "TailwindCss",
          },
          {
            label: (
              <a
                href="https://ant.design/"
                rel="noopener noreferrer"
                target="_Blank"
              >
                Antd
              </a>
            ),
            key: "Antd",
          },
          {
            label: (
              <a
                href="https://www.framer.com/motion/"
                rel="noopener noreferrer"
                target="_Blank"
              >
                FramerMotion
              </a>
            ),
            key: "FramerMotion",
          },
        ],
      },
    ],
  },
  {
    label: (
      <NavLink
        to="/information"
        className="flex items-center"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " ",
          };
        }}
      >
        <IoNewspaper size={22} className="mr-1" />
        information
      </NavLink>
    ),
    key: "information",
    icon: "",
  },
  {
    label: (
      <div className="inline-flex group ">
        {" "}
        Galleries{" "}
        <HiChevronDown
          size={20}
          className="mt-4 ml-1 group-hover:rotate-180 duration-500 "
        />
      </div>
    ),
    key: "SubMenu2",
    icon: <GrGallery size={18} />,
    children: [
      {
        type: "group",
        children: [
          {
            label: (
              <NavLink
                to="/gallery"
                className="flex items-center"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : " ",
                  };
                }}
              >
                galleryPage-1
              </NavLink>
            ),

            key: "galleryPage-1",
          },
          {
            label: (
              <NavLink
                to="/gallery"
                className="flex items-center"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : " ",
                  };
                }}
              >
                galleryPage-2
              </NavLink>
            ),

            key: "galleryPage-2",
          },
        ],
      },
    ],
  },
  {
    label: (
      <NavLink
        to="/contact-us"
        className="flex items-center"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : " ",
          };
        }}
      >
        <MailOutlined className="mr-1" />
        Contact us
      </NavLink>
    ),
    key: "ContactPage",
    icon: "",
  },
];
