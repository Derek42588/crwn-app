import React from 'react';
import { connect } from 'react-redux'
import {createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item'

import StripeButton from '../../components/stripe-button/stripe-button'

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

const CheckoutPage = ({ cartItems, totalCartPrice }) => (
  <div className="CheckOut">
    <div className="CheckOut__checkout-header">
      <div className="CheckOut__checkout-header__header-block">
        <span>Product</span>
      </div>
      <div className="CheckOut__checkout-header__header-block">
        <span>Description</span>
      </div>
      <div className="CheckOut__checkout-header__header-block">
        <span>Quantity</span>
      </div>
      <div className="CheckOut__checkout-header__header-block">
        <span>Price</span>
      </div>
      <div className="CheckOut__checkout-header__header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem =>
            <CheckoutItem key = {cartItem.id}  item = {cartItem} />
            )
    }
    <div className="CheckOut__total">
        <span>TOTAL: ${totalCartPrice}</span>
    </div>
    <div className="CheckOut__test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </div>
    <StripeButton price = {totalCartPrice}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCartPrice: selectCartItemsTotal
})
export default connect(mapStateToProps)(CheckoutPage);
