import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import Divider from "./Divider";
import {
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
} from "../assets/sponsors-logo";
const swiperSliderClasses: string =
  "flex align-middle justify-center bg-transparent pt-[1rem] ";
const sipersliderImgClasses: string =
  "block rounded-2xl mx-auto self-center h-28 w-[11rem] hover:scale-[1.1] duration-500";
const Sponsors = () => {
  return (
    <div className="h-[20rem] ">
      <Divider
        borderText="Sponsors"
        textColor="text-black"
        borderColor="border-black"
      />
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        className=" w-[80%] flex justify-center bg-transparent mt-4 "
      >
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic3} alt="pic3" />
        </SwiperSlide>

        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic4} alt="pic4" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic5} alt="pic5" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic6} alt="pic6" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic7} alt="pic7" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic8} alt="pic8" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic9} alt="pic9" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic10} alt="pic10" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic11} alt="pic11" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic12} alt="pic12" />
        </SwiperSlide>
        <SwiperSlide className={swiperSliderClasses}>
          <img className={sipersliderImgClasses} src={pic13} alt="pic13" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsors;
