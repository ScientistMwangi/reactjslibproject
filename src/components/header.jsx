import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>Header Content</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
