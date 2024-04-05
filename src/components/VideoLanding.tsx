import video from "../assets/bgVideo/earth-1.mp4";
import video2 from "../assets/bgVideo/3.mov";
import pic from "../assets/img/pic-1.jpg";
import pic1 from "../assets/img/pic-9.jpg";
import { useContext } from "react";
import { mainContext } from "../provider/MainContext";

const VideoLanding: React.FC = () => {
  const { darkMode } = useContext(mainContext);
  return (
    <>
      <div className="absolute -z-10 h-[100vh] overflow-hidden">
        {/* <video
        className="w-[100vw]"
        autoPlay
        muted
        playsInline
        loop
        src={ darkMode? video : video2}
      ></video> */}
        <img className="" src={darkMode ? pic : pic1} />
      </div>
    </>
  );
};

export default VideoLanding;
