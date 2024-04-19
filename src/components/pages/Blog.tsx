import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaComments } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

import { FaSnapchatGhost } from "react-icons/fa";
import { newsPageItems } from "../../constants/newsPageItems";
const services = [1, 2, 3, 4, 5, 6];
const Blog: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        // "https://jsonplaceholder.typicode.com/albums/8/photos?offset=50&limit=12"
        "https://picsum.photos/v2/list?page=20&limit=8"
      )
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PageLayout>
        <Divider
          borderText={"Blog"}
          borderColor="border-black dark:border-yellow-400"
          textColor="text-gray-700 dark:text-yellow-400"
        />

        <main className=" pt-20 md:pt-2 ">
          <div
            className=" grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-3 mb-5 px-28 xl:px-16
           lg:px-5 md:px-10 sm:px-12 xs:px-5 "
          >
            {items.map((item) => (
              <>
                <div className="col-span-1 py-3 md:pb-5  ">
                  <div className="">
                    <Link to={"/newsSinglePage"}>
                      <img
                        className="h-[12rem] w-[100%] rounded-2xl opacity-80 hover:opacity-90  duration-300"
                        src={item.download_url}
                      />
                    </Link>
                    <div className=" text-left pl-2 ">
                      <Link to={"/newsSinglePage"}>
                        <h2
                          className="text-[1.4rem] md:text-[1rem] py-2 md:py-1 text-teal-900 hover:text-teal-700
                           dark:text-teal-400 dark:hover:text-teal-300  duration-200 "
                        >
                          {item.author}
                        </h2>
                      </Link>
                      <p className="dark:text-white text-gray-800 block md:text-[.9rem] ">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        commodo efficitur. Donec consectetur posuere convallis.
                        Nunc sapien, viverra et viverra non, rhoncus vitae eros.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="px-24 xl:px-16 lg:px-20 md:px-5 xs:px-3 pb-10 ">
            <h2
              className="dark:text-white text-gray-800 text-[1.8rem] md:text-[1.4rem]
             pt-16 pb-10 font-RalewayBold  "
            >
              Free Services
            </h2>
            <div
              className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 
            font-RalewayBold gap-y-6 gap-x-3 "
            >
              {services.map((service) => (
                <div key={service} className="col-span-1 dark:text-white text-gray-800 p-2 ">
                  <h3 className=" text-left pb-2 text-[1.3rem] xl:text-[1.1rem]">
                    <FaSnapchatGhost
                      className="mr-1 inline text-slate-900 dark:text-yellow-400
                     opacity-80 dark:opacity-90"
                    />{" "}
                    consectetur adscing, Quisque
                  </h3>
                  <p className="block text-left  text-[1rem] lg:text-[.9rem]">
                    imperdiet sed sapien et, efficitur suscipit neque. Nunc
                    consequat placerat arcu eget sodales. Ut neque dolor,
                    scelerisque in rhoncus in, euismod quis lectus.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* swiper */}
          <div className=" py-10 ">
          <h2
              className="dark:text-white text-gray-800 text-[1.8rem] md:text-[1.4rem]
              pb-10 font-RalewayBold  "
            >
              Gallery
            </h2>
            <>
              <Swiper
                effect={"cube"}
                speed={1}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                // autoplay={{
                //   delay: 4000,
                //   pauseOnMouseEnter: true,
                //   waitForTransition: true,
                 
                // }}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[EffectCube, Pagination, Autoplay]}
                className=" w-[40rem] xl:w-[32rem] lg:w-[28rem] md:w-[26rem] h-[29rem] xl:h-[20rem]
                 md:h-[15rem] sm:w-[18rem] xs:w-[17rem] "
              >
                {newsPageItems.map((item) => (
                  <SwiperSlide
                    key={item.title}
                    className="flex align-middle justify-center bg-transparent duration-700"
                  >
                    <Link to={"/gallery"}>
                    <img
                      src={item.img}
                      className="block shadow-sm shadow-slate-700   mx-auto self-center w-[100%] h-[100%]"
                    />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>


          <div className="px-36 xl:px-16 lg:px-16 md:px-5  xs:px-2 pb-20">
            <h2
              className="dark:text-white text-gray-800 text-[1.8rem] md:text-[1.2rem] pt-10 pb-7
             font-RalewayBold  "
            >
              What developers are saying about us
            </h2>
            <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 font-RalewayBold gap-3  ">
              {services.map((service) => (
                <div key={service}
                  className="col-span-1 dark:text-white text-gray-800 border-[1px] border-gray-800
                dark:border-gray-400 p-2 md:p-1
                 items-center sm:mb-2 "
                >
                  <p className="block text-left md:text-[.9rem] sm:text-[.8rem]">
                    imperdiet sed sed sapien et, efficitur suscipit neque sapien
                    et, efficitur suscipit neque. Nunc consequat placerat arcu
                    eget sodales. Ut neque dolor, scelerisque in rhoncus in,
                    euismod quis arcu eget sodales. Ut neque dolor, lectus.
                  </p>
                  <div className="w-[90%] border-b-[1px] py-4 mx-auto border-gray-600 " />
                  <div className=" py-3 inline-flex text-[.8rem] cursor-pointer">
                    <div className="text-left pr-12 md:pr-5">
                      <FaComments
                        className="inline mr-1 text-teal-900 dark:text-teal-700 text-[1.6rem]
                      xl:text-[1.2rem] sm:text-[1rem]"
                      />{" "}
                      <span className="text-teal-800 dark:text-teal-500">
                        scelerisque
                      </span>{" "}
                    </div>
                    <div className="pl-12 ">
                      <span className="text-teal-800 dark:text-teal-500">
                        scelerisque
                      </span>
                      <FaRegCircleUser
                        className="inline ml-1 text-teal-900 dark:text-teal-700
                       text-[1.6rem] xl:text-[1.2rem]"
                      />{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </PageLayout>
    </>
  );
};

export default Blog;
