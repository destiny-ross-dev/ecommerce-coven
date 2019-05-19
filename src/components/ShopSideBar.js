import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { connect } from "react-router-dom";

class ShopSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let categoryLinks = this.props.categoryList.map((e, i) => {
      return (
        <Link to={`/shop?category=${e.category_url}`} key={e.category_id}>
          {e.category_name}
        </Link>
      );
    });
    return (
      <div className="Shop__Side-Bar">
        <div className="Shop__Category-Div">
          <h3 className="Shop__Category-Div-Header">CATEGORIES</h3>
          {categoryLinks}
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
