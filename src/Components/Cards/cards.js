import React, { Component } from 'react';
import exampleData from '../../example.data';
import './cards.css'


const CardTags = (props) =>
    <div className="cardTags">
        <i src={props.tagIcon} className="material-icons">{props.tagIcon}</i>
        <span>{props.tag}</span>
    </div>;

const CardContent = (props)=>
    <div className="cardContent">
        <CardTags tagIcon={props.tagIcon} tag={props.tag}/>
        <span className="header">{props.header}</span>
        <span>{props.sub}</span>
        <p>{props.text}</p>
    </div>;

const Card = (props)=>
    <div className="card">
        <img alt="" src={props.img}/>
        <CardContent tagIcon={props.tagIcon} tag={props.tag} header={props.header} sub={props.sub} text={props.text}/>
    </div>;

const CardsContainer  = (props)=>
    <div className="cardsContainer">
        {
            props.cards.map((card,i)=>
                <Card key={i} header={card.header} tag={card.tag} tagIcon={card.tagIcon} img={card.img} sub={card.sub} text={card.text} />
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
