import React from 'react'
 import '../App.css';
const Header = props => {

    /* Header */
  return (
    <header className="header">

    <a href="#home" className="logo"> <img src={require('../images/logo1.PNG')} />  </a>

    <form action="" className="search-form">
        <input type="search" name="" placeholder="search here..." id="search-box"/>
        <label for="search-box" classNameName="fas fa-search"></label>
    </form>

    <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <a  href="/login" className='fas fa-sign-in-alt'></a>
        <a href="#" className="fas fa-shopping-cart"></a>
    </div>

</header>
  
)

}


export default Header