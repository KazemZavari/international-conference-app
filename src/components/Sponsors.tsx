import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img/pic-10.jpg";
import img2 from "../assets/img/pic-7.jpg";
import img3 from "../assets/img/pic-9.jpg";

import "swiper/css";
import "swiper/css/navigation";
import Divider from "./Divider";
const Sponsors = () => {
  return (
    <div className="h-[20rem] opacity-80">
  <Divider borderText="Sponsors" textColor="text-black" borderColor="border-black" />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        grabCursor={true}
        // navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        className=" w-[85%] flex justify-center bg-transparent rounded-3xl mt-4 "
      >
        <SwiperSlide className="flex align-middle justify-center bg-transparent pt-[1rem] ">
          <img
            className="block rounded-2xl mx-auto self-center h-28 w-[80%]"
            src={img1}
          />
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center bg-transparent pt-[1rem]">
          <img
            className="block mx-auto rounded-2xl self-center h-28 w-[80%]"
            src={img2}
          />
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center bg-transparent  pt-[1rem]">
          <img
            className="block mx-auto  rounded-2xl self-center h-28 w-[80%]"
            src={img3}
          />
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center bg-transparent pt-[1rem]">
          <img
            className="block mx-auto rounded-2xl self-center h-28 w-[80%]"
            src={img2}
          />
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center bg-transparent  pt-[1rem]">
          <img
            className="block mx-auto  rounded-2xl self-center h-28 w-[80%]"
            src={img3}
          />
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center bg-transparent  pt-[1rem]">
          <img
            className="block mx-auto  rounded-2xl self-center w-[80%]"
            src={img3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsors;
