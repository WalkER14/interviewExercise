import React, { Component } from 'react';
import exampleData from '../example.data';;


const CardTags = (props) =>
    <div className="tags">
        <i src={props.tagIcon}/><span>{props.tag}</span>
    </div>;

const CardContent = (props)=>
    <div className="cardContent">
        <CardTags tagIcon={props.tagIcon}/>
        <h2>{props.header}</h2>
        <span>{props.sub}</span>
        <p>{props.text}</p>
    </div>;

const Card = (props)=>
    <div className="card">
        <img alt="" src={props.img}/>
        <CardContent tagIcon={props.tagIcon} header={props.header} sub={props.sub} text={props.text}/>
    </div>;

const CardsContainer  = (props)=>
    <div className="cardsContainer">
        {
            props.cards.map((card,i)=>
                <Card key={i} header={card.header} img={card.img} sub={card.sub} text={card.text} />
        )}
    </div>;

class Cards extends Component {

    render() {
        return (
            <CardsContainer cards={exampleData.cards}/>
        );
    }
}

export default Cards;
