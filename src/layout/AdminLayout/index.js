// import pages
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Header from "../../components/Header";
import AdminSidebar from "./admin-sidebar";

// ==============================|| MAIN LAYOUT ||============================== //

const AdminLayout = () => {
  return (
    <div className="flex w-full m-0 relative">
      <div className="fixed w-[15%] h-screen min-w-[200px] bg-white">
        <AdminSidebar />
      </div>
      <div className="w-[85%] h-screen relative left-[15%]">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AdminLayout;
