import React from 'react';
import "./home3.css";
import Header from "../components/Header/Header";
import photo from '../../../static/images/main3_rec.png';
import photo2 from '../../../static/images/main_page_3_picture.png';
import photo3 from '../../../static/images/mainpage2line.png';
import {useState, useEffect} from 'react';


var currentDate=new Date();
var cDay=String(currentDate.getDate())
var cMonth=String(currentDate.getMonth()+1)
var cYear=String(currentDate.getFullYear())
var date=cDay+"/"+cMonth+"/"+cYear


export default function Home_page_3() {
    const [currentDate, setDateState]=useState(new Date());
    useEffect(()=>{setInterval(()=>setDateState(new Date()),500);},[]);
    return (

        <div id="home3">
            <div id="main">
                <Header />
                <p id="Nominate">Nominate</p>
                <h2 id="Description3">Nominate an activist to be featured on our website</h2>
                <img src={photo} id="frame3" className="photo-for-mainpage" alt="Photo"/>
                <img src={photo2} id="main_picture3" className="photo" alt="Photo"/>
                <p id="time">{currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()}</p>
                <p id="date">RST:{date}</p>
                <div id="clockDisplay" class="container"></div>
                <a id="learnmore" href="/nominate-page/nominate/"><button id="lmbutton">Learn more</button></a>
                <p id="Nominatetag">Team</p>
                <div class="circle" id="threecircle1"></div>
                <div class="circle" id="threecircle2"></div>
                <div class="circle" id="threecircle3"></div>
                <div class="circle" id="threecircle4"></div>
                <div class="line" id="threeline1"></div>
                <div class="line" id="threeline2"></div>
                <div class="line" id="threeline3"></div>
                <img src={photo3} id="doublearrow" className="photo" alt="Photo"/>
                <button type="button" id="pause">▷</button>
                <button type="button" id="play"><p text-color="white">II</p></button>
            </div>
        </div>
        
    )
}