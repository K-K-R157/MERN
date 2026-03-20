import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import NavBar from "./nav/NavBar";
import Signup from "./Components/auth/signup";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <NavBar/>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
