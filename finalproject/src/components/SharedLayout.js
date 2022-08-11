import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout;