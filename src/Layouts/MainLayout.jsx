import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
