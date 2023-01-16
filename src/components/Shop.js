import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Carousel from 'react-grid-carousel';
import { ColorRing } from 'react-loader-spinner'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchProd, setSearchProd] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        try {
            const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
            console.log('res', response.data);
            setProducts(response.data);
            setLoading(true)

        } catch (err) {
            console.log('err', err)
        }
    }


    /* shop section starts */
    return (
        <section className="shop" id="shop">

            <div className="heading">
                <h1>featured products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
                    minus optio?</p>
            </div>

            <div className="swiper products-slider">

                {loading == false ? (
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

                ) : (

                            <Carousel cols={5} rows={1}  gap={2} loop showDots>
                                {products && products.slice(0,10).map((product, i ) => {
                                    return (
                                        <Carousel.Item key={i}>
                                        <img width='100%' height='200px' src={product.api_featured_image} alt='featured image' />
                                    </Carousel.Item>
                                    )
                                })}

                            

                            </Carousel>


                


                )
                }




            </div>

        </section>
    )

}

export default Shop
