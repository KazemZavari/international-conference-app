import Tools from "../components/Tools";
import Footer from "../components/HomePageSections/Footer";
import GridLight from "../components/GridLight";
import StickyNavbar from "../components/StickyNavbar";

type SinglePageLayoutProps = {
  children: React.ReactNode;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="md:hidden">
        <Tools />
      </div>
      <div className="opacity-0 dark:opacity-100">
        <GridLight />
      </div>

      <div className="dark:bg-[#0d1224] bg-gray-200 w-[100%] mx-auto pt-2  ">
        <div className="mt-16 flex justify-center  ">
          <StickyNavbar />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default SinglePageLayout;
