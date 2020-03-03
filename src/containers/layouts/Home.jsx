import React, { Component } from "react";

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
