import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from "./LeftSideMenu/leftSideMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
          <LeftSideMenu/>
      </div>
    );
  }
}

export default App;
