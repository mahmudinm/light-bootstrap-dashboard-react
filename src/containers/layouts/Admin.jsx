import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      fixedClasses: "dropdown show-dropdown open"
    };
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainPanel.scrollTop = 0;
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} 
          color={this.state.color}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Admin;
