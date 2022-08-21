import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsReducer } from "./Products";
import { ordersReducer } from "./orders";
import Api from "./middleware/Api";
import { filteredordersReducer } from "./filteredorders";
export * from './Products';
export * from './orders';

export default function store() {
    return configureStore({
        reducer: {
            orders: ordersReducer,
            products: productsReducer,
            filteredorders: filteredordersReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api),
        })
}