import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

class CategoryThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`ShopByCat__CategoryThumbnail ShopByCat__CategoryThumbnail--${
          this.props.className
        }`}
      >
        <Link to={`${this.props.linkurl}`} className="Link">
          <h3 className="CatLink">{this.props.catName}</h3>
        </Link>
      </div>
    );
  }
}

export default CategoryThumbnail;
