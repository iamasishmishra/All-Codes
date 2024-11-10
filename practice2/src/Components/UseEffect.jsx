import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(5);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(count+1);
    //     }, 2000)

    // })

    useEffect(()=>{
      document.title = `count: ${count}`
    })

    let click = ()=>{
      setCount(count+1)
    }

  return (
    <div>
        <h1>rendered {count} times</h1>
        <button onClick={click}>Inc</button>
    </div>
  )
}

export default UseEffect