import RegisterForm from "./forms/RegisterForm";
import HomeLink from "./forms/HomeLink";
const RegisterPage = () => {
  return (
    <>
      <div
        className="h-[100vh] lg:overflow-y-visible bg-[url('./assets/img/pic-7.jpg')] pb-20 bg-cover bg-center flex justify-center bg-fixed 
      overflow-hidden"
      >
        <div className="fixed top-5 right-5 w-10 h-10 z-[100000]"> </div>
        <HomeLink />
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
