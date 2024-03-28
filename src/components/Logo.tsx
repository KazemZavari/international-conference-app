import logo from "../assets/img/sharif-logo-1.png";
import { Link } from "react-router-dom";
const Logo: React.FC = () => {
  return (
    <Link to="/">
    <div className="absolute pr-4 ml-10  ">
      <img className="w-44 2xl:w-[13.5rem]" src={logo} alt="logo" />
    </div>
    </Link>
  );
  
    
};

export default Logo;
