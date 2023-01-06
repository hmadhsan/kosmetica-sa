import React from 'react'
import '../App.css';
const Services = () => {
    /* services section */
  return (
    <section class="service">

    <div class="box">
    <img src={require('../images/service-1.png')} alt=""/>

        <h3>free shipping</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugit?</p>
    </div>

    <div class="box">
    <img src={require('../images/service-2.png')} alt=""/>

        <h3>secure payment</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugit?</p>
    </div>

    <div class="box">
        <img src={require('../images/service-3.png')} alt=""/>
        <h3>2/4 support</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugit?</p>
    </div>

</section>
  )
}

export default Services