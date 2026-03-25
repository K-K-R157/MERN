import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerData,
} from "../../../stores/slices/customerSlice";
import ErrorMessages from "../../common/ErrorMessages";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const Cart = () => {
  const dispatch = useDispatch();
  const { products, cart, isLoading, errorMessages } = useSelector(
    (state) =>
      state.customer || {
        products: [],
        cart: [],
        isLoading: false,
        errorMessages: [],
      },
  );

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">Loading...</div>
    );
  }

  const productsInCart = products.filter((product) =>
    cart.includes(product._id),
  );

  return (
    <div className="customer-home p-8">
      <h1 className="text-3xl font-bold mb-8">Cart Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ErrorMessages messages={errorMessages} />
        <CartItems products={productsInCart} />
        <CartSummary products={productsInCart}/>
      </div>
    </div>
  );
};

export default Cart;
