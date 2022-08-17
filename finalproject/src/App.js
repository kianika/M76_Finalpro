import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./layout/SharedLayout";
import SharedAdminLayout from "./layout/SharedAdminLayout";
import ShoppingCart from "./pages/ShoppingCart";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import SuccessPayment from "./pages/SuccessPayment"
import FailPayment from "./pages/FailPayment"
import Payment from "./pages/Payment"
import Orders from "./pages/Orders"
import Inventory from "./pages/Inventory"
import Products from "./pages/Products"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product" element={<Product />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="successPayment" element={<SuccessPayment />} />
          <Route path="failPayment" element={<FailPayment />} />
        </Route>

        <Route path="/payment" element={<Payment />} />
        <Route path="login" element={<Login />} />

        <Route path="admin" element={<SharedAdminLayout />}>
          <Route index element={<Products />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;