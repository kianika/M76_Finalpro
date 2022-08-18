import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

const SharedAdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedAdminLayout;