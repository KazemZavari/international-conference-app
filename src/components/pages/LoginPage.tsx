import LoginForm from "./forms/LoginForm";
import HomeLink from "./forms/HomeLink";

const LoginPage = () => {
  return (
    <>
      <div
        className="h-[100vh]  bg-[url('./assets/img/pic-7.jpg')] pb-20 bg-cover bg-center flex justify-center bg-fixed 
        overflow-hidden"
      >
        <HomeLink />
        <div className="pt-28 sm:px-20 ">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
