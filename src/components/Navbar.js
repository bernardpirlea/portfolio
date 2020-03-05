import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          <li>
            <Link id="logo" className="black-text" to="/home">
              Bernard
            </Link>
          </li>
          <li>
            <Link className="grey-text text-darken-2" to="/academic">
              Academic
            </Link>
          </li>
          <li>
            <Link className="grey-text text-darken-2" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="grey-text text-darken-2" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
