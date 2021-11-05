import React from 'react';
import "./home2.css";
import Header from "../components/Header/Header";
import photo from '../../../static/images/main2_rec.png';
import photo2 from '../../../static/images/main_page_2_picture.png';
import photo3 from '../../../static/images/mainpage2line.png';
import {useState, useEffect} from 'react';


var currentDate=new Date();
var cDay=String(currentDate.getDate())
var cMonth=String(currentDate.getMonth()+1)
var cYear=String(currentDate.getFullYear())
var date=cDay+"/"+cMonth+"/"+cYear




export default function Home_page_2() {
    const [currentDate, setDateState]=useState(new Date());
    useEffect(()=>{setInterval(()=>setDateState(new Date()),500);},[]);
    return (

        <div id="home2">
            <div id="main">
                <Header />
                <p id="About">About</p>
                <h2 id="Description">Learn about the message and the goal of this project</h2>
                <img src={photo} id="frame" className="photo-for-mainpage" alt="Photo"/>
                <img src={photo2} id="main_picture" className="photo" alt="Photo"/>
                <p id="date">RST:{date}</p>
                <p id="time">{currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()}</p>
                <div id="clockDisplay" class="container"></div>
                <a id="learnmore" href="/about-page/AboutPage/"><button id="lmbutton">Learn more</button></a>
                <p id="Aboutag">About</p>
                <div class="circle" id="circle1"></div>
                <div class="line" id="line1"></div>
                <div class="circle" id="circle2"></div>
                <div class="line" id="line2"></div>
                <div class="circle" id="circle3"></div>
                <div class="line" id="line3"></div>
                <div class="circle" id="circle4"></div>
                <img src={photo3} id="doublearrow" className="photo" alt="Photo"/>
                <button type="button" id="pause">▷</button>
                <button type="button" id="play"><p text-color="white">II</p></button>
            </div>
        </div>
        
    )
}