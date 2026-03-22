import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../stores/slices/authSlice"; // Update path as needed

const NavBar = () => {
  const { isLoggedIn, userType } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav className="w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              to="/"
              className="text-3xl font-bold text-white hover:opacity-90 transition"
            >
              Bazaar
            </Link>
            <div className="flex gap-8 items-center">
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition font-medium text-lg"
              >
                Home
              </Link>
              {isLoggedIn && userType === "seller" && (
                <Link
                  to="/add-product"
                  className="text-white hover:text-blue-200 transition font-medium text-lg"
                >
                  Add Product
                </Link>
              )}
              {!isLoggedIn && (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-blue-200 transition font-medium text-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-white text-blue-600 px-6 py-2.5 rounded-full hover:bg-blue-50 transition font-semibold shadow-md hover:shadow-lg"
                  >
                    Signup
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2.5 rounded-full hover:bg-red-600 transition font-semibold shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
