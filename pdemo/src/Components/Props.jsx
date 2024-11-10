import React from 'react'

const Props = (props) => {
  return (
    <div>
        <h1>Hello {props.data.friend} from {props.data.name}</h1>
    </div>
  )
}

export default Props