import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./Products";
import Api from "./middleware/Api";

export default function store() {
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), Api],
    });
}