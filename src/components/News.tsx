import Divider from "./Divider";
import NewsSwiper from "./NewsSwiper";
const News = () => {
  return (
    <div className="bg-[#114b5f] h-[33rem]">
      <Divider borderText="News" borderColor="border-white" />
      <div className="flex justify-center bg-gradient-to-t from-gray-200 to-[#114b5f] 
                    h-[25rem] mt-[3rem]">
        <NewsSwiper />
      </div>
    </div>
  );
};

export default News;
