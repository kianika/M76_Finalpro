import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsReducer } from "./Products";
import { ordersReducer } from "./Orders";
import Api from "./middleware/Api";
export * from './Products';
export * from './Orders';

export default function store() {
    return configureStore({
        reducer: {
            orders: ordersReducer,
            products: productsReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api),
        })
}