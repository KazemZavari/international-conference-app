import { FormProvider, useForm } from "react-hook-form";

import { useState } from "react";
import { Link } from "react-router-dom";
import Menuu2 from "../Menuu2";

const RegisterForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    alert("success");
    methods.reset();
    setSuccess(true);
  });
  return (
    <>
      <div className="pb-20 mx-auto pt-20 text-white  bg-[#0d1224] ">
        <div className="flex justify-center mb-20">
          <Menuu2 />
        </div>
        <form
          onSubmit={onSubmit}
          className="bg-sky-700/10 rounded-3xl p-10 w-[30rem] mx-auto z-[100] font-Roboto
          border-[1px] border-yellow-400 shadow-[0px_0px_40px_-10px_white]"
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 ">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5   ">
                <div className="col-span-full ">
                  <h1 className="font-bold text-3xl text-center text-yellow-500">
                    Register{" "}
                  </h1>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="first-name"
                    className="text-left block font-medium leading-6 text-gray-300"
                  >
                    First name
                  </label>
                  <div>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-[100]"
                    />
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
                      name="last-name"
                      type="text"
                      autoComplete="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-[100]"
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
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-[100]"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor=" address"
                    className="block text-left leading-6 text-gray-300"
                  >
                    Password
                  </label>
                  <div className="col-span-full flex">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-[100]"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor=" address"
                    className="block text-left leading-6 text-gray-300"
                  >
                    Confirm password
                  </label>
                  <div className="col-span-full flex">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-[100]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              sign up
            </button>
          </div>
          <span className="text-right flex justify-end mt-2 text-gray-300  ">
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
    </>
  );
};

export default RegisterForm;
