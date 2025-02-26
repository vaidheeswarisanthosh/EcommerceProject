
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, cart, handleLogout }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-purple-400 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">STORE</h1>
        <div className="flex gap-4 items-center">
          {!isLoggedIn ? (
            <Link to="/" className="text-xl hover:text-gray-200">
              Register
            </Link>
          ) : (
            <>
              <Link to="/productsPage" className="text-xl hover:text-gray-200">
                Products
              </Link>
              <Link to="/cart" className="bg-purple-800 px-4 py-2 rounded hover:bg-purple-900">
                Cart ({cartCount})
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
