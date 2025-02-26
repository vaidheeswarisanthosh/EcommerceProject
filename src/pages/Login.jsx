import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ecommerceproject-os5e.onrender.com/api/auth/login", user);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onLogin();
      navigate("/productsPage");
    } catch (error) {
      alert("Invalid credentials! Try email: user@example.com, password: password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputChange} className="w-full p-2 border rounded mb-2" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
