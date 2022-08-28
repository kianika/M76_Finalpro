
/* import { ordersReducer } from "./Orders";
import Api from "./middleware/Api";
import { filteredordersReducer } from "./filteredorders";
import { editordersReducer } from "./UpdateOrdersList";
export * from './Products';
export * from './Orders';

export default function store() {
    return configureStore({
        reducer: {
            orders: ordersReducer,
            products: productsReducer,
            filteredorders: filteredordersReducer,
            editorders: editordersReducer 
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api),
        })
} */


import { configureStore } from "@reduxjs/toolkit";
import OrdersSlice from "./feature/OrdersSlice";
import ProductsSlice from "./feature/ProductsSlice";
import CategorySlice from "./feature/CategorySlice";
import usersSlice from "./feature/usersSlice";



const store = configureStore({reducer: { orders: OrdersSlice,
products: ProductsSlice,
 categories: CategorySlice,
 users: usersSlice}})
export default store