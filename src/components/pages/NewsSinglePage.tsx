import ParallaxProvider from "../ParallaxProvider";
import Menuu from "../Menuu";
import Footer from "../Footer";
import Player from "../Player";
// import video from "../../assets/bgVideo/3.mov";
const NewsSinglePage: React.FC = () => {
  return (
    <>
      <ParallaxProvider
        height={"h-[45vh]"}
        backgroundImage="bg-[url('./assets/img/pic-1.jpg')]"
      >
        <div className="pt-16 ">
          {" "}
          <Menuu />
        </div>
      </ParallaxProvider>
      <div className=" mx-auto text-center h-[22rem] bg-[#0d1224] pl-[22rem] 2xl:pl-[32rem] pr-20 text-white line-clamp-4 ">
        <h1 className="uppercase text-white pt-6 pb-3 pl-2 font-semibold">
          news Title
        </h1>
        <div className="mx-auto">
        <p className="leading-7 text-justify indent-6 2xl:max-w-[900px]">
          {" "}
          <strong>
            description news description description news description news
            description description description description news description
            news description description news description description news
            description news description description news description
            description news
          </strong>
          <br />
          description news description description news description description
          news description news description description news description
          description news description news description description news
          description description news description description news description
          news description news description news description news description
          news description
        </p>
        </div>
       
      </div>
      <div className=" grid grid-cols-4 px-28 py-10 gap-10   ">
        <div className="col-span-1 flex px-4  max-h-[25rem] bg-zinc-600">
          <h3 className=" text-white py-10">recent news</h3>
        </div>
        <div className="col-span-3 pb-10 px-4 -mt-32 ">
          <Player
            // url="https://soundcloud.com/tycho/tycho-awake"
            // url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            // url="https://home.wistia.com/medias/bq6epni33s"
            url="https://video.vidyard.com/watch/YBvcF2BEfvKdowmfrRwk57"
            // url={video}
            height={500}
            width={800}
            controls={true}
            autoplay={false}
          />
          <p className="mt-5 leading-8 text-justify indent-6">
            {" "}
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description
            description news description news description news description news
            description news description news description description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description description news
            description news description news description news
          </p>
          <p className="mt-5 leading-8 text-start indent-6">
            {" "}
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description
            description news description news description news description news
            description news description news description description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description description news
            description news description news description news
          </p>
          <p className="mt-5 leading-8 text-left indent-6">
            {" "}
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description
            description news description news description news description news
            description news description news description description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description description news
            description news description news description news
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsSinglePage;
