import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Admin from "./components/Admin";
import AdminNavbar from "./components/AdminNavbar";
import SharedAdminLayout from "./components/SharedAdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
        </Route>
        <Route path="login" element={<SharedAdminLayout />}>
          <Route path="admin" element={<Admin />} />
          <Route path="adminNavbar" element={<AdminNavbar />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;