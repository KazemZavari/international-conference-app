type ItemsProps = {
  title: string;
  date: string;
}[];
type parallaxData = {
  bg: string[];
  height: string[];
};
export const parallaxData: parallaxData = {
  bg: [
    "bg-[url('./assets/img/pic-9.jpg')]",
    "bg-[url('./assets/img/pic-10.jpg')]",
  ],
  height: ["h-[65vh]", "h-[100vh]"],
};
  // const parallaxData = [
  //   [
  //     "bg-[url('./assets/img/pic-9.jpg')]",
  //     "bg-[url('./assets/img/pic-10.jpg')]",
  //   ],
  //   ["h-[70vh]", "h-[100vh]"],
  // ];

export const ParallaxItems: ItemsProps = [
  {
    title: "Workshop",
    date: "20-21 Apri",
  },
  {
    title: "Panel Discussion",
    date: "18-19 April",
  },
  {
    title: "Exhibition",
    date: "18-19 April",
  },
  {
    title: "Paper Presentation",
    date: "20 April",
  },
];