import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProducts } from "../../stores/slices/sellerSlice";
import ErrorMessages from "../common/ErrorMessages";
import SellerProduct from "./SellerProduct";
import { deleteProduct } from "../../stores/slices/sellerSlice";
const SellerHome = () => {
  const dispatch = useDispatch();
  const { products, isLoading, errorMessages } = useSelector(
    (state) =>
      state.seller || { products: [], isLoading: false, errorMessages: [] },
  );

  useEffect(() => {
    dispatch(fetchSellerProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">Loading...</div>
    );
  }

  const handleDeleteProduct = async (productId) => {
    const respond = await fetch(
      `http://localhost:3000/api/seller/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    if (respond.ok) {
      dispatch(deleteProduct(productId));
    } else {
      const data = await respond.json();
      throw new Error(data.message || "Failed to delete product");
    }
  };

  return (
    <div className="seller-home p-8">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ErrorMessages messages={errorMessages} />
        {products && products.length > 0 ? (
          products.map((product) => (
            <SellerProduct
              key={product._id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No products available
          </p>
        )}
      </div>
    </div>
  );
};

export default SellerHome;
