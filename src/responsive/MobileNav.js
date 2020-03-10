import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick = e => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div style={divStyle}>
        <div>
          <Link
            id="logo"
            style={{ textAlign: "start" }}
            className="black-text"
            to="/portfolio"
          >
            Bernard
          </Link>
        </div>
        <div style={{ textAlign: "end" }}>
          <button
            className="white"
            onClick={this.onButtonClick}
            style={buttonStyle}
          >
            <i className="small material-icons white">menu</i>
          </button>
        </div>
        {this.state.show ? (
          <div style={menuStyle}>
            <ul style={listStyle}>
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
        ) : null}
      </div>
    );
  }
}
const menuStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  marginTop: "50px"
};

const listStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
};

const divStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const buttonStyle = {
  border: "0",
  padding: "20px",
  margin: "0"
};
