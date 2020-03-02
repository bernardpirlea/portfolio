import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div id="logo">
          <Link className="black-text" to="/">
            Bernard
          </Link>
        </div>
        <div id="links">
          <Link className="grey-text text-darken-2" to="/about">
            About
          </Link>
          <Link className="grey-text text-darken-2" to="/projects">
            Projects
          </Link>
          <Link className="grey-text text-darken-2" to="/academic">
            Academic
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
