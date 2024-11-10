import React, { useState } from 'react'
import '../Styles/AdminSignup.css'
import axios  from 'axios';

const AdminSignup = () => {
    let [name,setname] = useState("");

    let [email,setemail] = useState("");

    let [password,setpassword] = useState("");

    let [phone,setphone] = useState("");

    let [profimg,setprofimg] = useState("");
   
    let admins = {name,email,password,phone,profimg}

    let addAdmin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:1000/Manager",admins)
        .then((res)=>{
            console.log(res);
            alert("Admin added Successfully..")
        })
    
        .catch((err)=>{
            console.log("Invalid data");
        })
    }

  return (
    <div className='container2'>
        <form action="" id='form2' onSubmit={addAdmin}>
            <label htmlFor="" >
                Name: <input type="text" required placeholder='Enter the name'  value={name} onChange={(e) => { setname(e.target.value) }}/>
            </label>

            <label htmlFor="" >
                Email: <input type="email" required placeholder='Enter the email' value={email} onChange={(e) => { setemail(e.target.value) }}/>
            </label>

            <label htmlFor="">
                Password: <input type="password" placeholder='Enter the password' value={password} onChange={(e) => { setpassword(e.target.value) }}/>
            </label>

            <label htmlFor="">
                Phone: <input type="tel" required pattern='[0-9]{10}' placeholder='Enter the Phone no' value={phone} onChange={(e) => { setphone(e.target.value) }}/>
            </label>

            <label htmlFor="">
                Profile Image: <input type="text" required placeholder='Enter the Profile image' value={profimg} onChange={(e) => { setprofimg(e.target.value) }}/>
            </label>
            <br />
            <button className='btn'>Register</button>
            
        </form>
    </div>
  )
}

export default AdminSignup