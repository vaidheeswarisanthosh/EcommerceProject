import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import './index.css'

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Prevent negative quantity
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
