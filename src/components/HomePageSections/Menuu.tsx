import React, { useState } from "react";
import type { MenuProps } from "antd";
import { items } from "./MenuItems";
import { Menu, ConfigProvider } from "antd";
import { motion } from "framer-motion";
import { VariantsDown } from "../../assets/Motions/HomePageMotion";

const Menuu: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className="mt-5 lg:hidden"
      >
        <div
          className="w-[59%] 2xl:w-[59%]  border-b-[2px] border-slate-700 dark:border-yellow-300 
                    pb-[1rem] block mx-auto "
        ></div>
        <div className="flex justify-center">
          {" "}
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 5,
                colorText: "#fff",
                colorSplit: "none",
                padding: 7,
              },
              components: {
                Menu: {
                  itemBg: "#fff",
                  colorBgElevated: "#333",
                  //  colorBgElevated: "transparent",
                  itemColor: "#fadb14",
                  itemHoverBg: "#555",
                  horizontalItemSelectedColor: "#fff",
                  itemSelectedBg: "#555",
                  itemSelectedColor: "#fadb14",
                  horizontalItemHoverColor: "#fff",
                  iconSize: 20,
                  iconMarginInlineEnd: 4,
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
              className="flex justify-center  3xl:w-[60%] lg:w-[90vw] text-[1rem] font-semibold dark:bg-black/40
               bg-black/50 rounded-2xl shadow-sm shadow-slate-300 dark:shadow-yellow-300"
            />
          </ConfigProvider>
        </div>
      </motion.div>
    </>
  );
};

export default Menuu;
