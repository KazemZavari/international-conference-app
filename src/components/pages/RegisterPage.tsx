import RegisterForm from "./forms/RegisterForm";
import HomeLink from "./forms/HomeLink";

const RegisterPage = () => {
  return (
    <>
      <div
        className="h-[100vh] bg-[url('./assets/img/pic-7.jpg')] bg-cover bg-center flex justify-center bg-fixed 
      overflow-hidden"
      >
        <HomeLink />
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
