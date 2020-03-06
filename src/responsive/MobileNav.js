import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      style: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick = e => {
    this.setState({ show: !this.state.show, style: !this.state.style });
  };
  render() {
    let divStyle = this.state.style ? divStyleAfter : divStyleBefore;
    return (
      <div style={divStyle}>
        {this.state.show ? null : (
          <div>
            <Link id="logo" className="black-text" to="/home">
              Bernard
            </Link>
          </div>
        )}
        <button onClick={this.onButtonClick} style={buttonStyle}>
          <i className="small material-icons">menu</i>
        </button>
        {this.state.show ? (
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
        ) : null}
      </div>
    );
  }
}
const listStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
};

const divStyleBefore = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr"
};

const divStyleAfter = {
  display: "grid",
  gridTemplateColumns: "1fr"
};

const buttonStyle = {
  border: "0",
  padding: "0"
};
