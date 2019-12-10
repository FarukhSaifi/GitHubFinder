import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  static defaultProps = {
    title: "ReactDash",
    menu1: "Dashboard"
  };
  render() {
    const { title, menu1 } = this.props;
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {menu1}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li to="/user" className="nav-item">
                <Link className="nav-link">Farukh1x95</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
