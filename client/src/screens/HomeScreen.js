import React from 'react'
import '../App.css';
const HomeScreen = () => {
    /* home section starts */
  return (
    <section className="home" id="home">

    <div className="slide active">
        <div className="content">
        <img src={require('../images/content-img-1.png')} alt=""/>
            <span>new arrivals 2023</span>
            <h3>cosmetics</h3>
            <a href="#" className="btn">read more</a>
            <div className="controls">
                {/* <div className="fas fa-angle-left" onClick="prev()"></div>
                <div className="fas fa-angle-right" onClick="next()"></div> */}
            </div>
        </div>
        <div className="image">
        <img src={require('../images/home-img-1.png')} alt=""/>
        </div>
    </div>

    <div className="slide">
        <div className="content">
            <img src={require('../images/content-img-2.png')} alt=""/>
            <span>new arrivals 2022</span>
            <h3>accessories</h3>
            <a href="#" className="btn">read more</a>
            <div className="controls">
                {/* <div className="fas fa-angle-left" onClick="prev()"></div>
                <div className="fas fa-angle-right" onClick="next()"></div> */}
            </div>
        </div>
        <div className="image">
        <img src={require('../images/home-img-2.png')} alt=""/>
        </div>
    </div>

    <div className="slide">
        <div className="content">
        <img src={require('../images/content-img-3.png')} alt=""/>
            <span>new collections</span>
            <h3>skin care</h3>
            <a href="#" className="btn">read more</a>
            <div className="controls">
                <div className="fas fa-angle-left" onClick="prev()"></div>
                <div className="fas fa-angle-right" onClick="next()"></div>
            </div>
        </div>
        <div className="image">
        <img src={require('../images/home-img-3.png')} alt=""/>
        </div>
    </div>

</section>
  )
}

export default HomeScreen