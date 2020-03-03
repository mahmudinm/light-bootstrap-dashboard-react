import React from 'react';
import { Switch } from "react-router-dom";

import HomeRoute from "routes/Router/HomeRoute.jsx";
import Auth from "containers/pages/Auth.jsx";

const AdminRoutes = () => {
  return (
    <Switch>
      <HomeRoute exact path="/auth" component={Auth} />
    </Switch>
  )
}

export default AdminRoutes;