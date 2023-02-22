import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'


const NavBar = () => {
  return (
    <nav className="nav">
        <Link to='/'>Home</Link> 
        <Link to='/about'>About</Link>
    </nav>
  )
}

export default NavBar