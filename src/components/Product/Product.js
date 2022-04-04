import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { name, price, img } = product;
  return (
    <div className="product">
      <div className="product-details">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <h4>Price: ${price}</h4>
        </div>
      </div>
      <button onClick={() => addToCart(product)}>
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
