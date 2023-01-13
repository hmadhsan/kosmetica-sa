import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import products from '../products';
const Shop = () => {
const [data, setData] = useState([]);
const [searchProd, setSearchProd] = useState("");


useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://makeup.p.rapidapi.com/products.json',
        params: {brand: 'colourpop', product_category: 'lipstick'},
        headers: {
          'X-RapidAPI-Key': '690d53f922mshcbf8c07e558b776p11089ajsne986f3b42904',
          'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
        }
      };     
      axios.request(options).then(function (response) {
        setData(response.data)
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

},[])
    /* shop section starts */
  return (
<section class="shop" id="shop">

<div class="heading">
    <h1>featured products</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
        minus optio?</p>
</div>

<div class="swiper products-slider">

    <div class="swiper-wrapper">

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                  
                {products.map(item => {
                    return (
                        <div>
                            <img src={item.image} alt='hello' />
                            <h1> {item.name} </h1>
                            </div>
                    )
                })}

                <h1> {products.length} </h1>

              
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-2.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-3.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-4.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-5.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-6.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-7.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

        <div class="swiper-slide slide">
            <div class="image">
                <span class="discount">-25%</span>
                <img src={require('../images/product-8.jpg')} alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p>beauty products</p>
                <div class="price">$49.99 <span>$79.99</span></div>
            </div>
        </div>

    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

</div>

</section>
  )
  
}

export default Shop
