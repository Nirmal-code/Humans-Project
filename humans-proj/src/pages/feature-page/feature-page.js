import React from "react";
import Header from "../components/Header/Header";
import "./feature-page.css";
import Footer from "../components/Footer/Footer";

export default function FeaturePage() {
    return (
        <div id="feature-page">
            <Header />
            <h1 style={{color:"black", align:"center"}}>This is the ALL FEATURE PAGE</h1>
            <Footer />
        </div>
    )
}