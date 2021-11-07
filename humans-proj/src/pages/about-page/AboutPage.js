import React from "react";
import Header from "../components/Header/Header";
import "./AboutPage.css";
import Footer from "../components/Footer/Footer";
import photo from '../../../static/images/about-us-claybanks.png';
import photo2 from '../../../static/images/Rectangle.png';
import {ScrollView} from "react-native-web";

export default function AboutPage() {
    return (
        <div id="about-page">
            <ScrollView>
            <Header />
            <section className= "image-section">
                <button><h1>&lt;</h1></button>
                <img className="changeable-image" src={photo} alt="" />
                <img className="changeable-image" src={photo2} alt="" />
                <button><h1>&gt;</h1></button>
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
            </ScrollView>
        </div>

    )
}