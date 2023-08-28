import React from 'react'
import "../NAV-BAR/nav.css"
import { Link, NavLink } from "react-router-dom"
import navlogo from "../../ASSESTS/navlogo.png"
import Dummynav from './Dummynav'
const Nav = () => {
  return (
    <div>
      <div className='nav'>

        <div className="nav-logo-box">
          <img id='logo-img' src={navlogo} alt="" />
        </div>
        <div className="nav-links-box">
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/"><h5>Home</h5></NavLink>
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/Services"><h5>Services</h5></NavLink>
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/About"><h5>About Us</h5></NavLink>
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/Blog"><h5>Blog</h5></NavLink>
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/Contact"><h5>Free Consultation</h5></NavLink>


        </div>
        <div className="nav-signup-signin-box">
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/"><h5>Sign Up</h5></NavLink>
          <NavLink style={({ isActive }) => isActive ? { color: '#F2005D' } : {}} className='navlinks' to="/"><h5>Sign In</h5></NavLink>


        </div>
      </div>
      <Dummynav />
    </div>


  )
}

export default Nav