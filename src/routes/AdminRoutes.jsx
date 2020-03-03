import React from 'react';
import { Switch } from "react-router-dom";

import AdminRoute from "routes/Router/AdminRoute.jsx";

import Typography from "containers/pages/admin/Typography.jsx";

const AdminRoutes = () => {
  return (
    <Switch>
      <AdminRoute exact path="/admin/typography" component={Typography} />
    </Switch>
  )
}

export default AdminRoutes;