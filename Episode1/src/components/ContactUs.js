import React from "react"
import useOnlineStatus from "../utils/useOnlineStatus";
const ContactUs =() =>{
    const onlineStatus =useOnlineStatus();
    return (
        <div className="contact"> 
            <h1> Contact Us PAGE</h1>
            
            <h2>onlineStatus:{onlineStatus ? "✅" : "😡"}</h2>
          
            </div>
    )
}
export default ContactUs;