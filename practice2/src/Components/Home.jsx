import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="allcontent">
        <div className="navbar">
            <div className="leftside">
                <h1>Home</h1>
            </div>
            
            <div className="rightside">
                <Link to="/addproduct">Add Product</Link>
                <Link to="/viewproduct">View Product</Link>
            </div>
        </div>
    </div>
  )
}

export default Home