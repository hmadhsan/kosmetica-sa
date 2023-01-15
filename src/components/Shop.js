import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Corousel from 'react-grid-carousel';
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
   
           }catch(err){
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


                {products && products.slice(0, 5).map(item => {
                    return (
                      <Corousel cols={2} rows={1} gap={10} loop>

                            <Corousel.Item>
                                <img width='100%' src={item.api_featured_image} alt='image' />
                            </Corousel.Item>




                        </Corousel>


                    )
                })}


            </div>

        </section>
    )

}

export default Shop
