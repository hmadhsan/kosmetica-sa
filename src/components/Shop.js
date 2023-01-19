import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { addToCart } from '../actions/cartActions';
const Shop = ({ products }) => {
    //const [products, setProducts] = useState([]);
    const [searchProd, setSearchProd] = useState("");
    const [loader, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [price, setPrice] = useState('')
    const dispatch = useDispatch();


    //destructure the reducer variables



    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    const addItemtoCart = () => {
        dispatch(addToCart(product, quantity))

    }
    //home screen k andar Pizza ko import karaya hai and then wahan Pizza.js me props bhjrhy hain covid 19
    /* shop section starts */
    return (
        <section className="shop" id="shop">


            <img width='100%' height='200px' src={products.api_featured_image} alt='featured image' />

            <h1>Price:{products.price} </h1>
            <button className='btn' onClick={addItemtoCart}>Add to Cart</button>



        </section>
    )

}

export default Shop
