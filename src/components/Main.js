import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";

export default class Main extends Component {
  render() {
    return (
      <div id="mainContent">
        <h1>Hello,</h1>
        <h2>
          I am a full stack developer, <br></br> and I try to learn new things
          everday
        </h2>
        <div>
          <ul>
            <li>
              <Link
                to="/"
                className="waves-effect waves-light btn-floating btn-large social linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="waves-effect waves-light btn-floating btn-large social github"
              >
                <i className="fa fa-github"></i>
              </Link>
            </li>
            <li>
              <Link
                to="google-mail"
                className="waves-effect waves-light btn-floating btn-large social google"
              >
                <i className="fa fa-google"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
