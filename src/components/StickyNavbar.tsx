import Menuu2 from "./pages/Menuu2";
import { useContext } from "react";
import { mainContext } from "../provider/MainContext";
const StickyNavbar: React.FC = () => {
  const { stickyClass } = useContext(mainContext);

  return (
    <div className={`${stickyClass} w-full flex justify-center`}>
      <Menuu2 />
    </div>
  );
};
export default StickyNavbar;
