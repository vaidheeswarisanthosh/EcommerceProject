import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductList products={products} addToCart={addToCart} />;
};

export default ProductsPage;
