import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary">
              1{this.props.totalCounters}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
