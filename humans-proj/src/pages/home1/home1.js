import React from 'react';
import "./home1.css";
import Header from "../components/Header/Header";
import photo from '../../../static/images/main_rec.png';
import photo2 from '../../../static/images/main_page_1_picture.png';
import photo3 from '../../../static/images/mainpage2line.png';
import {useState, useEffect} from 'react';



var currentDate=new Date();
var cDay=String(currentDate.getDate())
var cMonth=String(currentDate.getMonth()+1)
var cYear=String(currentDate.getFullYear())
var date=cDay+"/"+cMonth+"/"+cYear

export default function Home_page_1() {
    const [currentDate, setDateState]=useState(new Date());
    useEffect(()=>{setInterval(()=>setDateState(new Date()),500);},[]);

    return (

        <div id="home1">
            <div id="main">
                <Header />
                <p id="Featured">Featured</p>
                <h2 id="Description2">Discover this week's featured human rights activist</h2>
                <img src={photo} id="frame2" className="photo-for-mainpage" alt="Photo"/>
                <img src={photo2} id="main_picture2" className="photo" alt="Photo"/>
                <p id="time">{currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()}</p>
                <p id="date">RST:{date}</p>
                <div id="clockDisplay" class="container"></div>
                <a id="learnmore" href="/feature-page/feature-page/"><button id="lmbutton">Learn more</button></a>
                <p id="Featuredtag">Featured</p>
                <div class="circle" id="onecircle1"></div>
                <div class="circle" id="onecircle2"></div>
                <div class="circle" id="onecircle3"></div>
                <div class="circle" id="onecircle4"></div>
                <div class="line" id="oneline1"></div>
                <div class="line" id="oneline2"></div>
                <div class="line" id="oneline3"></div>
                <img src={photo3} id="doublearrow" className="photo" alt="Photo"/>
                <button type="button" id="pause">▷</button>
                <button type="button" id="play"><p text-color="white">II</p></button>
            </div>
        </div>
        
    )
}