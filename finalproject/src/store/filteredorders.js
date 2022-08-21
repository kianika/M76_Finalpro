import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./Api";

const slice = createSlice({
    name: "filteredorders",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        filteredordersRequested: (filteredorders, action) => {
            filteredorders.loading = true;
        },

        filteredordersReceived: (filteredorders, action) => {
            filteredorders.list = action.payload;
            filteredorders.loading = false;
        },

        filteredordersRequestFailed: (filteredorders, action) => {
            filteredorders.loading = false;
        },
    },
});

export const filteredordersReducer =  slice.reducer;

const { filteredordersRequested, filteredordersReceived, filteredordersRequestFailed } = slice.actions;

let url = "";

export const loadfilteredorders = (delivered, page) => (dispatch) => {
    url = `/orders?delivered=${delivered}&_page=${page}&_limit=5`;
    return dispatch(
        apiCallBegan({
            url,
            onStart: filteredordersRequested.type,
            onSuccess: filteredordersReceived.type,
            onError: filteredordersRequestFailed.type,
        })
    );
};