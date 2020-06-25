import React from 'react';

import CollectionItem from '../collection-item/collection-item'

const PreviewCollection = ({ title, items }) => (
  <div className="PreviewCollection">
    <h1 className="PreviewCollection__title">{title}</h1>
    <div className="PreviewCollection__preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          // <div key={item.id}>{item.name}</div>
          <CollectionItem 
          key = {item.id}
          item = {item}

          />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
