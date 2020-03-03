import React from 'react';
import { Switch } from "react-router-dom";

import AdminRoute from "routes/Router/AdminRoute.jsx";

import Typography from "containers/pages/admin/Typography.jsx";
import UserProfile from "containers/pages/admin/UserProfile.jsx";

const AdminRoutes = () => {
  return (
    <Switch>
      <AdminRoute exact path="/admin/typography" component={Typography} />
      <AdminRoute exact path="/admin/userprofile" component={UserProfile} />
    </Switch>
  )
}

export default AdminRoutes;