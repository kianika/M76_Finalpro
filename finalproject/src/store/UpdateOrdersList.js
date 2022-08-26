
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./Api";

const slice = createSlice({
    name: "editorders",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        editordersRequested: (filteredorders, action) => {
            editorders.loading = true;
        },

        editordersReceived: (editorders, action) => {
           editorders.list = action.payload;
            editorders.loading = false;
        },

        editordersRequestFailed: (editorders, action) => {
           editorders.loading = false;
        },
    },
});

export const editordersReducer =  slice.reducer;

const { editordersRequested, editordersReceived, editordersRequestFailed } = slice.actions;

let url = "";
const data = "";
const method = "";

export const editorders = (id, delivered, item) => (dispatch) => {
    url = `/orders?id:{id}`;
    data = {...item, delivered : delivered };
    method = "PUT";

    return dispatch(
        apiCallBegan({
            url,
            method,
            data,
            onStart: editordersRequested.type,
            onSuccess: editordersReceived.type,
            onError: editordersRequestFailed.type,
        })
    );
};