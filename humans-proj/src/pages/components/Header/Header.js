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
                    <Link to="/nominate-page/nominate/">HOME</Link>
                </li>
                <li id="header-link">
                    <Link to="/nominate-page/nominate/">FEATURE</Link>
                </li>
                <li id="header-link">
                    <Link to="/nominate-page/nominate/">ABOUT</Link>
                </li> 
                <li id="header-link">
                    <Link to="/nominate-page/nominate/">NOMINATE</Link>
                </li>
                <li id="header-link">
                    <Link to="/nominate-page/nominate/" activeStyle={{color:"red"}}>CONTACT US</Link>
                </li>
            </div>
        </div>
    )
}