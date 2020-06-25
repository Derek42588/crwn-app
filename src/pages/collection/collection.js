import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="Collection">
      <h2 className="Collection__title">{title}</h2>
      <div className="Collection__items">
        {items.map((item) => (
          <CollectionItem key = {item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
