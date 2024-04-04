import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";
// import { galleryData } from "../../constants/galleryData";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Gallery = () => {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [index, setIndex] = useState(5);

  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/albums/5/photos?offset=50&limit=12"
      )
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/albums/${index}/photos?offset=50&limit=12`
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
        <Divider borderText={"Gallery"} borderWidth="w-[30%]" />
        <main className="">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h3>loading ...</h3>}
          >
            <div className="grid grid-cols-4 px-36 gap-x-10 gap-y-8 mx-auto pt-8 pb-16 ">
              {items.map((item) => (
                <>
                  <div
                    key={item.title}
                    className="group col-span-1 rounded-lg shadow-[0px_0px_15px_-10px_white] hover:-translate-y-1 duration-150
                         cursor-pointer"
                  >
                    <div className="bg-gray-300 rounded-lg overflow-hidden">
                      <img
                        className="w-[100%] h-[10rem] rounded-lg 
                     "
                        alt="example"
                        src={item.url}
                      />
                      <div className="py-2">
                        <h2 className="py-2 text-gray-800 h-[4rem] px-1">
                          {item.title}
                        </h2>
                      </div>
                      <div className="w-[100%] border-b-[1px] border-gray-400 "></div>
                      <div className="py-3 rounded-lg ">
                        <h2 className=" text-red-700 ">
                          img {item.id} from album {item.albumId}{" "}
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
