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
            <div className="card-wrapper">
                <div className="card">
                    <h1>Name Lastname</h1>
                    <div className="picture">
                        <img
                        src={photo2}
                        alt="profile-picture"
                        class="profile-img"
                        ></img>
                    </div>
                    <div className="info">
                        <h2>Lorem ispum</h2>

                    </div>
                </div>

                <div className="card">
                    <h1>Name Lastname</h1>
                    <div className="picture">
                        <img
                        src={photo2}
                        alt="profile-picture"
                        class="profile-img"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <h1>Name Lastname</h1>
                    <div className="picture">
                        <img
                        src={photo}
                        alt="profile-picture"
                        class="profile-img"
                        ></img>
                    </div>
                </div>

                <div className="card">
                    <h1>Name Lastname</h1>
                    <div className="picture">
                        <img
                        src={photo}
                        alt="profile-picture"
                        class="profile-img"
                        ></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}