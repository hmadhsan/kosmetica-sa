import React from 'react'
import '../App.css';

const Arrival = () => {
  return (
    <section class="arrivals" id="arrivals">

    <div class="heading">
        <h1>new arrivals</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
            minus optio?</p>
    </div>

    <div class="swiper arrivals-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-1.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-2.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-3.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-4.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-5.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-6.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                <img src={require('../images/arrival-7.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="image">
                    <img src={require('../images/arrival-8.jpg')} alt=""/>
                </div>
                <div class="content">
                    <p>beauty products</p>
                    <div class="price">$49.99 <span>$79.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

    </div>

</section>

  )
}

export default Arrival