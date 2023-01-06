import React from 'react'

 import '../App.css';
const Header = props => {

    /* Header */
  return (
    <header class="header">

    <a href="#home" class="logo"> <img src={require('../images/logo1.PNG')} />  </a>

    <form action="" class="search-form">
        <input type="search" name="" placeholder="search here..." id="search-box"/>
        <label for="search-box" class="fas fa-search"></label>
    </form>

    <div class="icons">
        <div id="menu-btn" class="fas fa-bars"></div>
        <div id="search-btn" class="fas fa-search"></div>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-shopping-cart"></a>
    </div>

</header>
  
)

}


export default Header