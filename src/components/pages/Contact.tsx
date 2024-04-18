import Divider from "../Divider";
import PageLayout from "../../layouts/PageLayout";
import ContactForm from "./forms/ContactForm";

const Contact = () => {
  return (
    <>
      <PageLayout>
        <Divider
          borderText={"Contact form"}
          borderWidth="w-[30%]"
          borderColor="border-black dark:border-yellow-400"
          textColor="text-gray-800 dark:text-yellow-400"
        />
        <ContactForm />
      </PageLayout>
    </>
  );
};

export default Contact;
