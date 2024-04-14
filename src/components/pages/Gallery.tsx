import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Gallery = () => {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [index, setIndex] = useState(10);

  useEffect(() => {
    axios
      .get(
        // "https://jsonplaceholder.typicode.com/albums/8/photos?offset=50&limit=12"
        "https://picsum.photos/v2/list?page=3&limit=10"
      )
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    axios
      .get(
        // `https://jsonplaceholder.typicode.com/albums/${index}/photos?offset=50&limit=12`
        `https://picsum.photos/v2/list?page=${index}&limit=12`
      )
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);

        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <PageLayout>
        <Divider
          borderText={"Gallery"}
          borderWidth="w-[30%]"
          borderColor="border-black dark:border-yellow-400"
          textColor="text-gray-700 dark:text-yellow-400"
        />
        <main className="">
          <p
            className="text-slate-800 dark:text-white text-[1.4rem] lg:text-[1.2rem] sm:text-[1rem]
           font-RalewayBold w-[65%] lg:w-[90%] sm:w-[98%] sm:px-2 mx-auto "
          >
            <span
              className="text-red-800 dark:text-orange-500 text-[1.7rem] lg:text-[1.4rem] 
            sm:text-[1.15rem] underline underline-offset-8 md:underline-offset-4 animate-pulse"
            >
              Infinite scrolling
            </span>{" "}
            is used on this page. By scrolling, the photos will be added to the
            page as an album and unlimited.
          </p>

          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h3>loading ...</h3>}
          >
            <div
              className="grid grid-cols-4 px-36 xl:px-24 lg:px-8 md:px-20 sm:px-12 gap-x-10 xl:gap-x-6 
            lg:gap-x-2 md:gap-x-8 gap-y-8 sm:gap-y-3 mx-auto pt-10 pb-16"
            >
              {items.map((item) => (
                <>
                  <div
                    key={item.url}
                    className="group col-span-1 md:col-span-2 sm:col-span-full rounded-lg shadow-[0px_0px_15px_-10px_white] 
                    hover:-translate-y-1 duration-150 cursor-pointer border-black dark:border-yellow-300
                     border-2 "
                  >
                    <div className="bg-gray-300 dark:bg-slate-950 rounded-lg overflow-hidden  h-[16rem]">
                      <img
                        className="w-[100%] h-[10rem] rounded-lg"
                        alt="example"
                        src={item.download_url}
                      />
                      <div className="">
                        <h2 className="py-3 text-gray-800 dark:text-gray-200 h-[2.8rem] px-1">
                          {item.author}
                        </h2>
                      </div>
                      <div className="w-[100%] border-b-[1px] border-gray-400 dark:border-gray-700 "></div>
                      <div className="py-1 rounded-lg ">
                        <h2 className=" text-gray-600 dark:text-gray-200 text-[1.1rem] lg:text-[.9rem] font-Roboto  ">
                          picture{"  "}
                          <span className="font-bold text-red-600  ">
                            {`"${item.id}"`}
                          </span>{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </InfiniteScroll>
        </main>
      </PageLayout>
    </>
  );
};

export default Gallery;
