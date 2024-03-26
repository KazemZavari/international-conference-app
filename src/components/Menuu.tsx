import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, ConfigProvider } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "page1",
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
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
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
  },
];

const Menuu: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="flex justify-center w-100vw ">
      {" "}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#fff",
            borderRadius: 3,
          },
          components: {
            Menu: {
              itemBg: "#000",
              itemColor: "#fadb14",
              groupTitleColor: "#666",
              itemActiveBg: "#000",
              itemHoverBg: "#000",
              activeBarBorderWidth: 10,
              dangerItemHoverColor: "#000",
              horizontalItemSelectedColor: "#fff",
              itemSelectedBg: "#000",
              itemHoverColor: "#fff",
              subMenuItemBorderRadius: 10,
            },
          },
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className=" mx-auto w-[60vw] bg-transparent text-[1rem]  text-lime-600"
        />
      </ConfigProvider>
    </div>
  );
};

export default Menuu;
