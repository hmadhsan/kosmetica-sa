import React,{useState, useEffect} from 'react'
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
        <div >

            {kosmetics && kosmetics.slice(0, 6).map((product) => {
                return (
                   <div key={product._id}>
                    <Shop product={product} />
                   </div>
                )
            })}

            {/* <Carousel cols={5} rows={1} gap={5} loop showDots>
                {kosmetics && kosmetics.slice(0, 10).map((product, i) => {
                    return (
                        <Carousel.Item key={product._id}>
                            <img width='100%' height='200px' src={product.api_featured_image} alt='featured image' />

                            <h1>Price:{product.price} </h1>
                            <button className='btn' onClick={addToCart}>Add to Cart</button>

                        </Carousel.Item>
                    )
                })}
            </Carousel> */}

        </div>

    )
    }

</div>

  )
}

export default FeaturedProduct