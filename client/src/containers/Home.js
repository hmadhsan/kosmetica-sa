import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Avatar, Card, Row, Space, Typography, Col } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
import ProductModalDetails from '../components/modal/ProductModalDetails';
import banner1 from "../assets/images/img-1.jpg";
import banner2 from "../assets/images/img-2.jpg";
import banner3 from "../assets/images/img-3.jpg";
import useProducts from '../_actions/productActions';
import ProductFilters from '../components/Filters/ProductFilters';
const contentStyle = {
  margin: 0,
  height: '600px',
  width: "100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const { Text } = Typography;

const initialQuery = {
  skip: 0,
  filters: { price: { $gte: 4, $lte: 100 } }

}
function Home() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.product.productList);
  const { getProductList } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState(initialQuery);

  const handleShowPorductDetails = (item) => {
    setSelectedProduct(item);
    setShowModal(true)
  }
  const handleCancelProd = () => {
    setShowModal(false);
  }

  const handleLoadMore = () => {
    const newQuery = {
      ...query,
      skip: query.skip + 8,
      loadMore: true
    }
    setQuery(query);
    getProductList(newQuery);
  }


  const handleSearch = (filters) => {
    const newQuery = {
      skip: 0,
      filters,
    }
    setQuery(newQuery);
    getProductList(newQuery)
  }


  const handleClearSearch = () => {
    setQuery(initialQuery);
    getProductList(initialQuery)
  }

  const renderFilters = () => {
    return (
      <ProductFilters onSearch={handleSearch} onClear={handleClearSearch} initialFiters={initialQuery.filters} />
    )

  }

  useEffect(() => {
    getProductList(query);

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
                <EyeOutlined onClick={() => handleShowPorductDetails(item)} key="view" style={{ color: "orange", fontSize: 18 }} />,
                <ShoppingCartOutlined key="cart" style={{ color: "#b82837", fontSize: 18 }} />,

              ]}
            >
              <Space direction='vertical'>
                <Text onClick={() => handleShowPorductDetails(item)} strong> {item?.name} </Text>
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
      {renderFilters()}
      {renderProductList()}
      <div className='product-load-more'>
        {query?.skip <= productList?.length ? (
          <>
            <DownOutlined onClick={handleLoadMore} />
            <p>Load more..</p>
          </>
        ) : <>
          <p>No more products</p>
        </>}
      </div>
      <ProductModalDetails visible={showModal} product={selectedProduct} onCancel={handleCancelProd} />
    </div>

  )
}

export default Home
