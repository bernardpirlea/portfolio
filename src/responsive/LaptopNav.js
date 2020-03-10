import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/LaptopNav.css";

export default class LaptopNav extends Component {
  render() {
    return (
      <div id="navbar">
        <div>
          <Link id="logo" className="black-text" to="/portfolio">
            Bernard
          </Link>
        </div>
        <ul>
          <li>
            <Link className="link grey-text text-darken-2" to="/academic">
              Academic
            </Link>
          </li>
          <li>
            <Link className="link grey-text text-darken-2" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link grey-text text-darken-2" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
