import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from "./LeftSideMenu/leftSideMenu";
import Cards from "./Cards/cards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftSideMenu/>
        <Cards/>
      </div>
    );
  }
}

export default App;
