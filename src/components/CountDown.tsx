import Divider from "../components/Divider";
import ColorDiv from "../components/ColorDiv";

const CountDown: React.FC = () => {
  return (
    <div
      className="w-[100%] h-[45vh] bg-[#114b5f] inlin-flex justify-center relative overflow-hidden"
    >
      <ColorDiv />
      <Divider borderText="Conference Count Down" borderWidth="w-[60%]" />
      <div className=" absolute top-44 left-40 text-white flex ">
        <span className="font-bold text-[20px] justify-start ">
          Conference starts in:
        </span>
        <div className="ml-20 -mt-4">
          <span className="font-bold text-[40px]">50</span>{" "}
          <span className="font-bold text-[24px]">Days</span>
        </div>
        <div className="ml-20  -mt-4">
          <span className="font-bold text-[40px]">00</span>{" "}
          <span className="font-bold text-[24px]">Hours</span>
        </div>
        <div className="ml-20  -mt-4">
          <span className="font-bold text-[40px]">24</span>{" "}
          <span className="font-bold text-[24px]">Minutes</span>
        </div>
        <div className="ml-20  -mt-4">
          <span className="font-bold text-[40px]">36</span>{" "}
          <span className="font-bold text-[24px]">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
