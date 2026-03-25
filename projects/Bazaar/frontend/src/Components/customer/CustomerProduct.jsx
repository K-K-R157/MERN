
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../stores/slices/customerSlice";
const CustomerProduct = ({ product,cart}) => {
  const imageSrc = product.imageUrl
    ? product.imageUrl.startsWith("http")
      ? product.imageUrl
      : `http://localhost:3000/${product.imageUrl.replace(/\\/g, "/").replace(/^\//, "")}`
    : null;

    const dispatch = useDispatch();
    const isInCart = cart.includes(product._id.toString());
    
    const handleAddToCart = async (productId) => {
      dispatch(addToCart(productId));
    }

    const handleRemoveFromCart = async (productId) => {
      dispatch(deleteFromCart(productId));
    }


  return (
    <div
      key={product._id}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          {product.rating && (
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.rating}
            </span>
          )}
        </div>
        {product.brand && (
          <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
        )}
        {product.category && (
          <p className="text-sm text-gray-500 mb-3">
            Category: {product.category}
          </p>
        )}
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <p className="text-lg font-bold text-green-600">₹{product.price}</p>
        {isInCart ? (
          <button
            onClick={() => handleRemoveFromCart(product._id)}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(product._id)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerProduct;
