import React from "react";
import './Footer.css';
import { SocialIcon } from "react-social-icons";
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon
} from "react-share";

export default function Footer() {

    const shareUrl = "https://www.softwareforlove.com/team"
    const quote = "Take a look at some Humans.\n"
    const hashtag = "#softwareforlove #humans\n\n"

    return (
        <footer id="footer">
            <div id="wrapper">
                <div id="footer-text" style={{ color: "white", fontWeight: "lighter", float: "left", marginLeft: "3vw", marginRight: "1vw"}}>
                    Let more people know about <span style={{ fontWeight: "bolder" }}>Humans</span>
                </div>
                <ul id="webSocialList">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <li className="list-icon" id="share-icon" style={{ visibility: "visible", paddingTop: "1.2vh" }}>
                        <i className="fa fa-share-alt"></i>
                    </li>
                    <li className="list-icon" id="facebook-icon">
                        <FacebookShareButton id="button-icon" url={shareUrl} quote={quote} hashtag={hashtag} windowHeight={800} windowWidth={1200}>
                            <FacebookIcon id="icon" round={true} size={50} iconFillColor="black" bgStyle={{ fill: "white" }} />
                        </FacebookShareButton>
                    </li>
                    <li className="list-icon" id="twitter-icon">
                        <TwitterShareButton id="button-icon" url={shareUrl} title={quote} hashtag={hashtag} windowHeight={800} windowWidth={1200}>
                            <TwitterIcon id="icon" round={true} size={50} iconFillColor="black" bgStyle={{ fill: "white" }} />
                        </TwitterShareButton>
                    </li>
                    <li className="list-icon" id="whatsapp-icon">
                        <WhatsappShareButton id="button-icon" url={shareUrl} title={quote + hashtag} separator=" " windowHeight={800} windowWidth={1200}>
                            <WhatsappIcon id="icon" round={true} size={50} iconFillColor="black" bgStyle={{ fill: "white" }} />
                        </WhatsappShareButton>
                    </li>
                </ul>
            </div>
        </footer>
    )
}