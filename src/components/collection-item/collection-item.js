import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, addItemToCart }) => {
    const {  name, price, imageUrl} = item


  return (
    <div className="CollectionItem">
      <div
        className="image CollectionItem__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="CollectionItem__footer">
        <span className="CollectionItem__name">{name}</span>
        <span className="CollectionItem__price">{price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addItemToCart: (item) =>
    dispatch(
      addItemToCart(item)
    ),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
