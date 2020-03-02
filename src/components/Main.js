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
        <div id="links">
          <Link
            className="fa fa-linkedin"
            to="https://www.linkedin.com/in/bernardpirlea/"
          ></Link>
          <Link
            className="fa fa-github"
            to="https://github.com/bernardpirlea"
          ></Link>
          <Link
            className="fa fa-google"
            to="mailto:pirlea.bernard@gmail.com"
            target="_top"
          ></Link>
        </div>
      </div>
    );
  }
}
