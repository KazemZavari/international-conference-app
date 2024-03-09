import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img/pic-10.jpg";
import img2 from "../assets/img/pic-7.jpg";
import img3 from "../assets/img/pic-9.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const SwiperNews = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      effect={"fade"}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: true,
      }}
      className=" w-[90%] h-[21rem] flex justify-center bg-transparent rounded-[5rem] 
                  -mt-[1rem] duration-500 "
    >
      <SwiperSlide className="flex align-middle justify-center bg-transparent duration-700">
        <img className="block shadow-lg shadow-slate-600 rounded-[5rem] mx-auto self-center w-[90%] h-[90%]" src={img1} />
      </SwiperSlide>
      <SwiperSlide className="flex align-middle justify-center bg-transparent">
        <img className="block shadow-lg shadow-slate-600 mx-auto rounded-[5rem] self-center w-[90%] h-[90%]" src={img2} />
      </SwiperSlide>
      <SwiperSlide className="flex align-middle justify-center bg-transparent">
        <img className="block shadow-lg shadow-slate-600 mx-auto rounded-[5rem] self-center w-[90%] h-[90%]" src={img3} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperNews;
