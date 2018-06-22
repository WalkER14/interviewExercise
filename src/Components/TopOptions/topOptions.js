import React, { Component } from 'react';
import './topOptions.css'


/*
*TopComponent: Creates a TopComponent with a searchComponent and two buttons
*@param: {Object} text the text to display in the buttons
*returns: {Object} A SearchComponent component
*/
const TopComponent = (props) =>
    <div className="topComponent">
        <SearchComponent topComponent={props.topComponent}/>
        {
            props.buttons.map((button,i) =>
                    <button className="queryButton centerContent" key={i}>{button.text}</button>
            )
        }
    </div>;
/*
*SearchComponent: Creates a SearchComponent with a searchBar a select and a button when the value of
 the search bar changes the function onChangeQuery is triggered
*@param: {Object} searchQuery the value to display in the search bar and the keyword for the search
*@param: {Function} onChangeQuery the function to execute when the value of the searchBar changes
*returns: {Object} A SearchComponent component
*/
const SearchComponent = (props) =>
    <div className="searchBar">
        <select>
            <option value="all" defaultValue={true} >All</option>
            <option value="some">Some</option>
            <option value="few">few</option>
        </select>
        <input className="" type="text" value={props.topComponent.state.searchQuery} onChange={props.topComponent.onChangeQuery} />
        <button className="searchButton centerContent" type="submit"><i className="fa fa-search"/></button>
    </div>;

class TopOptions extends Component {

    constructor(props)
    {
        super(props);
        this.state = { searchQuery: 'Discover'};
        this.onChangeQuery = this.onChangeQuery.bind(this)
    }

    /*
    *onChangeQuery: When the value of the SearchComponent
    *changes set the value of the searchQuery in the state
    *to the new value of the SearchComponent
    *@param: {Object} event the event triggered
    */
    onChangeQuery(event){
        this.setState( {searchQuery: event.target.value} );
    }

    render(){
        return(
            <TopComponent buttons={this.props.buttons} topComponent={this}/>
        );
    }
}

export default TopOptions;