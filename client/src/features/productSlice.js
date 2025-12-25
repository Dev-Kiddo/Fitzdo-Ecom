import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios("http://localhost:8000/api/v1/products");
    console.log("Api_Product_Data:", data);

    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message || "An error occured");
  }
});

export const fetchProduct = createAsyncThunk("products/fetchProduct", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios(`http://localhost:8000/api/v1/products/${payload.id}`);
    console.log("Product_Data:", data);

    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message || "An error occured");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    products: [],
    product: null,
  },
  reducers: {
    removeError: function (state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Something went wrong";
    });

    // Single Product
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload.product;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Something went wrong";
    });
  },
});

export const { removeError } = productSlice.actions;

export default productSlice.reducer;
