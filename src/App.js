import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from "./Components/LeftSideMenu/leftSideMenu";
import Cards from "./Components/Cards/cards";
import TopOptions from "./Components/TopOptions/topOptions";
import exampleData from "./example.data";

class App extends Component {
  render() {
    return (
      <div className="App">
          <LeftSideMenu leftOptions={exampleData.leftOptions}/>
          <div className="contentContainer">
              <TopOptions buttons={exampleData.topOptions.buttons}/>
              <Cards cards={exampleData.cards}/>
          </div>
      </div>
    );
  }
}

export default App;
