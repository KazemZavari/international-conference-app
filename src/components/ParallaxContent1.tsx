import { ParallaxItems } from "../constants/parallax";

const ParallaxContent1 = () => {
  return (
    <div className="mt-[4.2rem] grid grid-cols-2 justify-items-center gap-8 px-20">
      {ParallaxItems.map((item) => (
        <div
          key={item.title}
          className="w-[100%] rounded-[20px] py-3 backdrop-blur-[10px] bg-white/20 col-span-1"
        >
          <h3 className="font-bold text-[2rem] ">{item.title}</h3>
          <h4 className="font text-[1.5rem]">{item.date}</h4>
        </div>
      ))}
    </div>
  );
};

export default ParallaxContent1;
