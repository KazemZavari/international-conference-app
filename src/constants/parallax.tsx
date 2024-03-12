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
  height: ["h-[65vh]", "h-[100vh]"],
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
    icon: <FaClipboardList className="text-[2rem] mx-auto mb-2" />,
    title: "Paper Announcement",
    href: "www.google.com",
  },
  {
    icon: <IoDocument className="text-[2rem] mx-auto mb-2" />,
    title: "Poster",
    href: "www.google.com",
  },
  {
    icon: <IoMap className="text-[2rem] mx-auto mb-2" />,
    title: "Catalogue",
    href: "www.google.com",
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
