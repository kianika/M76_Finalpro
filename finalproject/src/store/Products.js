import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./Api";

const slice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        productsRequested: (products, action) => {
            products.loading = true;
        },

        productsReceived: (products, action) => {
            products.list = action.payload;
            products.loading = false;
        },

        productsRequestFailed: (products, action) => {
            products.loading = false;
        },
    },
});

export default slice.reducer;

const { productsRequested, productsReceived, productsRequestFailed } = slice.actions;

const url = "/products";

export const loadproducts = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};