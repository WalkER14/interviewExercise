import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from "./LeftSideMenu/leftSideMenu";
import Cards from "./Cards/cards";
import TopOptions from "./TopOptions/topOptions";

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
