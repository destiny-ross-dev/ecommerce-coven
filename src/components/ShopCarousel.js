import React, { Component } from "react";
import lessonsImg from "../assets/constellations.jpg";
import altarsImg from "../assets/aesthetic.jpeg";

const carouselArray = [
  {
    img: altarsImg,
    header: "Coven",
    headline: "Welcome to The Coven",
    callToActionText: "Learn More",
    infoHeader: "Magical Provisions for the Modern Feminist Witch",
    infoDesc: `It's more than a shop. It's a movement. Join a workshop, explore new crafts, or shop our products. There's something here for everyone.`,
    color: `#3C3152`
  },
  {
    img: lessonsImg,
    header: "Classes",
    headline: "Learn from the Elders",
    callToActionText: "Register for Classes",
    infoHeader: "Take your craft to the next level",
    infoDesc: `Combine ancient wisdom with modern science. Learn from master Reiki
    practitioners or take classes in herbology, runology, divination and
    much more.`,
    color: `#22324c`
  }
];

class ShopCarousel extends Component {
  render() {
    return (
      <div className="Shop__Carousel">
        <div className="Shop__Carousel-Title-Box">
          <h3 className="Shop__Carousel-Title">
            {carouselArray[`${this.props.carouselNum}`].header}
          </h3>
          <h2>{carouselArray[`${this.props.carouselNum}`].headline}</h2>
          <button
            style={{
              backgroundColor: carouselArray[`${this.props.carouselNum}`].color
            }}
          >
            {carouselArray[`${this.props.carouselNum}`].callToActionText}
          </button>
        </div>

        <img src={carouselArray[`${this.props.carouselNum}`].img} />

        <div className="Shop__Carousel-Info-Box">
          <h3 className="Shop__Carousel-Info-Box-Title">
            {carouselArray[`${this.props.carouselNum}`].infoHeader}
          </h3>
          <p>{carouselArray[`${this.props.carouselNum}`].infoDesc}</p>
        </div>
      </div>
    );
  }
}

export default ShopCarousel;
