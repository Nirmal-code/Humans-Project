import React from "react";
import Header from "../components/Header/Header";
import "./currently-featured.css";
import Footer from "../components/Footer/Footer";

export default function CurrFeaturePage() {
    return (
        <div id="curr-feature-page">
            <Header />
            <h1 style={{color:"black", align:"center"}}>This is the CURRENTLY FEATURED PAGE</h1>
            <Footer />
        </div>
    )
}