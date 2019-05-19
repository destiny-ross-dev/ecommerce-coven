import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoryInfo } from "../ducks/itemsReducer";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.loadPageData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryUrl !== this.props.categoryUrl) {
      this.loadPageData();
    }
  }

  loadPageData = () => {
    this.props.getCategoryInfo(this.props.categoryUrl);
    // let catItems = await this.props.getCatItems(this.props.categoryUrl);
  };

  render() {
    let { category_name, category_description } = this.props.categoryInfo;
    return (
      <div className="CategoryPage">
        <h2 className="CategoryPage__title Title">{category_name}</h2>
        <p>{category_description}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryInfo: state.itemsReducer.categoryInfo,
    loading: state.itemsReducer.isLoading,
    error: state.itemsReducer.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCategoryInfo }
  )(CategoryPage)
);
