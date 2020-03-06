import React, { Component } from "react";
import { Responsive } from "../responsive/Responsive";
import LaptopNav from "../responsive/LaptopNav";
import MobileNav from "../responsive/MobileNav";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Responsive displayIn={["Laptop"]}>
          <LaptopNav />
        </Responsive>
        <Responsive displayIn={["Mobile"]}>
          <MobileNav />
        </Responsive>
      </div>
    );
  }
}

export default Navbar;
