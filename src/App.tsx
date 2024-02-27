import "./App.css";
import logo from "./assets/sharif-logo-1.png";
import video from "./assets/earth-1.mp4";
const App = () => {
  return (
    <>
      <div className=" background-overlay bg-slate-400">
        <div className="absolute -z-10 h-[100vh] overflow-hidden">
          <video
            className="w-[100vw]   "
            autoPlay
            muted
            playsInline
            loop
            src={video}
          ></video>
        </div>

        <nav className="h-[100vh] px-12 z-1 position-absolute">
          <div className="topContent flex justify-start w-[90%] pt-8">
            <div className="logo mt-3 bg-red">
              <img width={175} src={logo} alt="logo" />
            </div>
            <div className="content pl-1 pt-10 text-left text-amber-400 text-[1.5rem] font-bold">
              <h3 className="">
                International Conference on Energy Resilience, and
                Sustainability
              </h3>
              <h4>Sharif University of Technology, Tehran, Iran</h4>
              <h5>18-19 April 2024</h5>
            </div>
          </div>
          <div className="w-[75%] border-b-[2px] pb-10 block mx-auto "></div>
          <div className="nav-menu pt-4">
            <ul className="flex justify-center divide-x-[1px] text-[16px] font-bold text-amber-400">
              <li className=" px-[10px]">
                <a href="#">Home</a>{" "}
              </li>
              <li className=" px-[8px]"> General Information</li>
              <li className=" px-[8px]">Organization</li>
              <li className=" px-[8px]">Paper Submission</li>
              <li className=" px-[8px]">Registration</li>
              <li className=" px-[8px]">Venue</li>
              <li className=" px-[8px]">News</li>
              <li className=" px-[8px]">Contact us</li>
            </ul>
          </div>
          <div className="mt-44  rounded-3xl mx-auto w-[80%] text-amber-400">
            <h1 className=" text-[1.7rem] font-bold mb-4">
              International Conference on Energy Resilience, and Sustainability
            </h1>
            <h2 className="text-[1.2rem] font-bold">
              Sharif University of Technology, TEHRAN, IRAN
            </h2>
            <h3 className=" text-[1.2rem] font-bold pb-">18-19 April 2024</h3>
          </div>
        </nav>
      </div>
      <div className="w-[100%] h-[45vh] bg-[#114b5f] flex justify-center relative">
        <div className="relative flex py-5 items-center w-[50%] -mt-[10%]">
          <div className="flex-grow border-t border-white border-[1.5px]  "></div>
          <span className="flex-shrink mx-4 text-[#f9c80e] font-bold text-[1.8rem]">
            Conference Count Down
          </span>
          <div className="flex-grow border-t border-white border-[1.5px]"></div>
        </div>
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
      </div>

      <div className="bg-gray-600 h-[1000px]"></div>
    </>
  );
};

export default App;
