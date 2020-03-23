import React, { Component } from "react";

export default class Academic extends Component {
  render() {
    return (
      <div style={pageStyle}>
        <div style={contentStyle}>
          <i class="medium material-icons">account_balance</i>
          <h5>Alexandru Ioan Cuza University of Iasi</h5>
          <p>Computer Science, 2020</p>
          <i class="medium material-icons">school</i>
          <h5>National College of Informatics - Piatrea Neamt</h5>
          <p>Computer Science, 2016</p>
        </div>
      </div>
    );
  }
}
const pageStyle = {
  paddingTop: "10px",
  textAlign: "center"
};

const contentStyle = {
  padding: "20px"
};
