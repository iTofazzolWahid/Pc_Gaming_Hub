import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const duplicateProduct = cart.find((p) => p === product);
    const cartLength = [...cart, product].length;
    console.log(cartLength);
    if (duplicateProduct) {
      alert(`${duplicateProduct.name} You Cant add one Item two times`);
    } else if (cartLength > 4) {
      alert("You are not allowed to more than 4 items in the cart");
    } else {
      const cartItems = [...cart, product];
      setCart(cartItems);
    }
  };

  const chooseOne = (selectedCarts) => {
    const totalCartItems = selectedCarts.length;
    if (totalCartItems < 2) {
      alert("Kindly Add One or Two Items for Buy Automatic One For You");
    } else {
      const index = Math.floor(Math.random() * totalCartItems);
      const luckyCart = selectedCarts[index];
      setCart([luckyCart]);
    }
  };

  const chooseAgain = () => {
    setCart([]);
  };

  return (
    <div className="shop-container">
      <div>
        <div className="title">
          <h1>PC Gaming Hub🎮</h1>
        </div>

        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart
          carts={cart}
          chooseAgain={chooseAgain}
          chooseOne={chooseOne}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
