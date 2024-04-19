import { Outlet } from "react-router-dom";
import MainContextProvider from "../provider/MainContext";
import Drawer from "../components/Drawer";
import { useEffect } from "react";
const MainLayout: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page after render the pages
  }, []);

  return (
    <MainContextProvider>
      <div className="z-[99999999999999] -mr-10">
        <Drawer />
      </div>
      <Outlet />
    </MainContextProvider>
  );
};

export default MainLayout;
