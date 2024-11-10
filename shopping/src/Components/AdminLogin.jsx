import React, {  useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../Styles/AdminLogin.css';
import axios from 'axios';

const AdminLogin = () => {
  let [uname, setuname] = useState("");
  let [password, setpassword] = useState("");
//-------------------------
  let [admin,setadmin] = useState([])
  // for navigation 
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:1000/Manager")
      .then((res)=>{
        console.log(res.data);
        setadmin(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[])
  
  function login(e) {
    let a = false;
    e.preventDefault()
    admin.map((x)=>{
      if(uname==x.name && password==x.password){
        alert("Login Successful");
        navigate('/adminhomepage')
        a=true

      }
    })

    if(a == false){
      alert("Invalid data")
    }  
  }
//----------------------------

  return (
    <div className='container'>
      <h1 className='Admin login'>
        Admin Login
      </h1>

      <div className='formsection'>
        <form action="">
          <label htmlFor="">
            Username: <input type="text" name=" " value={uname} onChange={(e) => { setuname(e.target.value) }} placeholder='Enter Admin Username' />
          </label> <br />
          <label htmlFor="">
            PassWord: <input type="text" name="" value={password} onChange={(e) => { setpassword(e.target.value) }} id="" placeholder='Enter Password' />
          </label>
        </form>
      </div>

      <br />

      <button onClick={login}>Submit</button>

      <p>New User? <Link to="/adminsignup">SignUp now</Link></p>
    </div>
  )
}

export default AdminLogin