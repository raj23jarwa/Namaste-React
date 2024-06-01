import React, { useState } from 'react'

const User = (props) => {
    const[count,setCount] =useState(0);
    const[count2,setCount2] =useState(1);
  return (
    <>
        <div className='userCard'>
            <h1>Count:{count}</h1>
            <h1>Count:{count2}</h1>
            <button onClick={()=>{setCount(count+1),setCount2(count2+1)}}> Increment</button>
            <button onClick={()=>{setCount2(count2-1)}}> Decrement</button>

            <h2>Name: {props.name}</h2>
            <h3>Location: Mohindergarh</h3>
            <h4>Contact: 9518158992</h4>
        </div>
    </>
  )
}

export default User