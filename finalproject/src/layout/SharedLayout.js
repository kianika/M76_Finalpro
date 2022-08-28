import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";
import AdminNavbar from "../components/appbar/index";

const SharedLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout;