import { SliderValueLabel } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDebugValue } from "react";
import instance from "../../api/http"

const BASE_URL = "http://localhost:3002/products";
const initialState = {
  products: [{
  }],
  loadings: false,
  total: 0,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  ({ page }) => {
    return axios.get(`${BASE_URL}?_limit=5&_page=${page}`).then((response) => {
      return {
        data: response.data,
        total: response.headers["x-total-count"],
      };
    });
  }
);

export const createProducts = createAsyncThunk(
  "products/createProducts",
  (product) => {
    return axios.post(BASE_URL, product).then((res) => res.data);
  }
);

export const updateProducts = createAsyncThunk(
  "todos/updateProducts",  
  (product) => {
  return axios.put(`${BASE_URL}/${product.id}`, product).then(res => res.data)
} 
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts", (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then(res => res.data)
})

export const editQuantity = createAsyncThunk(
  "products/editQuantity",  (id, value) => {
  return instance.patch(`${BASE_URL}/${id}`, {quantity : `${value}`}).then(res => res.data)
} )


//Home page fetch

export const fetchHomeProducts = createAsyncThunk(
  "products/fetchHomeProducts",
  () => {
    return axios.get(`${BASE_URL}`).then((res) => res.data);
  }
);

//Categories page fetch

export const fetchCategoriesProducts = createAsyncThunk(
  "products/fetchCategoriesProducts",
  (id) => {
    return axios.get(`${BASE_URL}?category=${id}`).then((res) => res.data);
  }
);



const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    // FETCH GET
    [fetchProducts.pending]: (state) => {
      state.loadings = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.products = action.payload.data;
      state.total = action.payload.total;
    },
    [fetchProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },

    // FETCH POST

    [createProducts.pending]: (state) => {
      state.loadings = true;
    },
    [createProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.products = [...state, action.payload]
    },
    [createProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },

    

    // FETCH DELETE
    
    [deleteProducts.pending]: (state) => {
      state.loadings = true;
    },
    [deleteProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.products = [...state, action.payload]
    },
    [deleteProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },
    // FETCH UPDATE
 
    [updateProducts.pending]: (state) => {
      state.loadings = true;
    },
    [updateProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.products = [...state, action.payload]
    },
    [updateProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },

    [editQuantity.pending]: (state) => {
      state.loadings = true;
    },
    [editQuantity.fulfilled]: (state, action) => {
      state.loadings = false;
      //state.products = [...state,  action.payload.quantity]
    },
    [editQuantity.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },


    [fetchHomeProducts.pending]: (state) => {
      state.loadings = true;
    },
    [fetchHomeProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.products = action.payload;
    },
    [fetchHomeProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },

    [fetchCategoriesProducts.pending]: (state) => {
      state.loadings = true;
    },
    [fetchCategoriesProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.products = action.payload;
    },
    [fetchCategoriesProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    }

  },
});
export default ProductsSlice.reducer;
