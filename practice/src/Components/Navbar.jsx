import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="heading">
            <div className="leftside">
                <h1>Home</h1>
            </div>

            <div className="rightside">
                <Link to="/addproduct">Add Student</Link>
                <Link to="/viewproduct">View Student</Link>
                {/* <Link to="/addstudent">Add Student</Link>
                <Link to="/viewstudent">View Student</Link> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar    