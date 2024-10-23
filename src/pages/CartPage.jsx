import React from "react";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountPrice = (totalPrice * 0.9).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-purple-500">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4 flex justify-between items-center mb-3 text-gray-800 text-md">
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price} x {item.quantity}</p>
                  <p className="text-purple-800">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-300 px-2 mx-2"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 px-2 mx-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-md mt-6 text-pink-600">
            Total Price:<span className="text-emerald-700">${discountPrice}</span>  <span className="text-purple-600">(10%</span> Discount Applied)
          </h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
