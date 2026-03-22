import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import sellerReducer from "./slices/sellerSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        auth: authSlice.reducer,
        seller: sellerReducer,

    }
});
export default store;
