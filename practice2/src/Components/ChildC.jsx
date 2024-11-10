import React, { useContext } from 'react'
import {data} from './Parent'

const ChildC = () => {
    let name = useContext(data);
    console.log(name);
  return (
    <div>
        <h1>My name is {name}</h1>
    </div>
  )
}

export default ChildC