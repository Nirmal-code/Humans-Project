import React from "react";
import { Link } from "gatsby";
import handPhoto from '../../../../static/images/SFL-humans-logo.png';
import './Header.css'

export default function Header() {
    const activeLink = {
        borderBottom: "2px solid #63ABFF",
        paddingBottom: "1vh"
    }

    return (
        <navbar id="header">
            <img
                id="hand-image"
                src={handPhoto}
                alt="hand-holding-SFL"
                style={{ marginLeft: "3vw" }}
            />

            <h1 style={{ float: "left" }}>HUMANS</h1>

            <div id="links-bar">
                <li id="header-link" style={{ display: "inline" }}>
                    <Link to="/home/Home/" id="header-link" style={{ marginLeft: "9vw" }} activeStyle={activeLink}>HOME</Link>
                </li>

                <div id="feature-dropdown-menu">
                    FEATURED<div style={{display:"inline"}}><i class="arrow"></i></div>
                    <li><Link to="/feature-page/currently-featured/" id="dropdown-link" style={{paddingTop:"1.5vh"}}>CURRENTLY FEATURED</Link></li>
                    <li><Link to="/feature-page/feature-page/" id="dropdown-link" style={{ marginTop: "1.5vh" }}>ALL FEATURED</Link></li>
                </div>

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
        </navbar>
    )
}