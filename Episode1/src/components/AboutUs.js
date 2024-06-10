import React, { Component } from "react"
// import User from "./User";
import UserClass from "./UserClass";
// import User from "./User";
import UserContext from "../utils/UserContext";
class AboutUs extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("Parent didMount")
    }
    render(){
        console.log("Parent render")
          return(
            <div className="aboutUs">
            <h1> About us component </h1>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=><h1 className="text-xl font-bold"> {loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <User name={"Rajkumar singh (Function)"} location={"Mohindergarh"}/> */}
            <UserClass name="Rajkumar singh (Class)" location={"Jammu Kashmir"}/>
            <UserClass name={"Sonu"} location={"Jarwa"}/>
            <UserClass name={"Ram"} location={"Ayodhya"}/>
        </div>
          )
    }
}
// const AboutUs = () => {
//     return (
//         <div className="aboutUs">
//             <h1> About us component </h1>
//             {/* <User name={"Rajkumar singh (Function)"} location={"Mohindergarh"}/> */}
//             <UserClass name="Rajkumar singh (Class)" location={"Jammu Kashmir"}/>
//         </div>
//     )
// }
export default AboutUs;