import React from 'react';
import { connect } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemInCart,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  item,
  removeItemFromCart,
  addItemToCart,
  decreaseItemInCart,
}) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="CheckoutItem">
      <div className="CheckoutItem__img-container">
        <img
          src={imageUrl}
          alt="item"
          className="CheckoutItem__img-container__img"
        />
      </div>
      <span className="CheckoutItem__name">{name}</span>
      <span className="CheckoutItem__quantity">
        <div className = "CheckoutItem__arrow" onClick={() => decreaseItemInCart(item)}>&#10094;</div>
        <span className = "CheckoutItem__value">{quantity}</span>
        <div className = "CheckoutItem__arrow" onClick={() => addItemToCart(item)}>&#10095;</div>
      </span>
      <span className="CheckoutItem__price">${price}</span>
      <div
        onClick={() => removeItemFromCart(item)}
        className="CheckoutItem__remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  decreaseItemInCart: (item) => dispatch(decreaseItemInCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
