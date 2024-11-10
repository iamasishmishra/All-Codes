import React from 'react'
import PropsChildren2 from './PropsChildren2'

const PropsChildren = (xyz) => {
    console.log(xyz);
    console.log(xyz.children);
  return (
    <div>
        <h1>{xyz.data} {xyz.children}</h1>
    </div>
  )
}

export default PropsChildren