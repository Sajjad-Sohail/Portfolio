import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"
 

import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"

 
 
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
     
    <Intro></Intro>
   
    <Portfolio></Portfolio>
    <Projects></Projects>
  
    <Testimonials/>
    <Contact/>
 
 
    </div>   
    </div>
  );
}

export default App;
