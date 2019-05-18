import React, { Component } from "react";
import ShopSideBar from "../components/ShopSideBar";
import ShopCarousel from "../components/ShopCarousel";
import { withRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import { connect } from "react-redux";
import { getCategoryList } from "../ducks/itemsReducer";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { carouselNum: 0, query: "", queryValue: "" };
  }
  onNumSelect = num => {
    this.setState({ carouselNum: num });
  };

  handleCarouselRotation = () => {
    if (this.state.carouselNum === 1) {
      this.setState({ carouselNum: 0 });
    } else {
      this.setState(
        {
          carouselNum: this.state.carouselNum + 1
        },
        () => this.setState({ changing: false })
      );
    }
  };
  componentDidMount() {
    this.props.getCategoryList();
    this.getSearchQuery();
  }
  startCarousel = () => {
    this.setState({
      timerId: setInterval(this.handleCarouselRotation, 3000)
    });
  };
  stopCarousel = () => {
    clearInterval(this.state.timerId);
  };

  getSearchQuery = () => {
    let querystring = this.props.location.search.slice(1);
    let queryArray = querystring.split("=");
    let queryKey = queryArray[0];
    let queryValue = queryArray[1];
    this.setState({ query: queryKey, queryValue: queryValue });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Shop Page">
        <ShopSideBar categoryList={this.props.categoryList} />
        {this.props.location.search === "" ? (
          <div className={"Shop__Carousel-Container"}>
            <ShopCarousel
              startCarousel={this.startCarousel}
              stopCarousel={this.stopCarousel}
              carouselNum={this.state.carouselNum}
              onNumSelect={this.onNumSelect}
            />
          </div>
        ) : (
          <div>
            <CategoryPage categoryName={this.state.queryValue} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryList: state.itemsReducer.categoryList
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCategoryList }
  )(ShopPage)
);
