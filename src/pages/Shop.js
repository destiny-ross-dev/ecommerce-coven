import React, { Component } from "react";
import ShopSideBar from "../components/ShopSideBar";
import ShopCarousel from "../components/ShopCarousel";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { carouselNum: 1 };
  }
  onNumSelect = num => {
    this.setState({ carouselNum: num });
  };
  render() {
    return (
      <div className="Shop Page">
        <ShopSideBar />
        <div className="Shop__Carousel-Container">
          <ShopCarousel
            carouselNum={this.state.carouselNum}
            onNumSelect={this.onNumSelect}
          />
        </div>
      </div>
    );
  }
}

export default ShopPage;
