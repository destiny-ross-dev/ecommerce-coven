import React, { Component } from "react";
import ShopSideBar from "../components/ShopSideBar";
import ShopCarousel from "../components/ShopCarousel";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { carouselNum: 0 };
  }
  render() {
    return (
      <div className="Shop">
        <ShopSideBar />
        <ShopCarousel carouselNum={this.state.carouselNum} />
      </div>
    );
  }
}

export default ShopPage;
