import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="  w-[100%] ">
      <Outlet />
    </div>
  );
};

export default MainLayout;
