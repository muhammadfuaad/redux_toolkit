import { useEffect, useState } from "react";
import React from "react";
import { add } from "./store/cartSlice";
import store from "./store/store";
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
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Products List</h1>
      <h3>cart size: {items.length}</h3>
      <h3>View Cart: {items.map((item) => item.title)}</h3>
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
