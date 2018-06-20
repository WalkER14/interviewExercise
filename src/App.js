import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from "./Components/LeftSideMenu/leftSideMenu";
import Cards from "./Components/Cards/cards";
import TopOptions from "./Components/TopOptions/topOptions";

class App extends Component {
  render() {
    return (
      <div className="App">
          <LeftSideMenu/>
          <div className="contentContainer">
              <TopOptions/>
              <Cards/>
          </div>
      </div>
    );
  }
}

export default App;
