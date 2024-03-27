import { MailOutlined } from "@ant-design/icons";
import { FaHome } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi";
import type { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    label: (
      <a href="http://localhost:3000/" rel="noopener noreferrer" target="_self">
        Home
      </a>
    ),
    key: "Home",
    icon: <FaHome />,
  },
  {
    label: "News",
    key: "news",
    icon: <IoNewspaper />,
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
      <a href="#" target="_self" rel="noopener noreferrer">
        Community
      </a>
    ),
    key: "alipay",
    icon: <FaUsers />,
  },
  {
    label: (
      <div className="inline-flex group ">
        {" "}
        Dependencies{" "}
        <HiChevronDown
          size={20}
          className="mt-4 ml-1 group-hover:rotate-180 duration-500 "
        />
      </div>
    ),
    key: "SubMenu2",
    icon: <IoSettings />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "ReactRouter",
            key: "ReactRouter",
          },
          {
            label: "Swiper",
            key: "Swiper",
          },
          {
            label: "reactParallax",
            key: "reactParallax",
          },
        ],
      },
    ],
  },
  {
    label: "Contact us",
    key: "ContactPage",
    icon: <MailOutlined />,
  },
];
