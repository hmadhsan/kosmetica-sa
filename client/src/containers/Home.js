import React from 'react'
import { Carousel } from 'antd';
import banner1 from "../assets/images/img-1.jpg";
import banner2 from "../assets/images/img-2.jpg";
import banner3 from "../assets/images/img-3.jpg";
const contentStyle = {
  margin: 0,
  height: '600px',
  width:"100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Home() {
    const renderImages = () => {
        return (
        <Carousel autoplay>
        <div>
          <img src={banner1} style={contentStyle}/>
        </div>
        <div>
        <img src={banner2} style={contentStyle}/>
        </div>
        <div>
        <img src={banner3} style={contentStyle}/>
        </div>
      
      </Carousel>
        )
    }
    
    return (
        <div>
         {renderImages()}
        </div>
    )
}

export default Home
