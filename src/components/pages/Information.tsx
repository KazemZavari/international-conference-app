import PageLayout from "../../layouts/PageLayout";
import Divider from "../Divider";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const Information: React.FC = () => {
  return (
    <PageLayout>
      <Divider
        borderText={"information"}
        borderWidth="w-[30%]"
        borderColor="border-black dark:border-yellow-400"
        textColor="text-gray-700 dark:text-yellow-400"
      />
      <main className="h-[100vh]"></main>
    </PageLayout>
  );
};

export default Information;
