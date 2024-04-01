import SinglePageLayout from "../../layouts/PageLayout";
import pic from "../../assets/img/pic-7.jpg";
import Menuu2 from "../Menuu2";
import ParallaxProvider from "../ParallaxProvider";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <div
        className="-z-[100] w-[100%] h-[100vh] bg-[url('./assets/img/pic-7.jpg')] bg-cover
        bg-center"
      >
        <div className="pt-28">
        <LoginForm />
        </div>
        
      </div>
    </>
  );
};

export default LoginPage;
