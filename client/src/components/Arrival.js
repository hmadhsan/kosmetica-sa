import React from 'react'
import '../App.css';

const Arrival = () => {
  return (
    <section className="arrivals" id="arrivals">

    <div className="heading">
        <h1>new arrivals</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
            minus optio?</p>
    </div>

    <div className="swiper arrivals-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-1.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-2.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-3.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-4.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-5.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-6.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                <img src={require('../images/arrival-7.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                    <img src={require('../images/arrival-8.jpg')} alt=""/>
                </div>
                <div className="content">
                    <p>beauty products</p>
                    <div className="price">$49.99 <span>$79.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

    </div>

</section>

  )
}

export default Arrival