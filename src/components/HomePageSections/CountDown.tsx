import Divider from "../Divider";
import ColorDiv from "../ColorDiv";
import ConferanceDay from "./ConferenceDay";

const CountDown: React.FC = () => {
  return (
    <div id="start" className="group w-[100%] h-[47vh] bg-[#114b5f] inlin-flex justify-center relative overflow-hidden">
      <div  >
        <ColorDiv />
        <Divider borderText="Conference Count Down" borderWidth="w-[60%]" />
        <ConferanceDay day={18} month={4} />
      </div>
    </div>
  );
};

export default CountDown;
