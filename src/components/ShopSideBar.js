import React, { Component } from "react";

class ShopSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Shop__Side-Bar">
        <div className="Shop__Category-Div">
          <h3 className="Shop__Category-Div-Header">CATEGORIES</h3>
          <p>Herbs and Essential Oils</p>
          <p>Candles</p>
          <p>Books</p>
          <p>Crystals and Runes</p>
          <p>Tarot</p>
          <p>Altars and Tools</p>
          <p>Witchwear</p>
          <p>Miscellaneous</p>
        </div>
        <div className="Shop__Category-Div">
          <h3 className="Shop__Category-Div-Header"> CLASSES</h3>
          <p>Potions and Poultices</p>
          <p>Candle Magicks</p>
          <p>Mythology</p>
          <p>Fortune Telling</p>
          <p>Reiki I, II, III</p>
        </div>
        <div className="Shop__Category-Div Shop__Category-Div--space">
          <h3 className="Shop__Category-Div-Header">NEW ARRIVALS</h3>
        </div>
        <div className="Shop__Category-Div">
          <h3 className="Shop__Category-Div-Header">MAGICAL DEALS</h3>
        </div>
      </div>
    );
  }
}

export default ShopSideBar;
