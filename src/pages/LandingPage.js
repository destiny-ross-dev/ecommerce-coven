import React, { Component } from "react";
import ShopByCategory from "../components/ShopByCategory";
import Extras from "../components/Extras";
import { connect } from "react-redux";

class LandingPage extends Component {
  state = {
    scrollY: 0
  };
  logScroll = event => {
    this.setState({ scrollY: window.scrollY });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.logScroll);
  }

  render() {
    let { scrollY } = this.state;
    let browserHeight = window.innerHeight;
    console.log(browserHeight, scrollY);
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
