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


            <div className="swiper products-slider">

                {loading ? (
                    <div className='featureLoader'>
                        <ColorRing

                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div>

                ) : error ? <h1>Something went wrong</h1> : (
                    <div onClick={handleShow}>

                        <Carousel cols={5} rows={1} gap={5} loop showDots>
                            {kosmetics && kosmetics.slice(0, 10).map((product, i) => {
                                return (
                                    <Carousel.Item key={product._id}>
                                        <img width='100%' height='200px' src={product.api_featured_image} alt='featured image' />

                                        <h1>Price:{product.price} </h1>
                                        <button className='btn' onClick={addToCart}>Add to Cart</button>

                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>

                )
                }

            </div>

        </section>
    )

}

export default Shop
