import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(5)

    useEffect(()=>{
        console.log("Hiiiii");
        
    }, [count1])

  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Inc</button>

        <h1>count1: {count1}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>Inc</button>
    </div>
  )
}

export default UseEffect1