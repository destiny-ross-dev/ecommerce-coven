import React, { Component } from "react";
import ShopByCategory from "../components/ShopByCategory";
import Extras from "../components/Extras";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Page Page__Landing">
        <ShopByCategory />
        <Extras />
      </div>
    );
  }
}

export default LandingPage;
