import React, { Component } from 'react';
import './topOptions.css'
import exampleData from '../example.data';


const TopComponent = (props) =>
    <div className="topComponent">
        <input className="" type="text" value={props.topComponent.state.searchQuery} onChange={props.topComponent.onChangeQuery} />
        {
            props.buttons.map((button,i) =>
                    <a className="queryButton" href="#">{button.text}</a>
            )
        }
    </div>;

class TopOptions extends Component {

    constructor(props)
    {
        super(props);
        this.state = {searchQuery: 'Discover',};

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