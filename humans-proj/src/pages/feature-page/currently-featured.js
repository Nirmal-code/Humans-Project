import React from "react";
import Header from "../components/Header/Header";
import "./currently-featured.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/cf_picture.png';
import insta from '../../../static/images/insta_icon.png';
import facebook from '../../../static/images/facebook_icon.jpg';
import twitter from '../../../static/images/twitter_icon.png';
import internet from '../../../static/images/internet_icon.png';

export default function CurrFeaturePage() {
    return (
        <div id="curr-feature-page">
            <Header />
            <p><button id="Back_btn">BACK</button></p>
            <div class="square" id="square1"></div>
            <div class="square" id="square2"></div>
            <img src={photo} id="main_pic" className="photo-for-mainpage" alt="Photo"/>
            <h1 id="main_text">Name Here</h1>
            <p><button id="all_medias"><img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Photo"/>&nbsp;<img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Photo"/><img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Photo"/><img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Photo"/></button></p>
            <p id='born'>Key Fact 1 Here: Dolor sit amet</p>
            <p id="worth">Key Fact 2 Here: Adipiscing elit</p>
            <p id="partner">Key Fact 3 Here: Eiusmod tempor incididunt ut labore et</p>
            <p id="LG">Type of Activist Here</p>
            <p id="para1">Full Description Here ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p id="para2">Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at.</p>
            <Footer />
        </div>
    )
}