import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";
import { BsChevronDoubleDown } from "react-icons/bs";
import { newsPageItems } from "../../constants/newsPageItems";
import CardGradient from "../CardGradient";
import { ScrollProgress } from "../ScrollProgress";
import { useEffect } from "react";
const NewsPage = () => {
  useEffect(() => {});
  return (
    <>
      <PageLayout>
        <ScrollProgress position="left" height={9} smoothness={true} />
        <div className="h-auto pb-10  ">
          <Divider
            borderText={"News Page"}
            // textColor="text-white"
            borderWidth="w-[30%]"
            borderColor="border-black dark:border-yellow-400"
            textColor="text-gray-700 dark:text-yellow-400"
          />

          <div className="grid grid-cols-3 px-16  gap-10 w-[80%] mx-auto mt-10 ">
            {newsPageItems.map((item) => (
              <>
                <div
                  key={item.title}
                  className="group col-span-1 rounded-lg shadow-[0px_0px_15px_-10px_white] hover:-translate-y-1 duration-150
                         hover:shadow-[0px_0px_25px_-15px_white] cursor-pointer w-[18rem] z-[100]"
                >
                  <div className=" group-hover:hidden duration-500">
                    {" "}
                    <CardGradient />
                  </div>

                  <div className="bg-gray-400 dark:bg-[#11152c]  rounded-lg overflow-hidden">
                    <img
                      className="w-[100%] h-[12rem] rounded-lg opacity-80 group-hover:opacity-100
                      group-hover:scale-105 duration-1000"
                      alt="example"
                      src={item.img}
                    />
                    <div className="py-3">
                      <h2 className="py-2 text-slate-900 dark:text-[#f9c80e] uppercase font-bold">
                        {item.title}
                      </h2>
                      <p className="px-2 flex justify-items-start text-black dark:text-white  min-h-20 mt-2 ">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-[100%] border-b-[1px] border-gray-800 dark:border-yellow-400 shadow-2xl pt-2 opacity-50"></div>
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
        <button
          className="group inline-flex text-white mt-8 mb-10 px-8 py-4 rounded-full  uppercase bg-gradient-to-tr hover:bg-gradient-to-bl
                         from-pink-500 to-violet-600 font-semibold"
        >
          Load More News
          <BsChevronDoubleDown className="ml-5 mt-1 animate-bounce text-[1.2rem] font-bold " />
        </button>
      </PageLayout>
    </>
  );
};

export default NewsPage;
