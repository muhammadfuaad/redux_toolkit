import { useEffect, useState } from "react";
import React from "react";
import { add } from "./store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
      // alert(products);
    };
    fetchUsers();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleAddAll = (products) => {
    dispatch(add(products));
  };
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Products List</h1>
      <h3><span className="font-bold">Cart Size:</span> {items.length}</h3>
      <h3><span className="font-bold">View Cart:</span> {items.map((item) => item.title)}</h3>
      <button className="bg-blue-600 text-white" onClick={() => handleAddAll(products)}>Add all products to cart</button>
      <div className="product_container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h4>{product.title}</h4>
            <img src={product.image} className="product_img" alt={product.title} />
            <h4>Price: {product.price}</h4>
            <button onClick={() => handleAdd(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
