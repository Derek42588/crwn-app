import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../collection/collection'
const ShopPage = ( {match}) => (
  <div className="ShopPage">
    <Switch>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Switch>
  </div>
);

export default ShopPage;
