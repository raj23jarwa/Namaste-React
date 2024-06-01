import React, { useState, useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from './Shimmer'
import {SWIGGY_URL} from '../utils/constant'
import { Link } from 'react-router-dom'
export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(null)
    const [filteredRestaurant, setFilteredRestaurant] = useState(null);
    const [input, setInput] = useState("")
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const data = await response.json();
            console.log(data);
            let restData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            console.log(restData)

            setListOfRestaurant(restData); // Assuming data is an array of restaurants
            setFilteredRestaurant(restData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    return listOfRestaurant===null ?(<Shimmer/>): (

        <>
            <div className="filter">
                <div className='search'>
                    <input
                        type='text'
                        value={input}

                        onChange={(e) => {
                            e.preventDefault();
                            setInput(e.target.value)
                        }}></input>
                    <button onClick={() => {
                        setInput("")
                        const filterrestaurant = listOfRestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(input.toLowerCase());
                        })
                          console.log(filterrestaurant)
                        setFilteredRestaurant(filterrestaurant);

                    }}>Sumit</button>
                </div>
                <button
                    className='filterBtn'
                    onClick={() => {
                        const filteredData = filteredRestaurant.filter((res) => {
                            return res.info.avgRating > 4.1;
                        })
                        console.log(filteredData)
                        setFilteredRestaurant(filteredData)
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="resContainer">
                {
                    filteredRestaurant.map((restaurant) => (
                         <Link 
                          key={restaurant?.info?.id} 
                          to={"/restaurants/"+restaurant?.info?.id}>
                             <RestaurantCard {...restaurant.info} /> 
                        </Link>
                    ))
                }
            </div>

        </>
    )
    

}

export default Body