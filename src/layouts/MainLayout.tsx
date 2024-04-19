import { Outlet } from "react-router-dom";
import MainContextProvider from "../provider/MainContext";
import Drawer from "../components/Drawer";
import { useEffect } from "react";
const MainLayout: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page after render the pages
  }, []);

  return (
    <MainContextProvider>
      <div className="overflow-hidden">
        <Drawer />
        <Outlet />
      </div>
    </MainContextProvider>
  );
};

export default MainLayout;
