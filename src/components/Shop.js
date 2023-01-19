import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import Carousel from 'react-grid-carousel';
import { ColorRing } from 'react-loader-spinner'

import { getAllBeautyProdAction } from '../actions/getAllBeautyProdAction';
import { addToCart } from '../actions/cartActions';
const Shop = ({ product }) => {
    const [products, setProducts] = useState([]);
    const [searchProd, setSearchProd] = useState("");
    const [loader, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    // const [product, setProduct] = useState('');
    // const [price, setPrice] = useState('');
    const dispatch = useDispatch();


    //destructure the reducer variables



    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    const addToCart = () => {
        //dispatch(addToCart(product, price))

    }
    //home screen k andar Pizza ko import karaya hai and then wahan Pizza.js me props bhjrhy hain covid 19
    /* shop section starts */
    return (
        <section className="shop" id="shop">


            <img width='100%' height='200px' src={product.api_featured_image} alt='featured image' />

            <h1>Price:{product.price} </h1>
            <button className='btn' onClick={addToCart}>Add to Cart</button>



        </section>
    )

}

export default Shop
