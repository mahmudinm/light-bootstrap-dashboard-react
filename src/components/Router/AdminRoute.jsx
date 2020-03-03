import React from 'react';
import { Route } from 'react-router-dom';
import Admin from "layouts/Admin.jsx";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Admin>
        <Component {...props} />
      </Admin>
    )} />
  )
}

export default AdminRoute;