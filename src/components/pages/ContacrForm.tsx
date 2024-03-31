import Divider from "../Divider";
import GridLight from "../GridLight";
import Menuu2 from "../Menuu2";
import TailwindForm from "./TailwindForm";
import { Popover, Transition } from "@headlessui/react";
const ContacrForm = () => {
  return (
    <>
      <div className="bg-slate-900 overflow-x-hidden lg:overflow-x-hidden">
        <div className="">
          <GridLight />
        </div>
        <div className="flex justify-center pt-20">
          <Menuu2 />
          <Divider borderText={"Contact Form"} />
        </div>

        <div className=" mx-auto mt-5 z-[1200] pb-20  ">
          <TailwindForm />
        </div>
      </div>
    </>
  );
};

export default ContacrForm;
