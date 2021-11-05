import React from 'react';
import "./home4.css";
import Header from "../components/Header/Header";
import photo from '../../../static/images/main4_rec.png';
import photo2 from '../../../static/images/main_page_3_picture.png';
import photo3 from '../../../static/images/mainpage2line.png';
import {useState, useEffect} from 'react';


var currentDate=new Date();
var cDay=String(currentDate.getDate())
var cMonth=String(currentDate.getMonth()+1)
var cYear=String(currentDate.getFullYear())
var date=cDay+"/"+cMonth+"/"+cYear




export default function Home_page_4() {
    const [currentDate, setDateState]=useState(new Date());
    useEffect(()=>{setInterval(()=>setDateState(new Date()),500);},[]);
    return (

        <div id="home4">
            <div id="main">
                <Header />
                <p id="old_entries">Old Entries</p>
                <h2 id="Description4">Look at the list of every previously featured activist</h2>
                <img src={photo} id="frame4" className="photo-for-mainpage" alt="Photo"/>
                <img src={photo2} id="main_picture4" className="photo" alt="Photo"/>
                <p id="time">{currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()}</p>
                <p id="date">RST:{date}</p>
                <div id="clockDisplay" class="container"></div>
                <a id="learnmore" href="/feature-page/feature-page/"><button id="lmbutton">Learn more</button></a>
                <p id="old_entries_tag">Old Entries</p>
                <div class="circle" id="fourcircle1"></div>
                <div class="circle" id="fourcircle2"></div>
                <div class="circle" id="fourcircle3"></div>
                <div class="circle" id="fourcircle4"></div>
                <div class="line" id="fourline1"></div>
                <div class="line" id="fourline2"></div>
                <div class="line" id="fourline3"></div>
                <img src={photo3} id="doublearrow" className="photo" alt="Photo"/>
                <button type="button" id="pause">▷</button>
                <button type="button" id="play"><p text-color="white">II</p></button>
            </div>
        </div>
        
    )
}