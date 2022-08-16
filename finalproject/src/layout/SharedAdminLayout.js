import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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