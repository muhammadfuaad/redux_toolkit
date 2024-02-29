import { useEffect, useState } from "react";
import React from "react";
import { add, addAll, remove } from "./store/mySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import productData from "./Products.json";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const res = await fetch("https://fakestoreapi.com/products");
      // const data = await res.json();
      // console.log(data);
      // setProducts(data);
      // alert(products);
      // the above code taked the dat from third party API

      console.log(productData); // Just for verification
      setProducts(productData);
      // this code takes the products data from a local json file
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleAddAll = (products) => {
    dispatch(addAll(products));
  };
  const handleRemove = (item) => {
    dispatch(remove(item));
  }
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Products List</h1>
      <h3><span className="font-bold">Cart Size:</span> {items.length}</h3>
      <div><span className="font-bold">View Cart:</span> 
        {items.map((item, index) => 
          <div id="cart_item">
            <div><span>{index+1}) Produt:</span> {item.title}</div>
            <div><span>Price:</span> {item.price}</div>
            <button onClick={()=>{handleRemove(item)}}>Remove</button>
          </div>
        )}
      </div>
      <button className="bg-blue-600 text-white" onClick={() => handleAddAll(products)}>Add all products to cart</button>
      <div className="product_container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h4>{product.title}</h4>
            <img src={product.image} className="product_img w-full" alt={product.title} />
            <h4>Price: {product.price}</h4>
            {product.quantity && <div><span>Available articles:</span> {product.quantity}</div>}

            <button onClick={() => handleAdd(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
