import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
const AppLayout = () => {
    return (
        <>
            <Header />
             <Outlet/>
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
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {AppRouter} />)