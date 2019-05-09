import React, { Component } from "react";

import "./scss/main.scss";
import Header from "./components/Header";
import { Main } from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {Main}
      </div>
    );
  }
}

export default App;
