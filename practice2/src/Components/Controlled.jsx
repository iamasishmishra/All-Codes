import React, { useState } from 'react'

const Controlled = () => {
    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")

    let [print,setPrint] = useState("");

    let click =(e)=>{
        e.preventDefault();
        console.log(name,salary,company);
        setPrint({name,salary,company});
    }

  return (
    <div>
        <label htmlFor="">Name: 
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </label>

        <label htmlFor="">Salary: 
            <input type="text" onChange={(e)=>{setSalary(e.target.value)}} value={salary} />
        </label>

        <label htmlFor="">Company: 
            <input type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} />
        </label>

        <button onClick={click}>CLick</button>
        {
           print!=="" && <div>
                <h1>Name: {print.name}</h1>
                <h2>Salary: {print.salary}</h2>
                <h2>Company: {print.company}</h2>
            </div>
        }


    </div>
  )
}

export default Controlled