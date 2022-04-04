import React from "react";
import "./Cart.css";

const Cart = ({ carts, chooseAgain, chooseOne }) => {
  return (
    <div className="cart">
      <h1>Cart🛒</h1>
      {carts.map((cart) => {
        return (
          <div className="cart-item" key={cart._id}>
            <img src={cart.img} alt="" />
            <p>{cart.name}</p>
          </div>
        );
      })}

      <div className="buttons">
        <button onClick={() => chooseOne(carts)}>Buy One For Me</button> <br />
        <button onClick={chooseAgain}>Reset Cart</button>
      </div>
    </div>
  );
};

export default Cart;
