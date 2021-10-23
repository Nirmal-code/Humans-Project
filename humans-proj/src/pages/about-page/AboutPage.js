import React from "react";
import Header from "../components/Header/Header";
import "./AboutPage.css";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
    return (
        <div id="about-page">
            <Header />
            <h1 style={{color:"black", align:"center"}}>This is the ABOUT PAGE</h1>
            <Footer />
        </div>
    )
}