import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="bg-purple-400 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold"> STORE</h1>
        <Link to="/" className="text-xl font-bold hover:text-gray-200">
          Home
        </Link>
        <Link to="/cart" className="bg-purple-800 px-4 py-2 rounded hover:bg-purple-900">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
