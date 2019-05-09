import React, { Component } from "react";
import { withRouter, NavLink as Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showNavCats: false };
  }
  render() {
    return (
      <div className="Header">
        <div className="Header__Bar">
          <Link className="Header__Logo Link" to="/">
            <h1 className="Header__Logo">COVEN</h1>
          </Link>
          <nav className="Header__Navigation">
            <p>About</p>
            <div onMouseEnter={() => this.setState({ showNavCats: true })}>
              Shop
              {this.state.showNavCats && (
                <div
                  className="CategoriesList"
                  onMouseOut={() => this.setState({ showNavCats: false })}
                >
                  <Link to="candles" className="Link">
                    Candles
                  </Link>
                  <Link to="herbal" className="Link">
                    <li>Herbs and Essential Oils</li>
                  </Link>
                  <Link to="tarot" className="Link">
                    <li>Tarot</li>
                  </Link>
                  <Link to="books" className="Link">
                    <li>Books</li>
                  </Link>
                  <Link to="crystals" className="Link">
                    <li>Crystals and Runes</li>
                  </Link>
                  <Link to="altars" className="Link">
                    <li>Altars and Tools</li>
                  </Link>
                  <Link to="misc" className="Link">
                    <li>Miscellaneous</li>
                  </Link>
                </div>
              )}
            </div>
            <p>Classes</p>
            <p>Calendar</p>
            <p>Blog</p>
            <p>Join the Coven</p>
            <p>Sign In</p>
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
