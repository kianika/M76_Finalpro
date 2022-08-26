import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3002/orders"
const initialState = {
    orders: [{}],
    loadings: false,
    total: 0,
    error: ""
}

export const fetchOrders = createAsyncThunk("orders/fetchOrders", ({delivered, page}) => {
    return axios.get(`${BASE_URL}?delivered=${delivered}&_page=${page}&_limit=1`).then(response =>{
        return {
          data : response.data,
          total: Number(response.headers["x-total-count"])
 } })
})

/* export const deleteTodos = createAsyncThunk("orders/deleteOrders", (id) => {
    return axios.delete(`${BASE_URL}/${id}`).then(res => res.data)
})
 */
/* export const createTodos = createAsyncThunk("todos/createTodos", (post) => {
    return axios.post(BASE_URL, post).then(res => res.data)
})
 */
export const changeDelivered = createAsyncThunk("orders/changeDelivered",  (id) => {
    return axios.patch(`${BASE_URL}/${id}`, {delivered: false}).then(res => res.data)
} )

/* export const changeNotDone = createAsyncThunk("todos/changeNotDone",  (id) => {
    return axios.patch(`${BASE_URL}/${id}`, {done: true}).then(res => res.data)
} ) */
const OrdersSlice = createSlice({
    name: "orders",
    page: 1,
    initialState,
    extraReducers: {

        // FETCH GET
        [fetchOrders.pending]: (state) => {
            state.loadings= true
        },
        [fetchOrders.fulfilled]: (state , action) => {
            state.loadings= false;
            state.orders= action.payload.data;
            state.total= action.payload.total;
        },
        [fetchOrders.rejected]: (state) => {
            state.loadings= false;
            state.error = "some thing went wrong :( "
        },

        // FETCH POST 
     

        // FETCH DELETE
      
        // FETCH UPDATE
        [changeDelivered.pending]: (state) => {
            state.loadings= true
        },
        [changeDelivered.fulfilled]: (state, action) => {
            state.loadings= false;
            state.orders = action.payload;
        },
        [changeDelivered.rejected]: (state) => {
            state.loadings= false;
            state.error = "some thing went wrong :( "
        }
     
    
    }
})


export default OrdersSlice.reducer 

