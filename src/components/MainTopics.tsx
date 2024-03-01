import Divider from "../components/Divider";
import ColorDiv from "../components/ColorDiv";
import img from "../assets/img/pic-7.jpg";
const MainTopics = () => {
  return (
    <div className="bg-[#114b5f] h-[180vh] inlin-flex justify-center relative overflow-hidden">
      <ColorDiv />
      <Divider borderText="Main Topics of The Conference" />
      <div className="mt-[1rem] grid grid-cols-4 justify-items-center gap-5 mx-28  ">
        <div className="col-span-1 bg-slate-200 h-[26rem] w-[100%] rounded-2xl mt-8">
          <img className="h-[16.5rem] rounded-t-2xl " src={img} />
          <h3
            onClick={() => {
              console.log("hovered on your title");
            }}
            className="font-semibold text-[2rem] hover:"
          >
            {" "}
            title{" "}
          </h3>
          <button
            className="bg-teal-600 hover:bg-cyan-900 px-4 pt-2 pb-3 rounded-3xl mt-10 text-white 
                            font-semibold transition-all  duration-300 "
          >
            Reade more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTopics;
