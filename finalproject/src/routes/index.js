import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SharedLayout from "../layout/SharedLayout";
import SharedAdminLayout from "../layout/SharedAdminLayout";
import ShoppingCart from "../pages/payment/ShoppingCart";
import Categories from "../pages/categories/Categories";
import Product from "../pages/product/Product"
import Login from "../pages/login/Login"
import Checkout from "../pages/checkout/Checkout"
import SuccessPayment from "../pages/payment/SuccessPayment"
import FailPayment from "../pages/failpayment/FailPayment"
import Payment from "../pages/payment/Payment"
import Orders from "../pages/orders/Orders"
import Inventory from "../pages/inventory/Inventory"
import Products from "../pages/product/Products"
import PrivateRoute from "./PrivateRoute";



function Router() {
  
    return (
      
       
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="categories/:id" element={<Categories />} />
              <Route path="product" element={<Product />} />
              <Route path="shoppingCart" element={<ShoppingCart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="successPayment" element={<SuccessPayment />} />
              <Route path="failPayment" element={<FailPayment />} />
            </Route>
    
            <Route path="payment" element={<Payment />} />
            <Route path="login" element={<Login />} />
    
            
               <Route path="admin" element={<PrivateRoute><SharedAdminLayout /></PrivateRoute>}>
              
             <Route index element={<Products />} />
           <Route path="inventory" element={<Inventory />} />
             <Route path="orders" element={<Orders />} />
             
            </Route>
   
          </Routes>
          
        </BrowserRouter>
        
    );
  }
  
  export default Router;
