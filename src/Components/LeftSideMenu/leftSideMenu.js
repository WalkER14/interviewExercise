import React, { Component } from 'react';
import './leftSideMenu.css';


/*
*Logo: Creates a Logo component
*@param: {Object} logo the logo of the company
*returns: {Object} A Logo component
*/
const Logo = (props) =>
    <div className="logoContainer">
        <i className="material-icons">{props.logo}</i>
    </div>;

/*
*Button: Creates a Button component composed
*by a link with and icon and a text when the component
* is clicked the function addActiveClass is triggered
*@param: {Object} id the id of the component
*@param: {Function} functionOnClick the function
*to execute when the click event is triggered
*@param: {Object} Active[] the array of linkActives
*returns: {Object} icon the icon to display
*@param: {Object} sideMenu the sideMenu in order to get the state
*@param: {Object} text the text of the component
*return: A Button Component
*/
const Button = (props) =>
    <a onClick={ props.functionOnClick } id={props.id} className={props.sideMenu.state.Active[props.id] ? "btn linkActive": "btn"} href="#">
        <i id={props.id} className="material-icons">{props.icon}</i>
        {props.text}
    </a>;

/*
*ButtonContainer: Creates a ButtonContainer component
*composed by many Button component from the result of mapping
*an array of buttons
*the function addActiveClass is triggered
*@param: {Object} buttons the array of buttons
*@param: {Function} functionOnClick the function to
*execute when the click event is triggered
*@param: {Object} sideMenu the sideMenu in order to get the state
*return: A ButtonContainer Component
*/
const ButtonContainer = (props) =>
    <div  className="buttonsContainer">
        {
            props.buttons.map((button,i)=>
                <Button  sideMenu={props.sideMenu} functionOnClick={props.functionOnClick} id={i} key={i} icon={button.icon} text={button.text}/>
            )

        }
    </div>;

/*
*LinkSection: Creates a LinkSection component composed by many
*Links component from the result of mapping an array of Links
*@param: {Object} links the array of links
*return: A LinkSection Component
*/
const LinkSection = (props) =>
    <div className="linksSection">
        {
            props.links.map((link,i) =>
                <Link key={i} text={link}/>
            )
        }
    </div>;

/*
*LinkSectionContainer: Creates a LinkSectionContainer
*component composed by many LinkSections component
*from the result of mapping an array of LinkSections
*@param: {Object} linkSection the array of LinkSection
*return: A LinkSectionContainer Component
*/
const LinkSectionContainer = (props) =>
    <div className="linkSectionContainer">
        {
            props.linksSections.map((section,i) =>
            <LinkSection key={i} links={section}/>
            )
        }
    </div>;

/*
*Link: Creates a Link component
*@param: {Object} text the text to display
*return: A Link Component
*/
const Link = (props) =>
    <a className="links">{props.text}</a>;

/*
*AboutUs: Creates an AboutUs component made by
*two texts
*@param: {Object} copyright the symbol of copyrights
*@param: {Object} title the year
*@param: {Object} text the tittle of the company
*return: A LinkSectionContainer Component
*/
const AboutUs = (props) =>
    <div className="aboutUs">
        <span id="copyrightText"><span id="copyright">{props.copyright}</span>{props.title}</span>
        <span>{props.text}</span>
    </div>;

class LeftSideMenu extends Component {
    constructor(props)
    {
        super(props);
        this.state = { Active: [false,true,false] };
        this.addActiveClass= this.addActiveClass.bind(this);
    }

    /*
    *addActiveClass: When the a Button component is clicked
    *this function set all the buttons to inactive and then
    *set the clicked button to active.
    *@param: {Object} event the event triggered
    */
    addActiveClass(event) {
        let newActiveArray = [false,false,false];
        newActiveArray[event.target.id] = true;
        this.setState({
            Active:newActiveArray,
        });
    }
    /*
    *render: Creates a div composed by a Logo component
    *a ButtonContainer component and a div composed by a
    *LinkSectionContainer and an AboutUs container
    * return {Object} LeftSideMenu component
    */
    render() {
        return (
            <div className="leftSideMenu">
                <Logo logo={this.props.leftOptions.logo}/>
                <ButtonContainer sideMenu={this} functionOnClick={this.addActiveClass} buttons={this.props.leftOptions.menuButtons}/>
                <div className="footerContainer">
                    <LinkSectionContainer linksSections={this.props.leftOptions.linksSections}/>
                    <AboutUs copyright={this.props.leftOptions.aboutUs.copyright} title={this.props.leftOptions.aboutUs.title} text={this.props.leftOptions.aboutUs.text}/>
                </div>
            </div>
        );
    }
}

export default LeftSideMenu;