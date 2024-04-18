import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormTabs from "./FormTabs";
import { inputCSS } from "./LoginForm";
import { ToastContainer, toast } from "react-toastify";
type inputProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  remember: boolean;
};
const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputProps>();
  const onSubmit: SubmitHandler<inputProps> = (data) =>{
    alert(JSON.stringify(data));
    toast.success("sign up is successfully!");
  }

  return (
    <div className="py-20 sm:px-5 lg:mb-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black/80 rounded-3xl p-10 md:p-6 w-[30rem] md:w-[23rem] sm:w-[20rem] xs:w-[18.5rem]
          font-RalewayBold border-[2px] lg:mb-10 border-yellow-400 shadow-[0px_0px_40px_-10px_white]"
      >
        <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
        <div className="space-y-12 md:space-y-7">
          <div className="border-b border-gray-900/10 ">
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 md:gap-y-2 sm:space-y-1 relative  ">
              <FormTabs />
              <div className="col-span-full mt-8 sm:pt-6 ">
                <label
                  htmlFor="first-name"
                  className="text-left block font-medium leading-6 text-gray-300"
                >
                  First name
                </label>
                <div>
                  <input
                    id="first-name"
                    {...register("firstName", {
                      required: "This is required",
                      minLength: { value: 3, message: "min lenght is 3" },
                    })}
                    type="text"
                    autoComplete="text"
                    placeholder="First name"
                    className={inputCSS}
                  />
                  {errors && (
                    <span className="text-red-600 flex text-left">
                      {errors.firstName?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="last-name"
                  className="text-left block font-medium leading-6 text-gray-300"
                >
                  Last name
                </label>
                <div>
                  <input
                    id="last-name"
                    {...register("lastName")}
                    type="text"
                    autoComplete="text"
                    placeholder="Lirst name"
                    className={inputCSS}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="text-left block leading-6 text-gray-300"
                >
                  Email address
                </label>
                <div>
                  <input
                    id="email"
                    {...register("email", {
                      required: "This is required",
                    })}
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    className={inputCSS}
                  />
                  {errors && (
                    <span className="text-red-600 flex text-left">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor=" address"
                  className="block text-left leading-6 text-gray-300"
                >
                  Password
                </label>
                <div className="col-span-full">
                  <input
                    type="password"
                    {...register("password", {
                      required: "This is required",
                      minLength: { value: 6, message: "min lenght is 6" },
                    })}
                    id="password"
                    placeholder="Password"
                    className={inputCSS}
                  />
                  {errors && (
                    <span className="text-red-600 flex text-left">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end">
          <input
            value="sign up"
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-5 py-2 text-lg font-semibold
             text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-Raleway"
          />
        </div>
        <span className="text-right flex justify-end mt-4 text-gray-300  ">
          Already registered
          <Link
            to="/loginPage"
            className="pl-1 text-blue-400 underline underline-offset-4 hover:no-underline "
          >
            sign in?
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;
