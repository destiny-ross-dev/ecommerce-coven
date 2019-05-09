import React, { Component } from "react";

class Extras extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Extras__Container">
        <h2 className="Extras__Headline">More</h2>
        <div className="Extras__CatContainer">
          <div className="Extras__CatThumbnail--about Extras__CatThumbnail">
            Learn More{" "}
          </div>
          <div className="Extras__CatThumbnail--class Extras__CatThumbnail">
            Take a class
          </div>
          <div className="Extras__CatThumbnail--other Extras__CatThumbnail" />
        </div>
      </div>
    );
  }
}

export default Extras;
