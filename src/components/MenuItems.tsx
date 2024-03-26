import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { HiChevronDown } from "react-icons/hi";
export const items: MenuProps["items"] = [
  {
    label: (
      <a href="http://localhost:3000/" rel="noopener noreferrer" target="_self">
        Home
      </a>
    ),
    key: "Home",
    icon: <MailOutlined />,
  },
  {
    label: "Page1",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: (
      <div className="inline-flex group ">
        {" "}
        pagetow{" "}
        <HiChevronDown
          size={20}
          className="mt-4 ml-1 group-hover:rotate-180 duration-500 "
        />
      </div>
    ),
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        // label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
          {
            label: "Option 3",
            key: "setting:3",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        goooo
      </a>
    ),
    key: "alipay",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <div className="inline-flex group ">
        {" "}
        pagetow{" "}
        <HiChevronDown
          size={20}
          className="mt-4 ml-1 group-hover:rotate-180 duration-500 "
        />
      </div>
    ),
    key: "SubMenu2",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Option 11",
            key: "setting:11",
          },
          {
            label: "Option 21",
            key: "setting:21",
          },
          {
            label: "Option 31",
            key: "setting:31",
          },
        ],
      },
    ],
  },
  {
    label: "page2",
    key: "pag2",
    icon: <MailOutlined />,
  },
];
