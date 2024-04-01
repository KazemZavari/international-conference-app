import SinglePageLayout from "../../layouts/PageLayout";

import Menuu2 from "../Menuu2";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="pb-20 mx-auto pt-20 text-white h-[100vh] bg-[#0d1224]   ">
      <div className="flex justify-center mb-20">
        <Menuu2 />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
