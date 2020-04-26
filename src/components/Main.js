import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";

export default class Main extends Component {
  render() {
    return (
      <div id="mainContent">
        <h1>Hello,</h1>
        <h2>
          I am Bernard, <br /> a software developer
        </h2>
        <div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/bernardpirlea/"
                className="waves-effect waves-light btn-floating btn-large social linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bernardpirlea"
                className="waves-effect waves-light btn-floating btn-large social github"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:pirlea.bernard@gmail.com"
                className="waves-effect waves-light btn-floating btn-large social google"
              >
                <i className="fa fa-google"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
