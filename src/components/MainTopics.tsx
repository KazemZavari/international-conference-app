import Divider from "../components/Divider";
import ColorDiv from "../components/ColorDiv";
import img from "../assets/img/pic-7.jpg";

const MainTopics = () => {
  return (
    <div className="bg-[#114b5f] h-[180vh] inlin-flex justify-center relative overflow-hidden">
      <ColorDiv />
      <Divider borderText="Main Topics of The Conference" />
      <div className="mt-[0.5rem] grid grid-cols-4 justify-evenly gap-5 mx-28  ">

        <div className="col-span-1 bg-white h-[26rem] w-[100%] rounded-3xl mt-8 relative overflow-hidden ">
          <img className="h-[16.5rem] rounded-t-2xl" src={img} />
          <div className="group">
            <div
              className="group-hover:animate-in group-hover:slide-in-from-bottom-[4rem] 
                      group-hover:duration-700 "
            >
              <div
                className="bg-white/30 w-[100%] hidden group-hover:block group-hover:absolute
                         -mt-[17rem] h-[18rem] "
              >
                <h3 className="font-semibold text-[2rem] mt-2 "> title </h3>
                <ul>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold text-[2rem] group-hover:opacity-0 ">
              {" "}
              title{" "}
            </h3>
          </div>

          <button
            className="bg-teal-600 hover:bg-cyan-900 px-4 pt-2 pb-3 rounded-3xl mt-10 text-white 
                            font-semibold transition-all duration-300 z-1000 "
          >
            Reade more
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default MainTopics;
