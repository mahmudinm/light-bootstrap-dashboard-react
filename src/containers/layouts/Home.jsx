import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Disini navbar</p>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Home;
