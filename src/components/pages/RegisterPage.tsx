import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegisterForm from "./forms/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="bg-[url('./assets/img/pic-7.jpg')] bg-cover bg-center ">
        <Link to="/">
          <FaArrowAltCircleLeft
            size={40}
            className="fixed left-20 top-10 text-white animate-pulse hover:animate-none "
          />
        </Link>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
