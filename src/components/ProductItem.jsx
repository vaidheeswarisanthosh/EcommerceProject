import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
      <h3 className="text-sm font-semibold">{product.title}</h3>
      <p className="text-gray-600 p-3">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-purple-600 font-semibold text-white px-4 py-2 rounded hover:bg-red-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
