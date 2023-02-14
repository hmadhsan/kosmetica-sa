import React from 'react'
import '../App.css';
const Services = () => {
    /* services section */
  return (
    <section className="service">

    <div className="box">
    <img src={require('../images/service-1.png')} alt=""/>

        <h3>free shipping</h3>
        <p>Best thing about kosmetica? We provide free shipping all over Germany</p>
    </div>

    <div className="box">
    <img src={require('../images/service-2.png')} alt=""/>

        <h3>secure payment</h3>
        <p>We use stripe as a payment gateway which is one the best</p>
    </div>

    <div className="box">
        <img src={require('../images/service-3.png')} alt=""/>
        <h3>24/7 support</h3>
        <p>Our customer support is available for you 24/7</p>
    </div>

</section>
  )
}

export default Services