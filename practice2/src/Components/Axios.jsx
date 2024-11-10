import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    let [id,setId] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            setId(res.data);
            console.log(res.data);
            
            
        }) 
        .catch((err)=>{
            console.log(err);
        })
    },[id])

    function click(res){
        setId(res.data);
    }

  return (
    <div>
        <input type="text" placeholder='Enter id: ' value={id} onChange={(e)=>{setId(e.target.value)}}/>
        <button onClick={click}>click me</button>
    </div>
  )
}

export default Axios