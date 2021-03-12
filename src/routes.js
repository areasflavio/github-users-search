/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import { UserContext } from './contexts/UserContext';

function Routes() {
  const { user } = useContext(UserContext);

  if (!user && location.pathname === '/details') {
    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" component={Details} />
    </Switch>
  );
}

export default Routes;
