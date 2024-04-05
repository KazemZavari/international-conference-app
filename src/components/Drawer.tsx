import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { IoMenu } from "react-icons/io5";

const Drawerm: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        // type="primary"
        onClick={showDrawer}
        className="absolute right-10 top-16 md:top-5 md:right-5 hidden lg:block"
      >
        <IoMenu className="text-yellow-500 text-[1.5rem] border-none  " />
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Drawerm;
