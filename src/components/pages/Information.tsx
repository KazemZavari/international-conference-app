import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";

const Information: React.FC = () => {
  return (
    <>
      <PageLayout>
        <Divider
          borderText={"information"}
          borderWidth="w-[30%]"
          borderColor="border-black dark:border-yellow-400"
          textColor="text-gray-700 dark:text-yellow-400"
        />

        <main className="h-[100vh]">
          <span
            className={` ml-3 text-white transition-transform duration-700 ease-in delay-700`}
          >
            searchBox
          </span>
          <div className=" grid grid-cols-4">
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default Information;
