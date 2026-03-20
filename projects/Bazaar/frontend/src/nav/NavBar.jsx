import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-600">Bazaar</h1>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</Link>
            <Link to="/add-product" className="text-gray-700 hover:text-blue-600 transition font-medium">Add Product</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition font-medium">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;