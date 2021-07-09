import "./Contact.scss"
import {  useState } from "react"
export default function Contact() {
    const [message,setMessage] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            
            <div className="left">
                
                <form onSubmit={handleSubmit}>
                <h2>Drop me a message.</h2>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"/>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will replay ASAP :)</span>}
                </form>
            </div>

            <div className="right">
                <img src="assets/contact.png" alt="" />
            </div>
        </div>
    )
}