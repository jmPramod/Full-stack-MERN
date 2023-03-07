import React from 'react'
import { Link } from 'react-router-dom'
import "./navbarStyle.css"
const NavBar = () => {
  return (
    <div className='navbar'>
     <div className='navbarContainer'>
<span className='logo'>Logo</span>
<div className="navbarItems">
  <button className="navButton" >Register</button>
  <button  className="navButton" >Login</button>


  
</div>
     </div>
    </div>
  )
}

export default NavBar