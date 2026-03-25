import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import sellerReducer from "./slices/sellerSlice";
import customerReducer from "./slices/customerSlice";
const store = configureStore({
    reducer: {
        // Add your reducers here
        auth: authSlice.reducer,
        seller: sellerReducer,
        customer:customerReducer,
    }
});
export default store;
