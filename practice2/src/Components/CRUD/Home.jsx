import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Home.module.css'

const Home = () => {
  return (
    <div style={styles.nav}>
        <Link to='/'>Create User</Link>
        <Link to='/user'>User</Link>
    </div>
  )
}

export default Home