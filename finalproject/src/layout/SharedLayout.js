import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout;