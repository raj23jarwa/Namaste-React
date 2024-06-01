import React from "react"
import User from "./User";
import UserClass from "./UserClass";
const AboutUs = () => {
    return (
        <div className="aboutUs">
            <h1> About us component </h1>
            <User name={"Rajkumar singh (Function)"} location={"Mohindergarh"}/>
            <UserClass name="Rajkumar singh (Class)" location={"Jammu Kashmir"}/>
        </div>
    )
}
export default AboutUs;