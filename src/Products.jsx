import { useEffect, useState } from "react";
import React from "react";
import { addToCart, addAll, removeFromCart, addToProducts, removeFromProducts } from "./store/mySlice";
import { useDispatch, useSelector } from "react-redux";
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

      // console.log(productData); // Just for verification
      // setProducts(productData);
      // this code takes the products data from a local json file
    };
    fetchProducts();
  }, []);

  const handleAdd = (availableItem) => {
    if (availableItem.availableQuantity > 0) {
      dispatch(addToCart(availableItem));
      dispatch(removeFromProducts(availableItem));
    } else {
      alert("This product is out of stock.")
    }
  };
  const handleAddAll = (products) => {
    dispatch(addAll(products));
  };
  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  }
  const cartItems = useSelector((state) => state.cart);
  const availableItems = useSelector((state) => state.product);

  return (
    <div>
      <h1>Products List</h1>
      <p>{availableItems.length}</p>
      <h3><span className="font-bold">Cart Size:</span> {cartItems.length}</h3>
      <div><span className="font-bold">View Cart:</span> 
        {cartItems.map((item, index) => 
          <div id="cart_item">
            <div><span>{index+1}) Produt:</span> {item.title}({item.cartQuantity})</div>
            <div><span>Price:</span> {item.price}</div>
            <button onClick={()=>{handleRemove(item)}}>Remove</button>
          </div>
        )}
      </div>
      {/* <button className="bg-blue-600 text-white" onClick={() => handleAddAll(products)}>Add all products to cart</button> */}
      <div className="product_container">
        {availableItems.map((availableItem) => (
          <div className="card" key={availableItem.id}>
            <h4>{availableItem.title}</h4>
            <img src={availableItem.image} className="product_img w-full" alt={availableItem.title} />
            <h4>Price: {availableItem.price}</h4>
            {(availableItem.availableQuantity > 0) && <div><span>Available articles:</span> {availableItem.availableQuantity}</div>}

            <button onClick={() => handleAdd(availableItem)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
