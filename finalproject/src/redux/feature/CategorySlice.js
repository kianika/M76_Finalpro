import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3002/category"
const initialState = {
    categories: [{

    }],
    loadings: false,
    error: ""
}

export const fetchCategory = createAsyncThunk("categories/fetchCategory", () => {
    return axios.get(`${BASE_URL}`).then(res => res.data)
       })



const CategorySlice = createSlice({
    name: "categories",
    page: 1,
    initialState,
    extraReducers: {

        // FETCH GET
        [fetchCategory.pending]: (state) => {
            state.loadings= true
        },
        [fetchCategory.fulfilled]: (state , action) => {
            state.loadings= false;
            state.categories= action.payload;
        },
        [fetchCategory.rejected]: (state) => {
            state.loadings= false;
            state.error = "some thing went wrong :( "
        },

        // FETCH POST 
     

        // FETCH DELETE
      
        // FETCH UPDATE
      
     
    
    }
})


export default CategorySlice.reducer 

