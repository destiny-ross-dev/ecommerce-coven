import React, { Component } from "react";
import ShopSideBar from "../components/ShopSideBar";
import ShopCarousel from "../components/ShopCarousel";
import { withRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import { connect } from "react-redux";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselNum: 0,
      query: "",
      queryValue: "",
      categoryInfo: {}
    };
  }
  onNumSelect = num => {
    this.setState({ carouselNum: num });
  };

  handleCarouselRotation = () => {
    if (this.state.carouselNum === 1) {
      this.setState({ carouselNum: 0 });
    } else {
      this.setState({
        carouselNum: this.state.carouselNum + 1
      });
    }
  };
  componentDidMount() {
    this.loadPageData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.loadPageData();
    }
  }
  loadPageData = () => {
    this.getSearchQuery();
  };

  //CAROUSEL ACTIONS
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
          <div className="Shop__Container">
            {this.state.query === "category" && (
              <CategoryPage
                categoryUrl={this.state.queryValue}
                categoryInfo={this.state.categoryInfo}
              />
            )}
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
    {}
  )(ShopPage)
);
