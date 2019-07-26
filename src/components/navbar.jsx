import React from "react";
/* import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCount}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
 */

const Navbar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {props.totalCount}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
