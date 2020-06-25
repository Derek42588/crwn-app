import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectShopCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.values(collections)
)
export const selectCollectionKeys = 
createSelector(
  [selectShop],
  (shop) => Object.keys(shop.collections)
  );