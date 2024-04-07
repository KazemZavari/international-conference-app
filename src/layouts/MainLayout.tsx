import { Outlet } from "react-router-dom";
import MainContextProvider from "../provider/MainContext";
import Drawer from "../components/Drawer"
 const MainLayout: React.FC = () => {
  return (
    <MainContextProvider>
      <div className="z-[999999999999999] -mr-10">
      <Drawer />
      </div>
      
      <div className="w-[100%] font-OpenSansMedium ">
        <Outlet />
      </div>
    </MainContextProvider>
  );
};

export default MainLayout;
