import React from 'react'

const FetchData = () => {
    let students = [{name:"Ak"},
                    {name:"Ck"},
                    {name:"Bk"}
    ]

  return (
    <div>
        {
            students.map((x)=>{
                return(
                    <div>
                        <h1>{x.name}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FetchData