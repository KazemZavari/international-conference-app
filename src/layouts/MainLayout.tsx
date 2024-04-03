import { Outlet } from "react-router-dom";
import MainContextProvider from "../provider/MainContext";
const MainLayout: React.FC = () => {
  return (
    <MainContextProvider>
      <div className="w-[100%] font-OpenSansMedium ">
        <Outlet />
      </div>
    </MainContextProvider>
  );
};

export default MainLayout;
