// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const TailwindForm = () => {
  return (
    <form 
    className="bg-sky-700/10 rounded-3xl p-10 w-[45rem] mx-auto z-[100] font-Raleway
      border-[1px] border-yellow-400 shadow-[0px_0px_40px_-10px_white] text-gray-300"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-900/10">
          <p className="block mt-1 text-sm leading-6 text-gray-200">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="border-b border-gray-900/10 pb-1">
          <h2 className="block text-base font-semibold leading-7 text-gray-200">
            Personal Information
          </h2>
          <p className="block mt-1 text-sm leading-6 text-gray-200">
            Use a permanent address where you can receive mail.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-5 ">
            <div>
              <label
                htmlFor="first-name"
                className="block text-left text-sm font-medium leading-6 text-gray-300"
              >
                First name:
              </label>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="your name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-left text-sm font-medium leading-6 text-gray-200"
              >
                Last name:
              </label>
              <div>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="text-left block text-sm font-medium leading-6 text-gray-200"
              >
                Email address:
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email adress"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="text-left block text-sm font-medium leading-6 text-gray-200"
              >
                Country:
              </label>
              <div>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>iran</option>
                  <option>Canada</option>
                  <option>usa</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor=" address"
                className="block text-left text-sm font-medium leading-6 text-gray-200"
              >
                address:
              </label>
              <div>
                <input
                  type="text"
                  name=" address"
                  id=" address"
                  autoComplete="address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-left text-sm font-medium leading-6 text-gray-200"
              >
                About:
              </label>
              <div>
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder=" Write a few sentences about yourself"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Part 2 */}

      <div className="mt-6 flex items-center justify-end">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default TailwindForm;
