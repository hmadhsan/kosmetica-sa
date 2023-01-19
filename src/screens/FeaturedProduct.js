import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBeautyProdAction } from '../actions/getAllBeautyProdAction';
import Shop from '../components/Shop';
import Carousel from 'react-grid-carousel';
import { ColorRing } from 'react-loader-spinner'
const FeaturedProduct = () => {
    const dispatch = useDispatch();
    const kosmeticsstate = useSelector(state => state.getAllKosmeticsReducer);
    //destructure the reducer variables
    const { kosmetics, loading, error } = kosmeticsstate;
    useEffect(() => {
        dispatch(getAllBeautyProdAction());
    }, []);

    return (
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
                <>
                    <div className="heading">
                        <h1>featured products</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
                            minus optio?</p>
                    </div>

                    <Carousel cols={5} rows={1} gap={5} loop showDots>
                        {kosmetics && kosmetics.slice(0, 10).map((product) => {
                            return (
                                <Carousel.Item key={product._id}>
                                    <Shop product={product} />
                                </Carousel.Item>
                            )
                        })}

                    </Carousel>

                </>
            )
            }

        </div>

    )
}

export default FeaturedProduct