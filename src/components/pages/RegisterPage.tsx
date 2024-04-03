import RegisterForm from "./forms/RegisterForm";
import HomeLink from "./forms/HomeLink";
const RegisterPage = () => {
  return (
    <>
      <div
        className="lg:overflow-y-scroll h-[100vh] xl:h-[110vh] lg:h-[100vh] md:h-[100vh] bg-[url('./assets/img/pic-7.jpg')] pb-20 bg-cover 
        bg-center flex justify-center bg-fixed 
      overflow-visible" 
      >
        <div className="fixed top-5 right-5 w-10 h-10 z-[100000]"> </div>
        <HomeLink />
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
