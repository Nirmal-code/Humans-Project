import React from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/about-us-claybanks.png';
import photo2 from '../../../static/images/Rectangle.png';

export default function FeaturePage() {
    return (
        <div id="feature-page">
            <Header />
            <div id="curve" class="card">
                <div class="card-blur">
                    <img src={photo} class="img-responsive" alt="Cards Image"/>
                    <div class="footer">
                        <div class="info">
                            <div class="name">Name Lastname</div>
                            <div class="job">Postition Title</div>
                            <div class="about">Lorem ipsum</div>
                        </div>
                        
                    </div>
                </div>
                {/* <div class="connections">
                    <div class="connection facebook"><div class="icon"></div></div>
                    <div class="connection twitter"><div class="icon"></div></div>
                    <div class="connection behance"><div class="icon"></div></div>
                </div> */}
            </div>
        
            <Footer />
        </div>
    )
}