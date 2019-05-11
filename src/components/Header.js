import React, { Component } from "react";
import { withRouter, NavLink as Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showShoppingCategories: false };
  }
  handleHover = () => {
    this.setState({ showShoppingCategories: true });
  };
  handleLeave = () => {
    this.setState({ showShoppingCategories: false });
  };
  render() {
    return (
      <div className="Header">
        <div className="Header__Bar">
          <Link className="Header__Logo Link" to="/">
            <h1 className="Header__Logo">COVEN</h1>
          </Link>
          <nav className="Header__Navigation">
            <p className="Header__Navigation-Link">About</p>
            <div
              onMouseOver={this.handleHover}
              onMouseLeave={this.handleLeave}
              className="Header__Navigation-Div"
            >
              <p className="Header__Navigation-Link--Shop Header__Navigation-Link">
                Shop
              </p>
              {this.state.showShoppingCategories && (
                <div className="Header__Navigation-Categories--show">
                  <p className="Header__Navigation-Categories-Link">Candles</p>
                  <p className="Header__Navigation-Categories-Link">
                    Herbs and Oils
                  </p>
                  <p className="Header__Navigation-Categories-Link">
                    Crystals and Runes
                  </p>
                  <p className="Header__Navigation-Categories-Link">Tarot</p>
                  <p className="Header__Navigation-Categories-Link">Books</p>
                  <p className="Header__Navigation-Categories-Link">
                    Altars and Tools
                  </p>
                  <p className="Header__Navigation-Categories-Link">
                    Miscellaneous
                  </p>
                </div>
              )}
            </div>

            <p>Classes</p>
            <p>Calendar</p>
            <p>Blog</p>
            <p>Join the Coven</p>
            {this.props.user && this.props.user.first_name ? (
              <a className="navlink login" href={process.env.REACT_APP_LOGOUT}>
                Logout
              </a>
            ) : (
              <a className="navlink login" href={process.env.REACT_APP_LOGIN}>
                Login
              </a>
            )}
          </nav>
        </div>

        {this.props.location.pathname === "/" ? (
          <div className="Header__Hero">
            <div className="Header__Hero--text">
              <h2>Welcome to The Coven</h2>
              <p>
                It's more than a shop. It's a movement. Join a workshop, explore
                new crafts, or shop our products. There's something here for
                everyone.
              </p>
              <button>Shop our quality products</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Header);
