import { useState, useEffect } from "react";
import { MENU_URL } from "./constant"
const useRestaurantMenu=((resId) =>{
    const [resInfo,setResInfo] =useState(null)

    useEffect(() =>{
       fetchMenu();
    },[])
    const fetchMenu = async() =>{
        try {
            const response= await fetch(`${MENU_URL}${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
            const data = await response.json();
            setResInfo(data.data)
            console.log("Menu api:", data);
            
        } catch (error) {
            console.error("Error Fetching Menu:", error)
        }
    }
    return resInfo;
})
export default useRestaurantMenu;