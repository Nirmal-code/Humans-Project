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
            <h1 id="main_text">Melissa Young</h1>
            <p><button id="all_medias"><img src={insta} id="insta_pic" className="photo-for-mainpage" alt="Photo"/>&nbsp;<img src={facebook} id="facebook_pic" className="photo-for-mainpage" alt="Photo"/><img src={twitter} id="twitter_pic" className="photo-for-mainpage" alt="Photo"/><img src={internet} id="internet_pic" className="photo-for-mainpage" alt="Photo"/></button></p>
            <p id='born'>Born: June 28, 1971 (age 50 years), Pretoria,</p>
            <p id="worth">Net worth: 180.5 billion USD (2021) Forbes</p>
            <p id="partner">Partner: Grimers(2018-)</p>
            <p id="LG">LGBTQ+ activist</p>
            <p id="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p id="para2">Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Sit amet tellus cras adipiscing enim. Id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet enim tortor at.</p>
            <Footer />
        </div>
    )
}