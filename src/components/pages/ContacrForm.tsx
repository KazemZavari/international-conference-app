import GridLight from "../GridLight";
import Menuu2 from "../Menuu2";

const ContacrForm = () => {
  return (
    <>
      <div className="bg-slate-900 h-[200vh] text-white flex justify-center overflow-clip ">
        <div className="  max-w-[20rem] overflow-x-hidden ">
        <GridLight /> 
        </div>
        <Menuu2 />
        <h1 className="pt-40">Contact us</h1>
      </div>
    </>
  );
};

export default ContacrForm;
