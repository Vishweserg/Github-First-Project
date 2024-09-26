import React from 'react';
import './Product.css';

const Product = ({ id, name, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product__image" />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__price">
          ₹<strong>{price}</strong>
        </p>
        <button className="product__addToCartButton">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
