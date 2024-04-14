import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { newsItems } from "../../constants/newsItems";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
const NewsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      effect={"fade"}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={false}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: true,
      }}
      className=" w-[60rem] h-[18rem] lg:h-[17rem] md:h-[15rem] flex justify-center bg-transparent 
      rounded-[3rem] -mt-[1rem] duration-500 "
    >
      {newsItems.map((item) => (
        <SwiperSlide
          key={item.title}
          className="flex align-middle justify-center bg-transparent duration-700"
        >
          <Link to="/newsSinglePage">
            <img
              className="block shadow-sm shadow-slate-700 rounded-[3rem] mx-auto self-center w-[90%] h-[90%]"
              src={item.img}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSwiper;
