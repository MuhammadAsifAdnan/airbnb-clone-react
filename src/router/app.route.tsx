import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../components/business/landing/landing';
import NotFound from '../components/business/not-found/not-found';
import PropertyDetails from '../components/business/property-details/property-details';

export const AppRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/property-details/:id">
        <PropertyDetails />
      </Route>

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
