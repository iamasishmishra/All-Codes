import React, { useState } from 'react'

const UserForm = () => {
    let [name,setName] = useState('');
    let [email, setEmail] = useState('');
    let [printData, setPrintData] = useState(null);

    let click =(e)=>{
        e.preventDefault();
        setPrintData({name, email})
    }

  return (
    <div>
        <div className="form">
            <form action="" onSubmit={click}>
                <label htmlFor="">
                    Name:
                    <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </label>

                <label htmlFor="">
                    Email:
                    <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>

                <button>Submit</button>
            </form>

            {printData && (
                <div>
                    <h3>Name: {printData.name}</h3>
                    <h3>Email: {printData.email}</h3>
                </div>
            )}
        </div>
    </div>
  )
}

export default UserForm