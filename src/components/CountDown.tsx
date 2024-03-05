import Divider from "../components/Divider";
import ColorDiv from "../components/ColorDiv";
import ConferanceDay from "./ConferanceDay";
const CountDown: React.FC = () => {
  return (
    <div className="w-[100%] h-[45vh] bg-[#114b5f] inlin-flex justify-center relative overflow-hidden">
      <ColorDiv />
      <Divider borderText="Conference Count Down" borderWidth="w-[60%]" />
      <ConferanceDay day={20} month={4} />
    </div>
  );
};

export default CountDown;
