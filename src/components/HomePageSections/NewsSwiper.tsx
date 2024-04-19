import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { newsItems } from "../../constants/newsItems";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { Link } from "react-router-dom";
const NewsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCards]}
      effect={"cards"}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={false}
   
      // autoplay={{
      //   delay: 3000,
      //   pauseOnMouseEnter: true,
      //   waitForTransition: true,
      
      // }}
      className=" w-[55%] lg:w-[65%] md:w-[75%] sm:w-[80%] sm:px-4 h-[20rem] lg:h-[19rem] md:h-[16rem] 
      flex justify-center shadow-none bg-transparent 
      rounded-[1rem] -mt-[1rem] duration-500  "
    >
      {newsItems.map((item) => (
        <SwiperSlide
          key={item.title}
          className="flex align-middle justify-center bg-transparent duration-700 shadow-none"
        >
          <img
            className="block shadow-none rounded-[3rem] mx-auto self-center w-[90%] h-[90%]"
            src={item.img}
          />
          <Link
            to="/newsSinglePage"
            className="absolute right-20 md:right-16 md:bottom-12 bottom-16 bg-black/80 hover:bg-black/70 text-yellow-400
             px-3 md:px-2 py-2 md:py-1 rounded-lg text-[1.2rem] md:text-[.9rem] duration-300"
          >
            <h2 className=""> reade more </h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSwiper;
