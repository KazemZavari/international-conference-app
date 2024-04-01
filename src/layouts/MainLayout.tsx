import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="  w-[100%] font-OpenSansMedium ">
      <Outlet />
    </div>
  );
};

export default MainLayout;
