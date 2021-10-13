import React from "react";
import { Link } from "gatsby";
import handPhoto from '../../../../static/images/SFL-humans-logo.png';
import './Header.css'

export default function Header() {
    const activeLink = {
        borderBottom:"2px solid #63ABFF",
        paddingBottom:"1vh"
    }
    
    return (
        <div id="header">
            <img 
                id="hand-image"
                src={handPhoto}
                alt="hand-holding-SFL"
                style={{marginLeft:"3vw"}}
            />

            <h1 style={{float: "left"}}>HUMANS</h1>

            <div id="links-bar">
                <li id="header-list" style={{display:"inline"}}>
                    <Link to="/home/Home/" id="header-link" style={{marginLeft:"14vw"}} activeStyle={activeLink}>HOME</Link>
                </li>
                <li id="header-link">
                    <Link to="/feature-page/feature-page/" id="header-link" activeStyle={activeLink}>FEATURE</Link>
                </li>
                <li id="header-link">
                    <Link to="/about-page/AboutPage/" id="header-link" activeStyle={activeLink}>ABOUT</Link>
                </li> 
                <li id="header-link">
                    <Link to="/nominate-page/nominate/" id="header-link" activeStyle={activeLink}>NOMINATE</Link>
                </li>
                <li id="header-link">
                    <Link to="/contact-us/contact-us/" id="header-link" activeStyle={activeLink}>CONTACT US</Link>
                </li>
            </div>
        </div>
    )
}