import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedAdminLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedAdminLayout;