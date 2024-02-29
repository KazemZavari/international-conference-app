import "./App.css";

import Video from "./components/Video";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
const App = () => {
  return (
    <>
      <div className=" background-overlay bg-slate-400">
        <Video />
        <Navbar />
      </div>
      <div className="w-[100%] h-[45vh] bg-[#114b5f] flex justify-center relative">
        <Divider
          borderText="Conference Count Down"
          borderWidth="border-[.13rem]"
        />
        <div className=" absolute top-36 left-40 text-white flex ">
          <span className="font-bold text-[20px] justify-start ">
            Conference starts in:
          </span>
          <div className="ml-20  -mt-4">
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
      <div className="relative h-[65vh] overflow-hidden">
        <div
          className="absolute w-[100%] h-[65vh] bg-fixed bg-center-top bg-no-repeat text-white
          opacity-90 bg-cover text-center bg-[url('./assets/img/18.jpg')]  "
        >
          <div className="content">
            <h1>Your Content Goes Here</h1>
            <p>This is a simple parallax example.</p>
          </div>
        </div>
        <div className=" "></div>
      </div>

      <div className="bg-[#114b5f]  h-[150vh]"></div>
      <div className="bg-[#114b5f] bg-gradient-to-t from-gray-200 to-[#114b5f] h-[50vh]"></div>

      <div className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute w-[100%] h-[80vh] bg-fixed bg-center-top bg-no-repeat text-white
          opacity-90 bg-cover text-center bg-[url('./assets/img/18.jpg')]  "
        >
          <div className="content">
            <h1>Your Content Goes Here</h1>
            <p>This is a simple parallax example.</p>
          </div>
        </div>
      </div>
      <div className="h-[45vh]"></div>
      <div className="h-[45vh] bg-[#114b5f] "></div>
    </>
  );
};

export default App;
