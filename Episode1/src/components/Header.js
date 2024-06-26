import React, { useContext } from 'react'
// import Logo from '../../assets/images/logo.jpg'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'
const Header = () => {
    const [btnName,setBtnName] =useState("login")
   const onlineStatus=useOnlineStatus();

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

   const {loggedInUser}=useContext(UserContext)
   console.log(loggedInUser)

    //  subscribing to the store using selector
     const cartItems = useSelector((store) =>store.cart.items)
     console.log("cartItems are:",cartItems)
    return (
        <div className="header flex justify-between px-6 items-center w-full  bg-slate-800 text-white text-xl">
            <div className="logoContainer w-20  h-20 p-2">
                <img src="../../assets/images/logo.jpg" alt="weblogo" className='rounded-full'></img>
            </div>
            <div className="navbarItems ">
                <ul className='flex flex-row gap-10'>
                    <li>onlineStatus:{onlineStatus? "✅": "😡"}</li>
                    <li className='cursor-pointer'>
                        <Link to='/'>Home</Link>
                    </li>
                    
                    <li className='cursor-pointer'>
                        <Link to='/about'>AboutUs</Link>
                    </li>  
                    
                    <li className='cursor-pointer'>
                        <Link to='/contact'>ContactUs</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to='/cart'>🛒({cartItems.length})</Link>
                    </li>
                    <li className='font-bold text-md'>
                     {loggedInUser}
                    </li>
                </ul>

            </div>
            <button 
            className='login px-4 py-2 bg-indigo-600 text-white rounded-md'
            onClick={() =>{btnName==="login" ?setBtnName("logout") : setBtnName("login")}}>{btnName}</button>

        </div>
    )
}

export default Header