import "./Intro.scss";
import {init} from 'ityped';
import { useEffect,useRef } from "react";
export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
         init(textRef.current,{
            
            backDelay:1500,
            backSpeed:60,
            typeSpeed:100,
            showCursor:true,
            strings:["Developer","Designer","Blogger","Tutor","FreeLancer"],
         });
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                     <h2>Hi There, my name is</h2>
                     <h1>Sajjad Sohail Mohammed</h1>
                     <h3>I am a <span ref={textRef}></span></h3>
                 </div>
                 <a href="#experience">
                     <img src="assets/singlearrow.png" alt=""></img>
                 </a>
            </div>
            <div className="right">
            <div className="imgContainer">
                <img src="assets/saaa.jpg" alt=""></img>
            </div>
            </div>
        </div>
    )
}