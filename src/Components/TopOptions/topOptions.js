import React, { Component } from 'react';
import './topOptions.css'
import exampleData from '../../example.data';


const TopComponent = (props) =>
    <div className="topComponent">
        <SearchComponent topComponent={props.topComponent}/>
        {
            props.buttons.map((button,i) =>
                    <button className="queryButton centerContent" key={i}>{button.text}</button>
            )
        }
    </div>;

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
    onChangeQuery(event){
        this.setState( {searchQuery: event.target.value} );
    }

    render(){
        return(
            <TopComponent buttons={exampleData.topOptions.buttons} topComponent={this}/>
        );
    }
}

export default TopOptions;