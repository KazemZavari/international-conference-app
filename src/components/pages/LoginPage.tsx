import LoginForm from "./forms/LoginForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <div
        className="-z-[100] w-[100%] h-[100vh] bg-[url('./assets/img/pic-9.jpg')] bg-cover
        bg-center bg-opacity-50"
      >
        <Link to="/">
          <FaArrowAltCircleLeft
            size={40}
            className="fixed left-20 top-10 text-white animate-pulse hover:animate-none "
          />
        </Link>
        <div className="pt-28">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
