import React from 'react'

const Btn = (props) => {
  console.log(props);
  
  return (
    <div>
      <button onClick={props.func}>Inc</button>
      {props.func}
    </div>
  )
}

export default React.memo(Btn)