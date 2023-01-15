import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import products from '../products';
const Shop = () => {
const [data, setData] = useState([]);
const [searchProd, setSearchProd] = useState("");


useEffect(() => {
  axios.get('https://makeup-api.herokuapp.com/api/v1/products.json').then(response => {
    console.log('Response',response.data)
  }).catch('error')

},[])
    /* shop section starts */
  return (
<section className="shop" id="shop">

<div className="heading">
    <h1>featured products</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
        minus optio?</p>
</div>

<div className="swiper products-slider">

    <div className="swiper-wrapper">

        <div className="swiper-slide slide">
            <div className="row">
                <span className="discount">-25%</span>
                  
                {products.map(item => {
                    return (
                        <div className='col-md-3'>
                            <img src={item.image} alt='hello' />
                            <h1> {item.name} </h1>
                            </div>
                    )
                })}

                <h1> {products.length} </h1>

              
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-2.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-3.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-4.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-5.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-6.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-7.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <span className="discount">-25%</span>
                <img src={require('../images/product-8.jpg')} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div className="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

    </div>

    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>

</div>

</section>
  )
  
}

export default Shop
