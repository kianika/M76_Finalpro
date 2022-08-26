
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



const store = configureStore({reducer: { orders: OrdersSlice}})
export default store