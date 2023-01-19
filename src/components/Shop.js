import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import Carousel from 'react-grid-carousel';
import { ColorRing } from 'react-loader-spinner'

import { getAllBeautyProdAction } from '../actions/getAllBeautyProdAction';
import { addToCart } from '../actions/cartActions';
const Shop = ({name, imageId}) => {
    const [products, setProducts] = useState([]);
    const [searchProd, setSearchProd] = useState("");
    const [loader, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    // const [product, setProduct] = useState('');
    // const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const kosmeticsstate = useSelector(state => state.getAllKosmeticsReducer);
console.log('Productsssssss', name)
console.log('Products image id', imageId)
    //destructure the reducer variables
    const { kosmetics, loading, error } = kosmeticsstate;
    useEffect(() => {
        dispatch(getAllBeautyProdAction());
    }, []);


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

            <div className="heading">
                <h1>featured products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
                    minus optio?</p>
            </div>


<h1>hehhehehe</h1>

        </section>
    )

}

export default Shop
