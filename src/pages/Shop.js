import React, { Component } from "react";
import ShopSideBar from "../components/ShopSideBar";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Shop">
        <ShopSideBar />
      </div>
    );
  }
}

export default ShopPage;
