import React, { Component } from "react";
import CategoryThumbnail from "./CategoryThumbnail";
class ShopByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ShopByCat__Container">
        <h2 className="ShopByCat__Headline">Shop by Category</h2>
        <div className="ShopByCat__CatContainer">
          <CategoryThumbnail
            linkurl="herbal"
            className="herbsandoils"
            catName="Herbs and Essential Oils"
          />
          <CategoryThumbnail
            linkurl="candles"
            className="candles"
            catName="Candles"
          />
          <CategoryThumbnail
            linkurl="crystal"
            className="crystalsrunes"
            catName="Crystals and Runes"
          />
          <CategoryThumbnail
            linkurl="tarot"
            className="tarot"
            catName="Tarot"
          />
          <CategoryThumbnail
            linkurl="books"
            className="books"
            catName="Books"
          />

          <CategoryThumbnail
            linkurl="altars"
            className="altar"
            catName="Altars and Tools"
          />
          <CategoryThumbnail
            linkurl="misc"
            className="misc"
            catName="Miscellaneous"
          />
        </div>
      </div>
    );
  }
}

export default ShopByCategory;
