import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";
import { BsChevronDoubleDown } from "react-icons/bs";
import { newsPageItems } from "../../constants/newsPageItems";
import CardGradient from "../CardGradient";
import { ScrollProgress } from "../ScrollProgress";
import { Suspense, useEffect } from "react";
import Spinner from "../Spinner";
const NewsPage = () => {
  useEffect(() => {});
  return (
    <>
      <PageLayout>
        <Suspense fallback={<Spinner />}>
        <ScrollProgress position="left" height={6} smoothness={true} />
        <div className="h-auto pb-10  ">
          <Divider
            borderText={"News Page"}
            // textColor="text-white"
            borderWidth="w-[30%]"
            borderColor="border-black dark:border-yellow-400"
            textColor="text-gray-700 dark:text-yellow-400"
          />
          <div className="flex justify-center">
            <div
              className="grid grid-cols-3 md:grid-cols-2 px-40 xl:px-16 lg:px-5 md:px-10 sm:px-2 xs:px-5
              gap-x-3 gap-y-8  mt-10 mx-auto"
            >
              {newsPageItems.map((item) => (
                <>
                  <div
                    key={item.title}
                    className="group col-span-1 sm:col-span-full rounded-lg shadow-[0px_0px_15px_-10px_white] duration-150 
                   hover:-translate-y-1 hover:shadow-[0px_0px_25px_-15px_white] cursor-pointer w-[18rem] 
                   lg:w-[15rem] sm:w-[18rem] xs:w-[17rem] bg-slate-950"
                  >
                    <CardGradient />

                    <div className="bg-gray-400 dark:bg-[#11152c] rounded-lg overflow-hidden">
                      <img
                        className="w-[100%] h-[12rem] lg:h-[10rem] rounded-lg opacity-80 group-hover:opacity-100
                      group-hover:scale-105 duration-1000"
                        alt="example"
                        src={item.img}
                      />
                      <div className="py-3">
                        <h2 className="py-2 text-slate-900 dark:text-[#f9c80e] uppercase font-bold">
                          {item.title}
                        </h2>
                        <p
                          className="px-2 flex justify-items-start text-black dark:text-white min-h-20
                      lg:min-h-20 mt-2 "
                        >
                          {item.description}
                        </p>
                      </div>
                      <div
                        className="w-[100%] border-b-[1px] border-gray-800 dark:border-yellow-400 
                    shadow-2xl pt-2 opacity-50"
                      ></div>
                      <div className="py-5 rounded-lg">
                        <Link
                          to={item.href}
                          className="px-6 py-3 text-lg font-bold uppercase md:font-semibold transition-all duration-500 
                      hover:duration-500 text-slate-800 hover:underline hover:text-slate-700
                       dark:hover:text-[#ff9c25] dark:text-slate-400
                      hover:underline-offset-[5px] "
                        >
                          Reade more
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <button
          className="group inline-flex text-white mt-5 mb-10 px-8 md:px-5 py-4 md:py-3 rounded-full
           uppercase md:lowercase bg-gradient-to-tr 
            hover:bg-gradient-to-bl from-pink-500 to-violet-600 font-semibold"
        >
          Load More News
          <BsChevronDoubleDown className="ml-5 md:ml-2 mt-1 animate-bounce text-[1.2rem] md:text-[1rem] font-bold " />
        </button>
        </Suspense>

      </PageLayout>
    </>
  );
};

export default NewsPage;
