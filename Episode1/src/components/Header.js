import React from 'react'
import Logo from '../../assets/images/logo.jpg'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [btnName,setBtnName] =useState("login")

    // useEffect runs when your website reload
    // useEffect run everytime whenever your component reloads if you dont use dependency array i.e., try removing [] from useEffect
    // But if you use dependency array (empty) if will only called once when first time your website reloads i.e. try adding [] in useEffect
    // if we add some dependency in array it will called everytime when that dependency variable state changes.
   useEffect(() => {
     console.log("useEffect called")
   
     return () => {
       console.log("return called")
     }
   }, [btnName])
   
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={Logo} alt="weblogo"></img>
            </div>
            <div className="navbarItems">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <li>
                        <Link to='/about'>AboutUs</Link>
                    </li>  
                    </li>
                    <li>
                        <Link to='/contact'>ContactUs</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>

                </ul>

            </div>
            <button 
            className='login'
            onClick={() =>{btnName==="login" ?setBtnName("logout") : setBtnName("login")}}>{btnName}</button>

        </div>
    )
}

export default Header