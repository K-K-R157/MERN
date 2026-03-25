import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  orders: [],
  isLoading: false,
  errorMessages: [],
};

export const fetchCustomerData = createAsyncThunk(
  "customer/fetchData",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/customer/data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.errorMessages[0] || "Failed to fetch customer data");
    }
  },
);

export const addToCart = createAsyncThunk(
  "customer/addToCart",
  async (productId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/customer/cart/${productId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.errorMessages[0] || "Failed to add product to cart");
    }
  },
);

export const deleteFromCart = createAsyncThunk(
  "customer/deleteFromCart",
  async (productId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/customer/cart/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.errorMessages[0] || "Failed to delete product from cart");
    }
  },
);


export const placeOrder = createAsyncThunk(
  "customer/placeOrder",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/customer/order`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.errorMessages[0] || "Failed to place order");
    }
  },
);




const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerData.pending, (state) => {
        state.isLoading = true;
        state.errorMessages = [];
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.isLoading = false;
        const { cart, orders, products } = action.payload;
        state.cart = Array.isArray(cart) ? cart : [];
        state.orders = orders;
        state.products = products || [];
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessages = [action.error.message];
      })
      .addCase(addToCart.fulfilled, (state,action) => {
        state.cart = Array.isArray(action.payload?.cart)
          ? action.payload.cart
          : [];
      })
      .addCase(deleteFromCart.fulfilled, (state,action) => {
        state.cart = Array.isArray(action.payload?.cart)
          ? action.payload.cart
          : [];
      })
      .addCase(placeOrder.fulfilled, (state,action) => {
        state.orders = Array.isArray(action.payload?.orders)
          ? action.payload.orders
          : [];
        state.cart = [];
      });
  },
});

export default customerSlice.reducer;
