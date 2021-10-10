import React from "react";
import { Link } from "gatsby";
import handPhoto from '../../../../static/images/SFL-humans-logo.png';
import './Header.css'

export default function Header() {
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
                <li id="header-link">
                    <Link to="/home/Home/">HOME</Link>
                </li>
                <li id="header-link">
                    <Link to="/feature-page/feature-page/">FEATURE</Link>
                </li>
                <li id="header-link">
                    <Link to="/about-page/AboutPage/">ABOUT</Link>
                </li> 
                <li id="header-link">
                    <Link to="/nominate-page/nominate/">NOMINATE</Link>
                </li>
                <li id="header-link">
                    <Link to="/contact-us/contact-us/" activeStyle={{color:"red"}}>CONTACT US</Link>
                </li>
            </div>
        </div>
    )
}