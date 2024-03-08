import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img/pic-10.jpg";
import img2 from "../assets/img/pic-7.jpg";
import img3 from "../assets/img/pic-9.jpg";

// Import Swiper styles
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
      className=" w-[95%] h-[19rem] flex justify-center bg-transparent rounded-3xl -mt-[1rem] "
    >
      <SwiperSlide className="flex align-middle justify-center bg-transparent">
        <img className="block rounded-2xl mx-auto self-center w-[90%] h-[90%]" src={img1} />
      </SwiperSlide>
      <SwiperSlide className="flex align-middle justify-center bg-transparent">
        <img className="block mx-auto rounded-2xl self-center w-[90%] h-[90%]" src={img2} />
      </SwiperSlide>
      <SwiperSlide className="flex align-middle justify-center bg-transparent">
        <img className="block mx-auto  rounded-2xl self-center w-[90%] h-[90%]" src={img3} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperNews;
