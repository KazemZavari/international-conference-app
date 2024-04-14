import ParallaxProvider from "../HomePageSections/ParallaxProvider";
import Menuu from "../HomePageSections/Menuu";
import Footer from "../HomePageSections/Footer";
import Player from "../Player";
import video from "../../assets/bgVideo/3.mov";
import bggridlighter from "../../assets/img/bg-grid-lighter.svg";
import Menuu2 from "./Menuu2";

const NewsSinglePage: React.FC = () => {
  return (
    <>
      <ParallaxProvider
        height={"h-[45vh]"}
        backgroundImage="bg-[url('./assets/img/pic-1.jpg')]"
      >
        <div className="pt-16 flex justify-center">
          {" "}
          <Menuu2 />
        </div>
      </ParallaxProvider>
      <div
        className=" mx-auto text-center h-[22rem] sm:h-[36rem] xs:h-[44rem] bg-[#0d1224]    
       text-white line-clamp-4 "
      >
        <img
          alt="background"
          className="absolute w-[900px] "
          // style="color:transparent"
          src={bggridlighter}
        />
        <h1 className="block uppercase text-white pt-6 pb-3 font-semibold">
          news Title
        </h1>
        <div className="mx-auto flex justify-center px-40 lg:px-20 md:px-10">
          <p className="leading-7 text-justify indent-6 2xl:max-w-[900px] pb-2 ">
            {" "}
            <strong>
              Sed laoreet eget magna ac laoreet. Vivamus a elit ac nibh
              imperdiet tincidunt. Donec nec blandit justo. Vivamus molestie
              nisi at malesuada accumsan. Quisque non leo quis leo malesuada
              tempor ac ac justo. Sed dictum imperdiet enim sed sodales. Proin
              sit amet magna et est gravida mollis.
            </strong>
            <br />
            Curabitur sit amet felis magna. Nulla ultricies ac dui at rhoncus.
            Pellentesque non finibus sem. Aliquam maximus justo mi, a
            scelerisque mi iaculis eu. Quisque convallis nisi viverra massa
            porta viverra. Praesent sed felis ac nibh auctor elementum a sed
            urna. Donec et vehicula ante. In vel mi eros. Donec eget lobortis
            quam, eget ultrices sapien.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-4 px-28 lg:px-10 md:px-5 py-10 gap-10   ">
        <div className="col-span-1 md:hidden flex px-4  max-h-[25rem] bg-zinc-600">
          <h3 className=" text-white py-10">recent news</h3>
        </div>
        <div className=" col-span-3 pb-10 px-4 md:px-0 -mt-28 md:mt-0 md:col-span-full flex">
          <div className="max-w-[825px] mx-auto w-full">
            <Player
              // url="https://soundcloud.com/tycho/tycho-awake"
              // url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              // url="https://home.wistia.com/medias/bq6epni33s"
              url="https://video.vidyard.com/watch/YBvcF2BEfvKdowmfrRwk57"
              // url={video}
              height={500}
              width={900}
              controls={true}
              autoplay={false}
            />
          </div>
        </div>
        <div className="flex justify-center col-span-full md:-mt-40 sm:-mt-52 xs:-mt-96">
          <p className=" leading-8 text-justify indent-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet mi orci. Sed mollis nisi neque, ut ultrices est viverra sit
            amet. Integer eros mauris, finibus non elementum in, eleifend cursus
            dui. Vestibulum mattis urna nisl, a luctus ex commodo ut.
            Pellentesque volutpat, sem a elementum ultrices, purus nulla rhoncus
            arcu, in pulvinar nibh ipsum vitae leo. Nunc porttitor, erat a
            lacinia tristique, ligula ex ultricies odio, eu ullamcorper purus
            tellus sit amet enim. Aenean eros sem, luctus ut dapibus eu,
            porttitor et tortor. Nullam ultrices feugiat justo, nec vulputate
            leo fermentum in. Phasellus pellentesque congue lectus, a consequat
            elit viverra et. In malesuada interdum velit. Morbi cursus efficitur
            lorem, vel sodales massa iaculis vitae. Praesent et mattis sapien.
            Curabitur vitae leo at lorem laoreet feugiat sed eu mauris. Nam
            ipsum elit, viverra ut urna ut, volutpat sodales neque. Donec
            tristique suscipit nisi, quis maximus eros aliquam vel. Fusce congue
            nunc sed est auctor, ut commodo elit pulvinar. Phasellus mollis,
            mauris sit amet ultrices pretium, elit sem vestibulum lectus, non
            bibendum urna orci quis nulla. Ut in augue sit amet libero molestie
            laoreet. Nam tristique urna sed ornare congue. Donec id lorem ipsum.
            Mauris placerat lacus ex, sed scelerisque tellus congue sit amet.
            Phasellus tellus eros, vehicula sit amet felis id, fringilla
            elementum elit. Etiam sit amet lacus metus. Nulla posuere ipsum sit
            amet ex aliquet laoreet. Integer vel elit eget elit placerat
            vulputate. Donec ac ultrices sapien, id ullamcorper augue. Nam
            tincidunt leo vitae nisl interdum, id molestie sem condimentum. Cras
            volutpat nisl nibh. Nam vitae sapien massa. Suspendisse potenti.
            Donec eu dignissim justo, laoreet fringilla mi. Pellentesque
            bibendum neque a viverra pellentesque. Duis mollis lorem erat,
            sagittis sollicitudin lacus finibus vel. Nulla vulputate justo eros,
            quis vulputate lorem condimentum et. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Morbi quis
            dictum sem, sit amet tempor ligula. Fusce dui lacus, iaculis et est
            quis, consequat tincidunt nibh. Mauris tempor velit orci, eget
            mollis eros aliquet nec. Mauris pulvinar, tortor eget eleifend
            faucibus, nibh purus malesuada lorem, sit amet eleifend diam tellus
            id nisi. Maecenas cursus erat id metus sollicitudin, vitae luctus
            nisl fringilla. Morbi sed sem in est sodales dapibus. Praesent
            molestie imperdiet ante non lacinia. Nunc feugiat non metus non
            interdum. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Morbi sit amet urna lacinia, auctor erat nec, sodales
            dolor. Nulla efficitur diam nec mi mollis accumsan sed euismod ex.
            Fusce eu sagittis lectus. Vivamus bibendum fringilla tortor, ac
            gravida magna elementum id. Donec sit amet mi bibendum tortor dictum
            lobortis sed ac mi. Sed ullamcorper, magna quis condimentum
            volutpat, ligula turpis semper ante, a consectetur risus tellus ac
            lacus. Donec viverra tellus diam, quis malesuada nibh tincidunt
            vulputate. Ut feugiat condimentum dui, tempor pharetra dolor commodo
            quis. Duis tempus tincidunt nisi, at posuere libero lobortis ut.
            Etiam vel volutpat mi. Ut sed augue quam. Quisque convallis
            hendrerit mi, eu mattis augue blandit et. Nullam vitae eros placerat
            purus condimentum fermentum. Fusce volutpat, nibh facilisis faucibus
            suscipit, quam magna sagittis libero, at tempor ante tellus
            porttitor ex. Nullam vestibulum orci sapien, eu scelerisque risus
            eleifend vel. Suspendisse dignissim nisl id ipsum convallis, eu
            pharetra nunc faucibus. Duis a ipsum in ex egestas tempus et eget
            velit. Curabitur erat libero, pharetra vel vehicula id, venenatis eu
            velit. Cras placerat pulvinar pharetra. Morbi mattis diam at odio
            fringilla ornare. In eget urna vel lectus dignissim efficitur.
            Nullam rutrum magna in purus aliquam scelerisque
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsSinglePage;
