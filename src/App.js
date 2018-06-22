import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from "./Components/LeftSideMenu/leftSideMenu";
import Cards from "./Components/Cards/cards";
import TopOptions from "./Components/TopOptions/topOptions";
import exampleData from "./example.data";

class App extends Component {
    /*
    *render: Creates a div composed by a leftSideMenu component
    *and a div composed by a TopOptions and a Cards components
    * return {Object} App component
    */
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
