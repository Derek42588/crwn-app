import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity} }) => (
  <div className="CartItem">
    <img src={imageUrl} alt="item" className="CartItem__image" />
    <div className="CartItem__item-details">
        <span className="CartItem__name">{name}</span>
        <span className="CartItem__price">{quantity} x ${price}</span>
    </div>
  </div>
);

export default CartItem;
