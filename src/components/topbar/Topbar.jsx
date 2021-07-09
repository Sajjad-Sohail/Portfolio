import "./Topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Code Lightened</a>
                  
            </div>
           
            <div className="right">
               
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
                 
            </div>
            </div>
            </div>
        </div>
    )
}