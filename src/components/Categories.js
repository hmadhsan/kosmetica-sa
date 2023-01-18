import React from 'react';
import '../App.css';
const Categories = () => {
    /* category section starts */
  return (
    <section className="category">

    <a href="#" className="box">
    <img src={require('../images/category-1.png')} alt=""/>
        <p>cosmetics</p>
    </a>

    <a href="#" className="box">
    <img src={require('../images/category-2.png')} alt=""/>
        <p>makeup</p>
    </a>

    <a href="#" className="box">
        <img src={require('../images/category-3.png')} alt="" />
        <p>powder</p>
    </a>

    <a href="#" className="box">
    <img src={require('../images/category-4.png')} alt=""/>
        <p>lotions</p>
    </a>

    <a href="#" className="box">
    <img src={require('../images/category-5.png')} alt=""/>
        <p>lipstick</p>
    </a>

    <a href="#" className="box">
    <img src={require('../images/category-6.png')} alt=""/>
        <p>mascara</p>
    </a>

</section>
  )
}

export default Categories