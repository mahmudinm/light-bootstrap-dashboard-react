import React from 'react';
import { Route } from 'react-router-dom';
import Home from "containers/layouts/Home.jsx";

const HomeRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Home>
        <Component {...props} />
      </Home>
    )} />
  )
}

export default HomeRoute;