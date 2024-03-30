import React from "react";
import SinglePageLayout from "../../layouts/SinglePageLayout";
import Logo from "../Logo";
import ParallaxProvider from "../ParallaxProvider";
import Menuu from "../Menuu";
import pic from "../../assets/img/pic-7.jpg";

import Footer from "../Footer";

const NewsSinglePage: React.FC = () => {
  return (
    <>
      <ParallaxProvider
        height={"h-[45vh]"}
        backgroundImage="bg-[url('./assets/img/pic-1.jpg')]"
      >
        <div className="pt-16 fixed left-64">
          {" "}
          <Menuu />
        </div>
      </ParallaxProvider>

      <div className="h-[55vh] bg-[#0d1224] pl-[22rem] pr-20 text-white line-clamp-4">
        <h1 className="uppercase text-white pt-8 pb-4 pl-2 font-semibold">
          news Title
        </h1>
        <p>
          {" "}
          <strong>
            description news description description news description news
            description description description description news description
            news description description news description description news
            description news description description news description
            description news
          </strong>
          <br />
          description news description description news description description
          news description news description description news description
          description news description news description description news
          description description news description description news description
          news description news description news description news description
          news description
        </p>
      </div>
      <div className=" grid grid-cols-4 px-28 py-10 gap-10   ">
        <div className="col-span-1 flex px-4  max-h-[25rem] bg-zinc-600">
          <h3 className=" text-white py-10">recent news</h3>
        </div>
        <div className="col-span-3 pb-10 px-4 -mt-32   ">
          <img
            src={pic}
            className="rounded-xl h-[28rem] mx-auto hover:shadow-xl border-[1px] border-yellow-400"
          />
          <p className="mt-5 leading-8 text-justify indent-6">
            {" "}
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description
            description news description news description news description news
            description news description news description description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description description news
            description news description news description news
          </p>
          <p className="mt-5 leading-8 text-start indent-6">
            {" "}
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description
            description news description news description news description news
            description news description news description description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description description news
            description news description news description news
          </p>
          <p className="mt-5 leading-8 text-left indent-6">
            {" "}
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description
            description news description news description news description news
            description news description news description description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description news description
            description news description description news description news
            description description news description description news
            description news description description news description
            description news description news description description news
            description description news description description news
            description news description news description news
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsSinglePage;
