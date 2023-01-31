import React from 'react'
import '../App.css';const Navbar = () => {

  return (
    /* navbar section */
<nav className="navbar">
        <div id="close-navbar" className="fas fa-times"></div>
        <a href="#home">home</a>
        <a href="#shop">shop</a>
        <a href="#gallery">gallery</a>
        <a href="#team">team</a>
        <a href="#arrivals">arrivals</a>
        <a href="#blogs">blogs</a>
    </nav>
  )
}

export default Navbar