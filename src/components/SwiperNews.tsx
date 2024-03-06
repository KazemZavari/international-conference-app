import {
  Navigation,
  Pagination,
  A11y,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img/pic-10.jpg";
import img2 from "../assets/img/pic-7.jpg";
import img3 from "../assets/img/pic-9.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperNews = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCreative, Autoplay]}
      //   spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={true}
      grabCursor={true}
      //   effect={'creative'}
      centeredSlides={true}
      autoplay={{
        delay:2000,
        disableOnInteraction: false,
      }}
      
      className=" w-[55rem] h-64 bg-red-400 rounded-3xl -mt-[2rem]"
    >
      <SwiperSlide className="flex align-middle justify-center bg-slate-200">
        <img className="block bg-cover w-[100%] h-[100%]" src={img1} />
      </SwiperSlide>
      <SwiperSlide className="flex align-middle justify-center bg-slate-500">
        <img className="block bg-cover w-[100%] h-[100%]" src={img2} />
      </SwiperSlide>
      <SwiperSlide className="flex align-middle justify-center bg-slate-800">
        <img className="block bg-cover w-[100%] h-[100%]" src={img3} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperNews;
