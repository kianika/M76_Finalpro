import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";
import AdminAppBar from "../components/adminappbar/index";

const SharedAdminLayout = () => {
  return (
    <div>
      <AdminAppBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedAdminLayout;