import React, { useState } from 'react'

const Cont = () => {
    let [first,setFirst] = useState("")
    let[sec,setSec] = useState("")
    

    let [print,setPrint] = useState("")

    let addition=()=>{
        setPrint(Number(add))
    }
  return (
    <div>
        <form action="">
            <label htmlFor="">
                1st No: 
                <input type="text" value={add} onChange={(e)=>{e.target.value}}/>
            </label>

            <label htmlFor="">
                2st No: 
                <input type="text" value={add} onChange={(e)=>{e.target.value}}/>
            </label>

            <button onClick={addition}>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
        </form>
    </div>
  )
}

export default Cont