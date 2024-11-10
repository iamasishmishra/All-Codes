import React, { Fragment } from 'react'
import userData from "./userData.json"

const FetchUser = () => {

  return (
    <div>
        {userData.map((x)=>{
            return(
                <Fragment>
                    <h1>{x.login}</h1>
                    <img src={x.avatar_url} alt="" />
                </Fragment>
            )
        })}
    </div>
  )
}

export default FetchUser