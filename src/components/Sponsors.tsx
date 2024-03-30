import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import Divider from "./Divider";
import { sponsoreItems } from "../constants/sponsors";
import ScrollCarousel from "scroll-carousel-react";
const sipersliderImgClasses =
  "block rounded-2xl mx-auto self-center h-28 w-[11rem] hover:scale-[1.1] duration-500";

const Sponsors = () => {
  return (
    <div className="  ">
      <Divider
        borderText="Sponsors"
        textColor="text-black"
        borderColor="border-black"
      />
      <ScrollCarousel autoplay autoplaySpeed={8} speed={7}>
        {sponsoreItems.map((sponsore) => (
          <div key={sponsore.title} className="rounded h-36 w-48">
            <img
              className={sipersliderImgClasses}
              src={sponsore.icon}
              alt={sponsore.title}
            />
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Sponsors;
