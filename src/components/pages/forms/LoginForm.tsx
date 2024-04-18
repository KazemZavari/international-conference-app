import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormTabs from "./FormTabs";
import { ToastContainer, toast } from "react-toastify";
export const inputCSS = `"block w-full rounded-md border-0 py-2.5 text-gray-100 shadow-sm font-Raleway
  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 bg-gray-300/10
   focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 z-[100]"`;

type inputProps = {
  email: string;
  password: string;
  remember: boolean;
};
const LoginForm = () => {
  // const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputProps>();

  const onSubmit: SubmitHandler<inputProps> = (data) => {
    alert(JSON.stringify(data));
    toast.success("sign in is successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-black/80 rounded-3xl p-10 w-[30rem] md:p-6 md:w-[23rem] sm:w-[20rem] xs:w-[18.5rem]
       mx-auto font-RalewayBold text-[1.25rem] md:text-[1.1rem]
      border-[2px] border-yellow-400 shadow-[0px_0px_40px_-10px_white]"
    >
      <div className="space-y-12 md:space-y-7 ">
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
        <div className="border-b border-gray-900/10 ">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 mx-auto items-center relative">
            <FormTabs />

            <div className="col-span-full mt-8 ">
              <label
                htmlFor="email"
                className="text-left block leading-6 text-gray-300 mb-1 "
              >
                Email address:
              </label>
              <div>
                <input
                  id="email"
                  {...register("email", { required: "This is required" })}
                  type="email"
                  placeholder="Enter your email adress"
                  autoComplete="email"
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
                className="block text-left font-medium leading-6 text-gray-300  mb-1"
              >
                Password:
              </label>
              <div className="col-span-full ">
                <input
                  type="password"
                  {...register("password", { required: "This is required" })}
                  id="password"
                  autoComplete="address"
                  placeholder="Enter your password"
                  className={inputCSS}
                />
                {errors && (
                  <span className="text-red-600 flex text-left">
                    {errors.password?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-span-full flex">
              <input
                type="checkbox"
                {...register("remember")}
                id="remember"
                className="mr-2 mt-1"
              />
              <label
                htmlFor="remember"
                className="text-left block leading-6 text-gray-300  "
              >
                Remember me
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <input
          value="sign in"
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-5 py-2 text-lg font-semibold text-white
           shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </div>
      <span className="text-right flex justify-end mt-2 text-gray-300  ">
        Forgot{" "}
        <Link
          to="/registerPage"
          className="pl-1 text-blue-400 underline underline-offset-4 hover:no-underline "
        >
          password?
        </Link>{" "}
      </span>
    </form>
  );
};

export default LoginForm;
