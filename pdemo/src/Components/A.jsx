import React from 'react'
import B from './B'

const A = (props) => {
    console.log(props);
  return (
    <div>
        <B data1={props.data}/>
    </div>
  )
}

export default A