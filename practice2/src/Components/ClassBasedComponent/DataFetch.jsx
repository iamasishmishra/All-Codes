import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetch = () => {
    let [print,setPrint] = useState("")

    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((res)=>{
            setPrint(res.data);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
  return (
    <div>
        <h1>{print.name}</h1>
        <h1>{print.name}</h1>
    </div>
  )
}

export default DataFetch