import React, { Component } from 'react';
import './leftSideMenu.css';


const Logo = (props) =>
    <div className="logoContainer">
        <i className="material-icons">{props.logo}</i>
    </div>;

const ButtonContainer = (props) =>
    <div  className="buttonsContainer">
        {
            props.buttons.map((button,i)=>
                <Button  sideMenu={props.sideMenu} functionOnClick={props.functionOnClick} id={i} key={i} icon={button.icon} text={button.text}/>
            )

        }
    </div>;

const Button = (props) =>
        <a onClick={ props.functionOnClick } id={props.id} className={props.sideMenu.state.Active[props.id] ? "btn linkActive": "btn"} href="#">
            <i id={props.id} className="material-icons">{props.icon}</i>
                {props.text}
        </a>;


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
    addActiveClass(event) {
        let newActiveArray = [false,false,false];
        newActiveArray[event.target.id] = true;
        this.setState({
            Active:newActiveArray,
        });
    }

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