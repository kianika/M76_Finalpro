import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3002/products";
const initialState = {
  products: [{}],
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
        total: Number(response.headers["x-total-count"]),
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
      state.products = action.payload;
    },
    [createProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "some thing went wrong :( ";
    },

    // FETCH DELETE

    // FETCH UPDATE
  },
});

export default ProductsSlice.reducer;
