import "./Projects.scss"
import {  useState } from "react"
export default function Projects() {
    const [currentSlider,setCurrentSlide] = useState(0);
    const data =[
        {
            id:"1",
            icon:"./assets/webprojects.png",
            title:"Web Application",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, at dolore esse asperiores modi perferendis tempora quos nulla ut, repellat temporibus. Modi nam sint deleniti!",
            img:"./assets/web/web1.jpg"
        },
        {
            id:"2",
            icon:"./assets/designproject.webp",
            title:"Branding",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, at dolore esse asperiores modi perferendis tempora quos nulla ut, repellat temporibus. Modi nam sint deleniti!",
            img:"./assets/design/design1.gif"
        },
        {
            id:"3",
            icon:"./assets/mobileprojects.png",
            title:"Mobile Application",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, at dolore esse asperiores modi perferendis tempora quos nulla ut, repellat temporibus. Modi nam sint deleniti!",
            img:"./assets/mobile/mobile1.jpg"
        },
    ];
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlider > 0 ? currentSlider-1 :2) : 
        setCurrentSlide(currentSlider<data.length -1 ? currentSlider+1 : 0);
    }
    return (
        <div className="projects" id="projects">
            <div className="slider" style={{transform:`translateX(-${currentSlider *100}vw)`}}>
              { data.map(d=>(

             
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                 
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                    <span>View</span>
                            </div>
                        </div>
                        <div className="right">
                        <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div> ))}
            </div>
            <img src="assets/leftarrow.png" class="arrow left" alt="" onClick={()=>handleClick("left")}></img>
            <img src="assets/leftarrow.png" class="arrow right" alt="" onClick={()=>handleClick("right")}></img>
        </div>
    )
}
