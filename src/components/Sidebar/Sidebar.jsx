/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import logo from "assets/img/reactlogo.png";

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
      >
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            <li>
              <NavLink
                to={'/admin/typography'}
                className="nav-link"
                activeClassName="active"
              >
                <i className={''} />
                <p>Typography</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/admin/userprofile'}
                className="nav-link"
                activeClassName="active"
              >
                <i className={''} />
                <p>User Profile</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
