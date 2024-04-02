import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const HomeLink: React.FC = () => {
  return (
    <Link to="/">
      <FaArrowAltCircleLeft
        className="fixed left-20 top-10 lg:top-5 lg:left-5 text-black animate-pulse hover:animate-none
       bg-yellow-400 rounded-full text-[3rem] lg:text-[2.5rem] p-[1px] md:text-[2rem] "
      />
    </Link>
  );
};

export default HomeLink;
