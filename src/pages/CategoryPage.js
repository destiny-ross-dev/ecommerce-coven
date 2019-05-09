import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoryList } from "../ducks/itemsReducer";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let str = this.props.location.pathname.slice(1);
    this.props.getCategoryList(str);
  }
  render() {
    let pageTitle;
    if (this.props.location.pathname) {
      let str = this.props.location.pathname.slice(1);
      pageTitle = str;
    } else {
      pageTitle = "Unknown";
    }
    console.log(this.props);

    let bookList = this.props.categoryList.map((book, index) => {
      return <div key={index}>{book.book_name}</div>;
    });
    return (
      <div className="CategoryPage">
        <h2 className="CategoryPage__title Title">{pageTitle}</h2>
        {bookList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryList: state.itemsReducer.categoryList,
    loading: state.itemsReducer.isLoading,
    error: state.itemsReducer.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCategoryList }
  )(CategoryPage)
);
