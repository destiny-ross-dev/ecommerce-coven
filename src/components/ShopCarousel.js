import React, { Component } from "react";
import lessonsImg from "../assets/constellations.jpg";
const carouselArray = [{ img: lessonsImg, header: "Take lessons" }];

class ShopCarousel extends Component {
  render() {
    return (
      <div className="Shop__Carousel-Container">
        <div className="Shop__Carousel-Title-Box">
          <h3 className="Shop__Carousel-Title">Classes</h3>
          <h2>Learn from the Elders</h2>
          <button>Register for Classes</button>
        </div>
        <img src={carouselArray[`${this.props.carouselNum}`].img} />
      </div>
    );
  }
}

export default ShopCarousel;
