import React from 'react'

const B = (childProps) => {
    console.log(childProps.data1);
  return (
    <div>
        <h1>{childProps.data1}</h1>
    </div>
  )
}

export default B