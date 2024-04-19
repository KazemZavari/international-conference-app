import LoginForm from "./forms/LoginForm";
import HomeLink from "./forms/HomeLink";
import Drawer from "../Drawer";

const LoginPage = () => {
  return (
    <>
      <div
        className="lg:overflow-y-scroll h-[100vh] xl:h-[110vh] lg:h-[100vh] bg-[url('./assets/img/pic-7.jpg')] pb-20 bg-cover bg-center flex justify-center bg-fixed 
        overflow-hidden"
      >
        <div className="right-10 fixed top-20 z-[90000000000]">
          <Drawer />
        </div>
        <HomeLink />
        <div className="pt-24 pb-5 sm:px-20 ">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
