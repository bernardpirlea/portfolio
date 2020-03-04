import React, { Component } from "react";

export default class Progress extends Component {
  render() {
    return (
      <div style={pageStyle}>
        <h3>Sorry, we are still working on this page </h3>
        <i className="large material-icons">build</i>
      </div>
    );
  }
}

const pageStyle = {
  textAlign: "center",
  padding: "30px"
};
