import React from 'react'
import '../App.css';
const Home = () => {
    /* home section starts */
  return (
    <section class="home" id="home">

    <div class="slide active">
        <div class="content">
        <img src={require('../images/content-img-1.png')} alt=""/>
            <span>new arrivals 2022</span>
            <h3>cosmetics</h3>
            <a href="#" class="btn">read more</a>
            <div class="controls">
                <div class="fas fa-angle-left" onclick="prev()"></div>
                <div class="fas fa-angle-right" onclick="next()"></div>
            </div>
        </div>
        <div class="image">
        <img src={require('../images/home-img-1.png')} alt=""/>
        </div>
    </div>

    <div class="slide">
        <div class="content">
            <img src={require('../images/content-img-2.png')} alt=""/>
            <span>new arrivals 2022</span>
            <h3>accessories</h3>
            <a href="#" class="btn">read more</a>
            <div class="controls">
                <div class="fas fa-angle-left" onclick="prev()"></div>
                <div class="fas fa-angle-right" onclick="next()"></div>
            </div>
        </div>
        <div class="image">
        <img src={require('../images/home-img-2.png')} alt=""/>
        </div>
    </div>

    <div class="slide">
        <div class="content">
        <img src={require('../images/content-img-3.png')} alt=""/>
            <span>new collections</span>
            <h3>skin care</h3>
            <a href="#" class="btn">read more</a>
            <div class="controls">
                <div class="fas fa-angle-left" onclick="prev()"></div>
                <div class="fas fa-angle-right" onclick="next()"></div>
            </div>
        </div>
        <div class="image">
        <img src={require('../images/home-img-3.png')} alt=""/>
        </div>
    </div>

</section>
  )
}

export default Home