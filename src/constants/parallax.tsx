type ItemsProps = {
  title: string;
  date?: string;
  icon?: ReactNode;
  href?: any;
}[];
type parallaxData = {
  bg: string[];
  height: string[];
};
import { ReactNode } from "react";
import { FaClipboardList } from "react-icons/fa";
import { IoDocument, IoMap } from "react-icons/io5";

export const parallaxData: parallaxData = {
  bg: [
    "bg-[url('./assets/img/pic-9.jpg')]",
    "bg-[url('./assets/img/pic-10.jpg')]",
  ],
  height: ["h-[60vh] lg:h-[22rem] sm:h-[18rem] xs:h-[28rem]", "h-[100vh] lg:h-[38rem]"],
};

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

export const ParallaxItemsDownloadCenter: ItemsProps = [
  {
    icon: <FaClipboardList className="text-[2.5rem] mx-auto mb-2 " />,
    title: "Paper Announcement",
    href: "https://www.google.com",
  },
  {
    icon: <IoDocument className="text-[2.5rem] mx-auto mb-2" />,
    title: "Poster",
    href: "https://www.google.com",
  },
  {
    icon: <IoMap className="text-[2.5rem] mx-auto mb-2" />,
    title: "Catalogue",
    href: "https://www.google.com",
  },
];

export const ParallaxItemsImportantDates: ItemsProps = [
  {
    title: "Full-Paper Submission Deadline",
    date: "15 March",
  },
  {
    title: "Notification of Full-Paper Acceptance",
    date: "25 March",
  },
];
