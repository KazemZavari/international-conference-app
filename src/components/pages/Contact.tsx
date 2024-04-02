import Divider from "../Divider";
import GridLight from "../GridLight";
import Menuu2 from "./Menuu2";
import ContactForm from "./forms/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="bg-slate-900 overflow-x-hidden lg:overflow-x-hidden pb-20">
        <div className="">
          <GridLight />
        </div>
        <div className="flex justify-center pt-20 z-[100]">
          <Menuu2 />
          <Divider borderText={"Contact Form"} />
        </div>
        <div className=" mx-auto mt-5 z-[1200]   ">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
