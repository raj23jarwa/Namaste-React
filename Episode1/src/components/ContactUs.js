import React from "react"
import useOnlineStatus from "../utils/useOnlineStatus";
const ContactUs =() =>{
    const onlineStatus =useOnlineStatus();
    return (
        <div className="contact"> 
            <h1 className="text-3xl p-4 m-2"> Contact Us PAGE</h1>
            
            <h2>onlineStatus:{onlineStatus ? "✅" : "😡"}</h2>
            <form>
                <input type="text" placeholder="name" className="border border-black m-2 p-2"></input>
                <input type="text" placeholder="message" className="border border-black m-2 p-2"></input>
                <button className="border border-black m-2 p-2 bg-gray-200 rounded-lg">Submit</button>
            </form>
          
            </div>
    )
}
export default ContactUs;