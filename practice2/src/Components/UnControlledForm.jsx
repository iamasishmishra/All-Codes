import React, { useRef, useState } from 'react'

const UnControlledForm = () => {
    let firstValue = useRef();
    let secondValue = useRef();
    // let final = useRef();

    let [result,setResult] = useState()

    function add(e){
        e.preventDefault();
        let a1 = Number(firstValue.current.value);
        let a2 = Number(secondValue.current.value)
        console.log(a1+a2);
        setResult(a1+a2)

    }

    function sub(e){
        e.preventDefault();
        let a1 = Number(firstValue.current.value);
        let a2 = Number(secondValue.current.value)
        console.log(a1-a2);
    }

    function mul(e){
        e.preventDefault();
        let a1 = Number(firstValue.current.value);
        let a2 = Number(secondValue.current.value)
        console.log(a1*a2);
    }
  return (
    <div>
        Enter First Number: 
        <input type="text"  ref={firstValue}/>

        Enter Second Number: 
        <input type="text"  ref={secondValue}/>

        <button onClick={add} >Add</button>
        
        <button onClick={sub} >Sub</button>
        <button onClick={mul}>Mul</button>
        <div>
            <h1> {result}</h1>
        </div>

    </div>
  )
}

export default UnControlledForm