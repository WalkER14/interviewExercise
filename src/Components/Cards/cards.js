import React, { Component } from 'react';
import './cards.css'


/*
*CardTags: Creates a CardTag component
*@param: {Object} tagIcon the icon of the card
*@param: {Object} tag the tag of the card
*returns: {Object} A CardTag component
*/
const CardTags = (props) =>
    <div className="cardTags">
        <i className="material-icons">{props.tagIcon}</i>
        <span>{props.tag}</span>
    </div>;
/*
*CardContent: Creates a CardContent component
*@param: {Object} tagIcon the icon of the card
*@param: {Object} tag the tag of the card
*@param: {Object} header the header of the card
*@param: {Object} sub the subtitle under the header
*@param: {Object} text the text in the bottom of the card
*returns: {Object} A CardContent component
*/
const CardContent = (props)=>
    <div className="cardContent">
        <CardTags tagIcon={props.tagIcon} tag={props.tag}/>
        <span className="header">{props.header}</span>
        <span>{props.sub}</span>
        <p>{props.text}</p>
    </div>;

/*
*Card: Creates a Card component composed by an image and a CardContent component
*@param: {Object} img the image to show in the card
*@param: {Object} tagIcon the icon of the card
*@param: {Object} tag the tag of the card
*@param: {Object} header the header of the card
*@param: {Object} sub the subtitle under the header
*@param: {Object} text the text in the bottom of the card
*returns: {Object} A Card component with an img and a CardContent
*/
const Card = (props)=>
    <div className="card">
        <div className="cardImgContainer">
            <img alt="" src={props.img}/>
        </div>
        <CardContent tagIcon={props.tagIcon} tag={props.tag} header={props.header} sub={props.sub} text={props.text}/>
    </div>;

/*
*CardsContainer: Creates a CardsContainer component composed for many Card components from the results of mapping
*each element of an array of cards
*@param: {Array} cards the array of cards
*returns: {Object} A CardsContainer component
*/
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
            <CardsContainer cards={this.props.cards}/>
        );
    }
}

export default Cards;
