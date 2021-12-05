import React from "react";
import Header from "../components/Header/Header";
import "./AboutPage.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/about-us-claybanks.png';
import photo2 from '../../../static/images/Rectangle.png';

export default function AboutPage() {
    return (
        <div id="about-page">
            <Header />
            <section className= "image-section">
                <button className = "arrow-button"><h1 className = "small-arrow">&lt;</h1></button>
                <button className = "arrow-button"><h1 className = "big-arrow">&lt;</h1></button>

                <div className = "image-overlap">
                <img className="changeable-image" src={photo} alt="" />
                <img className="box" src={photo2} alt="" />
                </div>
                <button className = "arrow-button"><h1 className = "big-arrow">&gt;</h1></button>
                <button className = "arrow-button"><h1 className = "small-arrow">&gt;</h1></button>
            </section>

            <section className = "questions">
                <div className= "first-row">
                    <div className ="faq">
                        <h2>What we do?</h2>
                        <ul>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                        </ul>
                    </div>
                    <div className ="faq">
                        <h2>More About Software For Love</h2>
                        <ul>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                            <li>We help spread the word for good</li>
                            <li>Created to spread awareness</li>
                        </ul>
                    </div>
                </div>
                <div className= "second-row">
                <div className ="faq">
                    <h2>Why we do it?</h2>
                    <ul>
                        <li>We help spread the word for good</li>
                        <li>Created to spread awareness</li>
                        <li>We help spread the word for good</li>
                        <li>Created to spread awareness</li>
                    </ul>
                </div>
                <div className ="faq">
                    <h2>Why we do it?</h2>
                    <ul>
                        <li>We help spread the word for good</li>
                        <li>Created to spread awareness</li>
                        <li>We help spread the word for good</li>
                        <li>Created to spread awareness</li>
                    </ul>
                </div>
                </div>

            </section>
            <Footer />
        </div>

    )
}