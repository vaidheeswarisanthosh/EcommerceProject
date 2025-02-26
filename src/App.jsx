import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate("/productsPage");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

 
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevents invalid values
  
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar isLoggedIn={isLoggedIn} cart={cart} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<Register />} />
        <Route path="/productsPage" element={<ProductsPage addToCart={addToCart} />} />
        <Route path="/cart" element={isLoggedIn ? <CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
};

export default App;
