import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='HomePage'>
      <h1>Home page</h1>
      <div className='mainbox'>
        <Link to="/admin">
          <img src="https://w7.pngwing.com/pngs/862/1000/png-transparent-computer-icons-management-computer-software-administrator-icon-logo-monochrome-silhouette.png" alt="" />
          <h3>Admin</h3>
        </Link>

        <Link to="/user">
          <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-admin-rolls-glyph-black-icon-png-image_691507.jpg" alt="" />
          <h3>User</h3>
        </Link>
      </div>
    </div>
  )
}

export default Home