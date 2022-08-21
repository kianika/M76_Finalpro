import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./Api";

const slice = createSlice({
    name: "orders",
    initialState: {
        list: [],
        loading: false
    },

    reducers: {
       ordersRequested: (filteredorders, action) => {
           filteredorders.loading = true;
        },

      ordersReceived: (orders, action) => {
            orders.list = action.payload;
           orders.count = action.payload.length

            orders.loading = false;
        },

        ordersRequestFailed: (orders, action) => {
           orders.loading = false;
        },
    },
});

export const ordersReducer =  slice.reducer;

const { ordersRequested, ordersReceived, ordersRequestFailed } = slice.actions;

let url = "";


export const loadorders = (delivered) => (dispatch) => {
    url = `/orders?delivered=${delivered}`;
    return dispatch(
        apiCallBegan({
            url,
            onStart: ordersRequested.type,
            onSuccess: ordersReceived.type,
            onError: ordersRequestFailed.type,
        })
    );
};