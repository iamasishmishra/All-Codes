import React, { useRef } from 'react'
import { useState } from 'react'
const Calculator = () => {

    let data1 = useRef()
    let data2 = useRef()

    let [print,setPrint] = useState();

    let add = (e)=>{
        e.preventDefault();
        setPrint(Number(data1.current.value)+Number(data2.current.value))  
    }

    let sub = (e)=>{
        e.preventDefault();
        setPrint(Number(data1.current.value)-Number(data2.current.value))  
    }

    let mul = (e)=>{
        e.preventDefault();
        setPrint(Number(data1.current.value)*Number(data2.current.value))  
    }

    let div = (e)=>{
        e.preventDefault();
        setPrint(Number(data1.current.value)/Number(data2.current.value))  
    }


  return (
    <div>
        <form action="">
            <label htmlFor="">
                1st no: 
            </label>
            <input type="text"  ref={data1}/>

            <label htmlFor="">
                2st no: 
            </label>
            <input type="text" ref={data2}/>

            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>

            {
                

                <h2>{print}</h2>
            }
        </form>
    </div>
  )
}

export default Calculator