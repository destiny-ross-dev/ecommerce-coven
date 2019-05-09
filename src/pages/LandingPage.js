import React, { Component } from "react";
import ShopByCategory from "../components/ShopByCategory";
import Extras from "../components/Extras";
import { connect } from "react-redux";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Page Page__Landing">
        <ShopByCategory />
        <Extras />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    error: state.userReducer.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(LandingPage);
