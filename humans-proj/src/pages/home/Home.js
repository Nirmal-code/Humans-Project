import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";

export default function Home() {
    return (
        <div id="home-page">
            <Header />
            <h1 style={{color:"black", align:"center"}}>This is the HOME PAGE</h1>
        </div>
    )
}