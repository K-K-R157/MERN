import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  errorMessages: [],
};

export const fetchSellerProducts = createAsyncThunk(
  "seller/fetchProducts",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/seller/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.errorMessages[0] || "Failed to fetch products");
    }
  },
);

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProducts.pending, (state) => {
        state.isLoading = true;
        state.errorMessages = [];
      })
      .addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products || [];
      })
      .addCase(fetchSellerProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages.push(action.error.message);
      });
  },
});

export const { addProduct, deleteProduct } = sellerSlice.actions;
export default sellerSlice.reducer;
