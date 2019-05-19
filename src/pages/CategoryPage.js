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
    
  }
  
  render() {
    console.log(this.props)
    let { categoryInfo } = this.props;
    let pageTitle = categoryInfo.category_name;
    // let pageDesc = categoryInfo.category_desc;

    return (
      <div className="CategoryPage">
        <h2 className="CategoryPage__title Title">
          {this.props.categoryInfo.category_name}
        </h2>
        {/* {bookList} */}
        <p>thing</p>
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
