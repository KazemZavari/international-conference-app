import React, { useState } from "react";
import type { MenuProps } from "antd";
import { items } from "./MenuItems";
import { Menu, ConfigProvider } from "antd";

const Menuu: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="flex justify-center ">
      {" "}
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 5,
            colorText: "#fff",
            colorSplit: "none",
            padding: 14,
          },
          components: {
            Menu: {
              itemBg: "#fff",
              colorBgElevated: "#000",
              itemColor: "#fadb14",
              itemHoverBg: "#555",
              horizontalItemSelectedColor: "#fff",
              itemSelectedBg: "#555",
              itemSelectedColor: "#fadb14",
              horizontalItemHoverColor: "#fff",
            },
          },
        }}
      >
        <Menu
          theme="light"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className=" mx-auto w-[60vw] bg-transparent text-[1rem] font-semibold "
        />
      </ConfigProvider>
    </div>
  );
};

export default Menuu;
