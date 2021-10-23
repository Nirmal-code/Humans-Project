import React from "react";
import './Footer.css';
import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <footer id="footer">
            <div id="wrapper">
                <div id="footer-text" style={{color:"white", fontWeight:"lighter", float:"left", marginLeft: "3vw", marginRight:"1vw"}}>
                    Let more people know about <span style={{fontWeight:"bolder"}}>Humans</span>
                </div>
                <ul id="webSocialList">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <li className="icon" id="share-icon" style={{visibility:"visible", marginRight:"1.5vw", marginTop:"1.0vh"}}>
                        <i className="fa fa-share-alt"></i>
                    </li>
                    <li className="icon" id="insta-icon" style={{left:"-1.5vw"}}>
                        <SocialIcon url="https://instagram.com" fgColor="black" bgColor="white" style={{ height: 60, width: 60 }}/>
                    </li>
                    <li className="icon" id="facebook-icon">
                        <SocialIcon url="https://facebook.com" fgColor="black" bgColor="white" style={{ height: 60, width: 60 }}/>
                    </li>
                    <li className="icon" id="twitter-icon">
                        <SocialIcon url="https://twitter.com" fgColor="black" bgColor="white" style={{ height: 60, width: 60 }}/>
                    </li>
                    <li className="icon" id="whatsapp-icon">
                        <SocialIcon url="https://whatsapp.com" fgColor="black" bgColor="white" style={{ height: 60, width: 60 }}/>
                    </li>
                </ul>
            </div>
        </footer>
    )
}