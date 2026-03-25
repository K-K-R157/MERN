import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/seller/AddProduct";
import NavBar from "./nav/NavBar";
import Signup from "./Components/auth/signup";
import Login from "./Components/auth/login";
import SellerHome from "./Components/seller/SellerHome";
import CustomerHome from "./Components/customer/CustomerHome";
import { useSelector } from "react-redux";
import Cart from "./Components/customer/cart/Cart";
import Orders from "./Components/customer/Orders";
function App() {
  const userType = useSelector((state) => state.auth.userType);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                userType === "seller" ? <SellerHome /> : <CustomerHome />
              }
            />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
