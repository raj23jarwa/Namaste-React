import React from 'react'
import { CDN_URL } from '../utils/constant'
const ItemList = ({items}) => {
    // const {name,price,imageId,id,description}=items.info
    console.log("items",items)
  
  return (
    <>
        
                {items.map((item)=>(
                 <div 
                 key={item.card.info.id} 
                 className='p-2 m-2 flex justify-between gap-6 border-b-2 border-gray-300 w-full'
                 >
                <div className='w-9/12'>
                    <span className='text-xl'>{item.card.info.name}</span>       
                    <span className='text-lg'>{(" - ")}₹ {" "}{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                    <p className='text-sm leading-5 text-gray-500 font-semibold'>{item.card.info.description}</p>

                 </div>
                 <div className='flex flex-col'>
                 <img src={CDN_URL+item.card.info.imageId}  alt='restrolistImg' className='w-40'/>
                 <button className='bg-white px-2 py-2 relative bottom-6 shadow-lg shadow-gray-300'>ADD +</button>
                 </div>
                 </div>
                ))}
            
        
    </>
  )
}

export default ItemList