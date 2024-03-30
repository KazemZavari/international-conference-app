import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import Divider from "./Divider";
import { sponsoreItems } from "../constants/sponsors";

const swiperSliderClasses =
  "flex align-middle justify-center bg-transparent pt-[1rem] ";
const sipersliderImgClasses =
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
        speed={5000}
        autoplay={{
          delay: 10,
          pauseOnMouseEnter: true,
        }}
        className=" w-[80%] flex justify-center bg-transparent mt-4 "
      >
        {sponsoreItems.map((sponsore) => (
          <SwiperSlide className={swiperSliderClasses}>
            <img
              className={sipersliderImgClasses}
              src={sponsore.icon}
              alt={sponsore.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
