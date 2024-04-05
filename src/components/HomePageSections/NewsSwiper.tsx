import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import { newsItems } from "../../constants/newsItems";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const NewsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      effect={"fade"}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      // navigation={true}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: true,
      }}
      className=" w-[90%] h-[21rem] flex justify-center bg-transparent rounded-[5rem] 
                  -mt-[2rem] duration-500 "
    >
      {newsItems.map((item) => (
        <SwiperSlide key={item.title} className="flex align-middle justify-center bg-transparent duration-700">
          <img
            className="block shadow-lg shadow-slate-600 rounded-[5rem] mx-auto self-center w-[90%] h-[90%]"
            src={item.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSwiper;
