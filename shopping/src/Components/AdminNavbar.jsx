import React from 'react'
import '../Styles/AdminNavbar.css'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='AdminNavbar'>
        <div className="logo">
            <h1>Food<span>Cart</span></h1>
        </div>

        <div className="options">
            <Link to="/adminhomepage/adminview">View</Link>
            <Link to="/adminhomepage/adminaddproduct">Add Products</Link>
            {/* <Link to="/adminhomepage/admineditproduct">Edit Products</Link> */}
        </div>
    </div>

    
  )
}

export default AdminNavbar