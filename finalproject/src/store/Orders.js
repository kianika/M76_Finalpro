import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./Api";

const slice = createSlice({
    name: "orders",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        ordersRequested: (orders, action) => {
           orders.loading = true;
        },

        ordersReceived: (orders, action) => {
            orders.list = action.payload;
            orders.loading = false;
        },

        ordersRequestFailed: (orders, action) => {
            orders.loading = false;
        },
    },
});

export const ordersReducer =  slice.reducer;

const { ordersRequested, ordersReceived, ordersRequestFailed } = slice.actions;

const url = "/orders";

export const loadorders = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: ordersRequested.type,
            onSuccess: ordersReceived.type,
            onError: ordersRequestFailed.type,
        })
    );
};