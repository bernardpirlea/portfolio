import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Link id="logo" className="black-text" to="/home">
          Bernard
        </Link>
        <Link className="grey-text text-darken-2" to="/academic">
          Academic
        </Link>
        <Link className="grey-text text-darken-2" to="/projects">
          Projects
        </Link>
        <Link className="grey-text text-darken-2" to="/blog">
          Blog
        </Link>
      </div>
    );
  }
}

export default Navbar;
