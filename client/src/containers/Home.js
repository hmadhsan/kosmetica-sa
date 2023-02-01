import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Avatar, Card, Row, Space, Typography,Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,EyeOutlined,ShoppingCartOutlined } from '@ant-design/icons';

import banner1 from "../assets/images/img-1.jpg";
import banner2 from "../assets/images/img-2.jpg";
import banner3 from "../assets/images/img-3.jpg";
import useProducts from '../_actions/productActions';

const contentStyle = {
  margin: 0,
  height: '600px',
  width: "100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const {Text} = Typography;
function Home() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.product.productList);
  const { getProductList } = useProducts();


  useEffect(() => {
    getProductList();

  }, [])
  const renderImages = () => {
    return (
      <Carousel autoplay>
        <div>
          <img src={banner1} style={contentStyle} />
        </div>
        <div>
          <img src={banner2} style={contentStyle} />
        </div>
        <div>
          <img src={banner3} style={contentStyle} />
        </div>

      </Carousel>
    )
  }

  const renderProductList = () => {
    return (
      <Row gutter={[12, 12]} style={{ padding: 10 }}>
        {productList?.map((item, index) => (
       
          <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <Card
            hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src={item.image}
                />
              }
              actions={[
                <EyeOutlined key="view" style={{color: "orange",fontSize: 18}} />,
                <ShoppingCartOutlined key="cart" style={{color:"#b82837", fontSize:18}}/>,
                
              ]}
            >
              <Space direction='vertical'>
              <Text strong> {item?.name} </Text> 
              <Text type='secondary'> {item?._category?.name} </Text> 
              <Text type='success'> {item?.price} </Text> 
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <div>
      {renderImages()}
      {renderProductList()}
    </div>
  )
}

export default Home
