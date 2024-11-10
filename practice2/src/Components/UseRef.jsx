import React, { useRef } from 'react'

const UseRef = () => {

  let data = useRef();

  let click = () => {
    console.log(data.current);
    data.current.style.backgroundColor = "green";
  }

  return (
    <div>
      <h1 ref={data} >Hello</h1>
      <button onClick={click}>Click me</button>
    </div>
  )
}

export default UseRef