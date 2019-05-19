import React, { Component } from "react";
import { getUser } from "./ducks/userReducer";
import { connect } from "react-redux";
import { getCategoryList } from "./ducks/itemsReducer";
import "./scss/main.scss";
import Header from "./components/Header";
import { Main } from "./routes";

class App extends Component {
  async componentDidMount() {
    try {
      let catList = await this.props.getCategoryList();
    } catch (error) {
      // console.log(error);
    }
    if (!this.props.user.authid) {
      let user = await this.props.getUser();
      // console.log("user", user);
    } else {
      // console.log("user existed:", this.props.user);
    }
  }
  render() {
    return (
      <div className="App">
        <Header user={this.props.user} />
        {Main}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryList: state.itemsReducer.categoryList,
    user: state.userReducer.user,
    error: state.userReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getUser, getCategoryList }
)(App);
