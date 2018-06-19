import React, { Component } from 'react';
import './leftSideMenu.css';
import exampleData from '../example.data';


const Logo = (props) =>
    <div className="logoContainer">
        <img src={props.logo}/>
    </div>;

const ButtonContainer = (props) =>
    <div className="buttonsContainer">
        {
            props.buttons.map((button,i)=>
                <Button key={i} icon={button.icon} text={button.text}/>
            )

        }
    </div>;

const Button = (props) =>
    <button className="btn">
        <i className={props.icon}/>
        {props.text}
    </button>;

const LinkSectionContainer = (props) =>
    <div className="linkSectionContainer">
        {
            props.linksSections.map((section,i) =>
            <LinkSection key={i} links={section}/>
            )
        }
    </div>;

const LinkSection = (props) =>
   <div className="linksSection">
       {
           props.links.map((link,i) =>
               <Link key={i} text={link}/>
           )
       }
   </div>;

const Link = (props) =>
    <a className="links">{props.text}</a>;

const AboutUs = (props) =>
    <div className="aboutUs">
        <strong>{props.title}</strong>
        <span>{props.text}</span>
    </div>;

class LeftSideMenu extends Component {

    render() {
        return (
            <div className="leftSideMenu">
                <Logo logo={exampleData.logo}/>
                <ButtonContainer buttons={exampleData.menuButtons}/>
                <LinkSectionContainer linksSections={exampleData.linksSections}/>
                <AboutUs title={exampleData.aboutUs.title} text={exampleData.aboutUs.text}/>
            </div>
        );
    }
}

export default LeftSideMenu;