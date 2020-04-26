import React, { Component } from "react";
import simpleApiImage from "../images/simpleApi.png";
import portfolioImage from "../images/portfolio.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="container" style={divStyle}>
        <div className="row">
          <div className="col s12 m6">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <a href="https://salty-falls-47840.herokuapp.com/">
                  <img className="activator" src={simpleApiImage} />
                </a>
              </div>
              <div className="card-content">
                <span className="card-title">Simple Store Application</span>
                <p>
                  An online store. Build using EJS on the Frontend, Node.js and
                  MongoDB on the Backend
                </p>
              </div>
              <div className="card-action">
                <a
                  href="https://github.com/bernardpirlea/Work"
                  className="black-text"
                >
                  Source Code
                </a>
                <a
                  href="https://salty-falls-47840.herokuapp.com/"
                  className="black-text"
                >
                  Application
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={portfolioImage} />
              </div>
              <div className="card-content">
                <span className="card-title">Portfolio Website</span>
                <p>My Portfolio Website build using React.js and Materialize</p>
              </div>
              <div className="card-action">
                <a
                  href="https://github.com/bernardpirlea/portfolio"
                  className="black-text"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const divStyle = {
  paddingTop: "60px",
};
