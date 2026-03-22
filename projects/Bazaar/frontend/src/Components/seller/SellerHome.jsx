import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProducts } from "../../stores/slices/sellerSlice";

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
    return <div className="loading">Loading...</div>;
  }

  if (errorMessages.length > 0) {
    return <div className="error">{errorMessages[0]}</div>;
  }

  return (
    <div className="seller-home">
      <h1>Seller Dashboard</h1>
      <div className="products-container">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default SellerHome;
