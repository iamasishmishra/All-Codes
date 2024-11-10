import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    let [add,setAdd] = useState(0)
    let [sub,setSub] = useState(100)

    let mul  = useMemo(function mul(){
        console.log("++++++++");
        return add*2;
    }, [add]);

    // function mul(){
    //     console.log("++++++++");
    //     return add*2;
    // }

  return (
    <div>
        <h1>multiplication : {mul}</h1>
        
        <p>{add}</p>
        <button onClick={()=>{setAdd(add+1)}}> Add</button>

        
        <p>{sub}</p>
        <button onClick={()=>{setSub(sub-1)}}>Sub</button>

    </div>
  )
}

export default UseMemo