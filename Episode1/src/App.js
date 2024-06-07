import React, { lazy, Suspense, useContext, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from './utils/UserContext';

// import Grocery from "./components/Grocery"

const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
    // const [loggedInUser, setLoggedInUser] = useState('Rajkumar'); // Define loggedInUser and setLoggedInUser
   const {loggedInUser} =useContext(UserContext)
    return (
        <>
        <UserContext.Provider value={{loggedInUser}}>
        <Header />
        <Outlet/>
        </UserContext.Provider>
           
        </>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}> <Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {AppRouter} />)